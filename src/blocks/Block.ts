/**
 * 块类型的枚举定义
 */
export enum BlockType {
  PlainText = "plain-text",
  HTML = "html",
  Markdown = "markdown",
  LaTeX = "latex",
}

/**
 * 块基类，使用泛型定义块的通用属性和行为
 */
export class Block<T extends BlockType = BlockType> {
  // 块的 X 坐标（可读写，用于拖动时更新位置）
  private _x = 0;
  // 块的 Y 坐标（可读写，用于拖动时更新位置）
  private _y = 0;
  // 块的宽度
  private _width = 0;
  // 块的高度
  private _height = 0;

  /**
   * 构造函数
   * @param id - 块的唯一标识符（UUID 格式）
   * @param name - 块的名称（用于标识用途，如“标题块”）
   * @param type - 块的类型
   * @param x - 块的 x 坐标
   * @param y - 块的 y 坐标
   * @param width - 块的宽度
   * @param height - 块的高度
   */
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: T,
    x = 0,
    y = 0,
    width = 0,
    height = 0
  ) {
    this.x = x; // 块的 X 坐标（默认值：0）
    this.y = y; // 块的 Y 坐标（默认值：0）
    this.width = width;
    this.height = height;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = Math.round(value); // 强制取整，避免像素级模糊
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = Math.round(value); // 强制取整，避免像素级模糊
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = Math.round(value);
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = Math.round(value);
  }

  /**
   * 克隆块实例（深拷贝属性）
   * @returns 新的块实例，类型与当前实例一致
   */
  clone(): Block<T> {
    // 子类需重写此方法以复制专属属性
    const clone = new Block(
      this.id,
      this.name,
      this.type,
      this.width,
      this.height
    );
    clone.x = this.x;
    clone.y = this.y;
    return clone;
  }

  /**
   * 获取块的序列化数据（使用泛型保持类型一致性）
   * @returns 包含块基本信息的对象
   */
  toJSON(): {
    id: string;
    name: string;
    type: T;
    x: number;
    y: number;
    width: number;
    height: number;
  } {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }
}
