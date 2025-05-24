/**
 * Markdown块定义
 * @module MarkdownBlock
 * @description 用于解析和渲染Markdown内容的块类型
 */

import { Block, BlockType } from "./Block";
import { marked } from "marked"; // Markdown解析库
import { validateMarkdown } from "../utils/validationUtils"; // 自定义Markdown验证工具

/**
 * Markdown块类，继承自 Block 基类
 */
export class MarkdownBlock extends Block<BlockType.Markdown> {
  /**
   * 解析后的HTML内容（只读，由Markdown自动生成）
   */
  private _html = "";

  /**
   * 构造函数
   * @param id - 块唯一标识符（UUID）
   * @param name - 块名称（如"功能说明"）
   * @param markdown - Markdown内容（默认值：空字符串）
   * @param width - 块的宽度
   * @param height - 块的高度
   * @throws {Error} 当 markdown 包含无效格式时抛出异常
   */
  constructor(
    id: string,
    name: string,
    public markdown: string = "",
    width = 0,
    height = 0
  ) {
    // 调用基类构造函数，指定块类型为 "markdown"
    super(id, name, BlockType.Markdown, width, height);

    // 解析Markdown为HTML（异步）
    this.parseMarkdown(markdown).then((html) => {
      this.html = html;
    });

    // 可选：自定义验证（如禁止特定语法）
    if (!validateMarkdown(markdown)) {
      throw new Error("Markdown内容包含无效格式");
    }
  }

  get html(): string {
    return this._html;
  }

  private set html(value: string) {
    this._html = value;
  }

  /**
   * 解析Markdown内容为HTML
   * @param markdown - 原始Markdown代码
   * @returns 解析后的HTML
   */
  private async parseMarkdown(markdown: string): Promise<string> {
    return marked(markdown, {
      gfm: true, // 启用GitHub Flavored Markdown特性
      breaks: true, // 支持换行符
      pedantic: false, // 严格模式（关闭）
    });
  }

  /**
   * 重写克隆方法，复制Markdown内容和解析后的HTML
   * @returns 新的Markdown块实例
   */
  override clone(): MarkdownBlock {
    const baseClone = super.clone();
    return new MarkdownBlock(
      baseClone.id,
      baseClone.name,
      this.markdown, // 复制原始Markdown内容
      baseClone.width,
      baseClone.height
    );
  }

  /**
   * 扩展序列化数据，包含Markdown源内容和解析后的HTML
   * @returns 包含 markdown 和 html 字段的序列化对象
   */
  override toJSON(): {
    id: string;
    name: string;
    type: BlockType.Markdown;
    x: number;
    y: number;
    width: number;
    height: number;
    markdown: string;
    html: string;
  } {
    return {
      ...super.toJSON(),
      markdown: this.markdown,
      html: this.html,
    };
  }

  /**
   * 更新Markdown内容（自动重新解析为HTML）
   * @param newMarkdown - 新Markdown代码
   * @throws {Error} 当 newMarkdown 包含无效格式时抛出异常
   */
  updateMarkdown(newMarkdown: string): void {
    this.parseMarkdown(newMarkdown).then((parsedHtml) => {
      if (!validateMarkdown(newMarkdown)) {
        throw new Error("更新后的Markdown内容无效");
      }
      this.markdown = newMarkdown;
      this.html = parsedHtml;
    });
  }
}
