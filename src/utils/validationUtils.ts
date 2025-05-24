import sanitizeHtml from "sanitize-html";
import { marked } from "marked";
import katex, { KatexOptions } from "katex";

/**
 * 验证Markdown内容是否有效
 * @param markdown - 待验证的Markdown内容
 * @returns 如果内容有效返回 true，否则返回 false
 */
export function validateMarkdown(markdown: string): boolean {
  if (typeof markdown !== "string") {
    return false;
  }
  try {
    // 尝试解析Markdown内容
    marked(markdown, {
      gfm: true,
      pedantic: false,
      breaks: true,
    });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * 验证HTML内容是否有效
 * @param html - 待验证的HTML内容
 * @returns 如果内容有效返回 true，否则返回 false
 */
export function validateHtml(html: string): boolean {
  if (typeof html !== "string") {
    return false;
  }
  const sanitized = sanitizeHtml(html, {
    allowedTags: [
      "p",
      "a",
      "strong",
      "em",
      "br",
      "ul",
      "ol",
      "li",
      "img",
      "code",
      "div",
      "span",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      "*": ["class", "style"],
    },
    transformTags: {
      a: (tagName: string, attribs: sanitizeHtml.Attributes) => ({
        tagName: "a",
        attribs: {
          ...attribs,
          target: attribs.target || "_blank",
          rel: attribs.rel || "noopener noreferrer",
        },
      }),
    },
    textFilter: (text: string) => text.replace(/<[^>]+>/g, ""),
  });
  // 简单验证，只要过滤后有内容就认为有效
  return sanitized.length > 0;
}

/**
 * 验证LaTeX公式是否有效
 * @param latex - 待验证的LaTeX公式
 * @returns 如果公式有效返回 true，否则返回 false
 */
export function validateLatex(latex: string): boolean {
  if (typeof latex !== "string") {
    return false;
  }
  try {
    const options: KatexOptions = {
      output: "html",
      displayMode: false,
      throwOnError: true,
      macros: {
        "\\vec": "\\mathbf{#1}",
      },
    };
    katex.renderToString(latex, options);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * 验证字符串是否有效
 * @param str - 待验证的字符串
 * @returns 如果字符串有效返回 true，否则返回 false
 */
export function validateString(str: string): boolean {
  return typeof str === "string";
}
