/**
 * LaTeX块定义
 * @module LaTeXBlock
 * @description 用于渲染LaTeX公式的块类型，支持行内公式和块级公式
 */

import { Block, BlockType } from "./Block";
import katex, { KatexOptions } from "katex"; // LaTeX渲染库
import { validateLatex } from "../utils/validationUtils"; // 自定义LaTeX验证工具

/**
 * LaTeX块类，继承自 Block 基类
 */
export class LaTeXBlock extends Block<BlockType.LaTeX> {
  /**
   * 渲染后的HTML内容（只读）
   */
  private _html = "";

  /**
   * 构造函数
   * @param id - 块唯一标识符（UUID）
   * @param name - 块名称（如"数学公式"）
   * @param latex - LaTeX公式内容（默认值：空字符串）
   * @param width - 块的宽度
   * @param height - 块的高度
   * @throws {Error} 当 LaTeX 公式渲染失败时抛出异常
   */
  constructor(
    id: string,
    name: string,
    public latex: string = "",
    width = 0,
    height = 0
  ) {
    // 调用基类构造函数，指定块类型为 "latex"
    super(id, name, BlockType.LaTeX, width, height);

    // 渲染LaTeX为HTML，处理错误
    this.html = this.renderLatex(latex);

    // 可选：自定义验证（如检查公式完整性）
    if (!validateLatex(latex)) {
      throw new Error("LaTeX公式格式无效");
    }
  }

  get html(): string {
    return this._html;
  }

  private set html(value: string) {
    this._html = value;
  }

  /**
   * 渲染LaTeX公式为HTML
   * @param latex - 原始LaTeX代码
   * @returns 渲染后的HTML（含错误提示）
   */
  private renderLatex(latex: string): string {
    try {
      const options: KatexOptions = {
        output: "html", // 输出格式为HTML
        displayMode: false, // 是否为块级公式（默认行内）
        throwOnError: false, // 禁止抛出错误，转为捕获处理
        errorColor: "#ff4444", // 错误颜色
        macros: {
          // 自定义宏（示例：定义向量符号）
          "\\vec": "\\mathbf{#1}",
        },
      };

      return katex.renderToString(latex, options);
    } catch (error: unknown) {
      // 渲染失败时显示错误信息
      const errorMessage = (error as Error).message || "未知错误";
      return `<div class="latex-error">公式错误：${errorMessage}</div>`;
    }
  }

  /**
   * 重写克隆方法，复制LaTeX公式和渲染结果
   * @returns 新的LaTeX块实例
   */
  override clone(): LaTeXBlock {
    const baseClone = super.clone();
    return new LaTeXBlock(
      baseClone.id,
      baseClone.name,
      this.latex, // 复制原始LaTeX公式
      baseClone.width,
      baseClone.height
    );
  }

  /**
   * 扩展序列化数据，包含LaTeX源和渲染后的HTML
   * @returns 包含 latex 和 html 字段的序列化对象
   */
  override toJSON(): {
    id: string;
    name: string;
    type: BlockType.LaTeX;
    x: number;
    y: number;
    width: number;
    height: number;
    latex: string;
    html: string;
  } {
    return {
      ...super.toJSON(),
      latex: this.latex,
      html: this.html,
    };
  }

  /**
   * 更新LaTeX公式（自动重新渲染为HTML）
   * @param newLatex - 新LaTeX公式
   * @throws {Error} 当 newLatex 包含语法错误时抛出异常
   */
  updateLatex(newLatex: string): void {
    const renderedHTML = this.renderLatex(newLatex);
    if (renderedHTML.includes("latex-error")) {
      // 检查是否有错误
      throw new Error("LaTeX公式渲染失败");
    }
    this.latex = newLatex;
    this.html = renderedHTML;
  }
}
