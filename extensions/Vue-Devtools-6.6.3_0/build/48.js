"use strict";
(self["webpackChunk_vue_devtools_shell_chrome"] =
  self["webpackChunk_vue_devtools_shell_chrome"] || []).push([
  [48],
  {
    2428: (e, s, n) => {
      n.r(s), n.d(s, { conf: () => o, language: () => t });
      var o = {
          comments: { lineComment: "#" },
          brackets: [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
          ],
          autoClosingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
          ],
          surroundingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
          ],
        },
        t = {
          defaultToken: "",
          tokenPostfix: ".ini",
          escapes:
            /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
          tokenizer: {
            root: [
              [/^\[[^\]]*\]/, "metatag"],
              [/(^\w+)(\s*)(\=)/, ["key", "", "delimiter"]],
              { include: "@whitespace" },
              [/\d+/, "number"],
              [/"([^"\\]|\\.)*$/, "string.invalid"],
              [/'([^'\\]|\\.)*$/, "string.invalid"],
              [/"/, "string", '@string."'],
              [/'/, "string", "@string.'"],
            ],
            whitespace: [
              [/[ \t\r\n]+/, ""],
              [/^\s*[#;].*$/, "comment"],
            ],
            string: [
              [/[^\\"']+/, "string"],
              [/@escapes/, "string.escape"],
              [/\\./, "string.escape.invalid"],
              [
                /["']/,
                {
                  cases: {
                    "$#==$S2": { token: "string", next: "@pop" },
                    "@default": "string",
                  },
                },
              ],
            ],
          },
        };
    },
  },
]);
