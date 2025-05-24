/**
 * 纯文本块定义
 * @module PlainTextBlock
 * @description 用于存储和渲染纯文本内容的块类型
 */

import { Block, BlockType } from "./Block";
import { validateString } from "../utils/validationUtils"; // 引入验证工具

/**
 * 纯文本块类，继承自 Block 基类并指定具体类型
 */
export class PlainTextBlock extends Block<BlockType.PlainText> {
  /**
   * 构造函数
   * @param id - 块唯一标识符（UUID）
   * @param name - 块名称（如"标题"）
   * @param content - 文本内容（默认值："双击编辑"）
   * @param x - 块的 x 坐标
   * @param y - 块的 y 坐标
   * @param width - 块的宽度
   * @param height - 块的高度
   * @throws {Error} 当 content 非字符串时抛出异常
   */
  constructor(
    id: string,
    name: string,
    public content: string = "双击编辑",
    x = 0,
    y = 0,
    width = 0,
    height = 0
  ) {
    // 调用基类构造函数，明确指定块类型为 PlainText
    super(id, name, BlockType.PlainText, x, y, width, height);

    // 验证输入参数
    if (!validateString(content)) {
      throw new Error("纯文本块内容必须为字符串");
    }
  }

  /**
   * 重写克隆方法，复制文本内容
   * @returns 新的纯文本块实例
   */
  override clone(): PlainTextBlock {
    const baseClone = super.clone();
    return new PlainTextBlock(
      baseClone.id,
      baseClone.name,
      this.content,
      baseClone.width,
      baseClone.height
    );
  }

  /**
   * 扩展序列化数据，包含文本内容
   * @returns 包含 content 字段的序列化对象
   */
  override toJSON(): {
    id: string;
    name: string;
    type: BlockType.PlainText;
    x: number;
    y: number;
    width: number;
    height: number;
    content: string;
  } {
    return {
      ...super.toJSON(),
      content: this.content,
    };
  }

  /**
   * 更新文本内容（带验证）
   * @param newContent - 新文本内容
   * @throws {Error} 当 newContent 非字符串时抛出异常
   */
  updateContent(newContent: string): void {
    if (!validateString(newContent)) {
      throw new Error("文本内容必须为有效字符串");
    }
    this.content = newContent;
  }
}
