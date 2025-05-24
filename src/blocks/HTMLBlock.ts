/**
 * HTML块定义
 * @module HTMLBlock
 * @description 用于安全渲染HTML内容的块类型
 */

import { Block, BlockType } from "./Block";
import sanitizeHtml from "sanitize-html"; // 安全过滤库
import { validateHtml } from "../utils/validationUtils"; // 自定义HTML验证工具

/**
 * HTML块类，继承自 Block 基类
 */
export class HTMLBlock extends Block<BlockType.HTML> {
  /**
   * 构造函数
   * @param id - 块唯一标识符（UUID）
   * @param name - 块名称（如"按钮组件"）
   * @param html - HTML代码（默认值：空字符串）
   * @param width - 块的宽度
   * @param height - 块的高度
   * @throws {Error} 当 html 包含危险标签时抛出异常
   */
  constructor(
    id: string,
    name: string,
    public html: string = "",
    width = 0,
    height = 0
  ) {
    // 调用基类构造函数，指定块类型为 "html"
    super(id, name, BlockType.HTML, width, height);

    // 安全过滤HTML内容
    this.html = this.sanitizeHtml(html);

    // 可选：自定义验证（如禁止特定标签）
    if (!validateHtml(this.html)) {
      throw new Error("HTML内容包含禁止的标签");
    }
  }

  /**
   * 安全过滤HTML内容，防止XSS攻击
   * @param html - 原始HTML代码
   * @returns 过滤后的安全HTML
   */
  private sanitizeHtml(html: string): string {
    return sanitizeHtml(html, {
      allowedTags: [
        "div",
        "p",
        "a",
        "span",
        "strong",
        "em",
        "br",
        "ul",
        "ol",
        "li",
        "img",
        "code", // 允许的标签
      ],
      allowedAttributes: {
        a: ["href", "target", "rel"],
        img: ["src", "alt", "width", "height"],
        "*": ["class", "style"], // 允许所有标签的 class 和 style 属性
      },
      transformTags: {
        // 强制将 a 标签的 target 设置为 _blank
        a: (tagName: string, attribs: sanitizeHtml.Attributes) => ({
          tagName: "a",
          attribs: {
            ...attribs,
            target: attribs.target || "_blank",
            rel: attribs.rel || "noopener noreferrer",
          },
        }),
      },
      // 移除不允许的标签时保留内容
      textFilter: (text: string) => text.replace(/<[^>]+>/g, ""),
    });
  }

  /**
   * 重写克隆方法，复制HTML内容
   * @returns 新的HTML块实例
   */
  override clone(): HTMLBlock {
    const baseClone = super.clone();
    return new HTMLBlock(
      baseClone.id,
      baseClone.name,
      this.html, // 复制过滤后的HTML内容
      baseClone.width,
      baseClone.height
    );
  }

  /**
   * 扩展序列化数据，包含HTML内容
   * @returns 包含 html 字段的序列化对象
   */
  override toJSON(): {
    id: string;
    name: string;
    type: BlockType.HTML;
    x: number;
    y: number;
    width: number;
    height: number;
    html: string;
  } {
    return {
      ...super.toJSON(),
      html: this.html,
    };
  }

  /**
   * 更新HTML内容（自动触发安全过滤）
   * @param newHtml - 新HTML代码
   * @throws {Error} 当 newHtml 包含无效内容时抛出异常
   */
  updateHtml(newHtml: string): void {
    const sanitizedHtml = this.sanitizeHtml(newHtml);
    if (!validateHtml(sanitizedHtml)) {
      throw new Error("更新后的HTML内容无效");
    }
    this.html = sanitizedHtml;
  }
}
