"use strict";
(self["webpackChunk_vue_devtools_shell_chrome"] =
  self["webpackChunk_vue_devtools_shell_chrome"] || []).push([
  [9500],
  {
    19500: (e, t, n) => {
      n.r(t), n.d(t, { setupMode: () => _n });
      var r,
        i = n(79976),
        o = 12e4,
        a = (function () {
          function e(e) {
            var t = this;
            (this._defaults = e),
              (this._worker = null),
              (this._idleCheckInterval = setInterval(function () {
                return t._checkIfIdle();
              }, 3e4)),
              (this._lastUsedTime = 0),
              (this._configChangeListener = this._defaults.onDidChange(
                function () {
                  return t._stopWorker();
                }
              ));
          }
          return (
            (e.prototype._stopWorker = function () {
              this._worker && (this._worker.dispose(), (this._worker = null)),
                (this._client = null);
            }),
            (e.prototype.dispose = function () {
              clearInterval(this._idleCheckInterval),
                this._configChangeListener.dispose(),
                this._stopWorker();
            }),
            (e.prototype._checkIfIdle = function () {
              if (this._worker) {
                var e = Date.now() - this._lastUsedTime;
                e > o && this._stopWorker();
              }
            }),
            (e.prototype._getClient = function () {
              return (
                (this._lastUsedTime = Date.now()),
                this._client ||
                  ((this._worker = i.O0.createWebWorker({
                    moduleId: "vs/language/json/jsonWorker",
                    label: this._defaults.languageId,
                    createData: {
                      languageSettings: this._defaults.diagnosticsOptions,
                      languageId: this._defaults.languageId,
                      enableSchemaRequest:
                        this._defaults.diagnosticsOptions.enableSchemaRequest,
                    },
                  })),
                  (this._client = this._worker.getProxy())),
                this._client
              );
            }),
            (e.prototype.getLanguageServiceWorker = function () {
              for (var e, t = this, n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
              return this._getClient()
                .then(function (t) {
                  e = t;
                })
                .then(function (e) {
                  return t._worker.withSyncedResources(n);
                })
                .then(function (t) {
                  return e;
                });
            }),
            e
          );
        })();
      function s(e, t) {
        void 0 === t && (t = !1);
        var n = e.length,
          r = 0,
          i = "",
          o = 0,
          a = 16,
          s = 0,
          f = 0,
          h = 0,
          p = 0,
          d = 0;
        function m(t, n) {
          var i = 0,
            o = 0;
          while (i < t || !n) {
            var a = e.charCodeAt(r);
            if (a >= 48 && a <= 57) o = 16 * o + a - 48;
            else if (a >= 65 && a <= 70) o = 16 * o + a - 65 + 10;
            else {
              if (!(a >= 97 && a <= 102)) break;
              o = 16 * o + a - 97 + 10;
            }
            r++, i++;
          }
          return i < t && (o = -1), o;
        }
        function g(e) {
          (r = e), (i = ""), (o = 0), (a = 16), (d = 0);
        }
        function v() {
          var t = r;
          if (48 === e.charCodeAt(r)) r++;
          else {
            r++;
            while (r < e.length && l(e.charCodeAt(r))) r++;
          }
          if (r < e.length && 46 === e.charCodeAt(r)) {
            if ((r++, !(r < e.length && l(e.charCodeAt(r)))))
              return (d = 3), e.substring(t, r);
            r++;
            while (r < e.length && l(e.charCodeAt(r))) r++;
          }
          var n = r;
          if (
            r < e.length &&
            (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r))
          )
            if (
              (r++,
              ((r < e.length && 43 === e.charCodeAt(r)) ||
                45 === e.charCodeAt(r)) &&
                r++,
              r < e.length && l(e.charCodeAt(r)))
            ) {
              r++;
              while (r < e.length && l(e.charCodeAt(r))) r++;
              n = r;
            } else d = 3;
          return e.substring(t, n);
        }
        function y() {
          var t = "",
            i = r;
          while (1) {
            if (r >= n) {
              (t += e.substring(i, r)), (d = 2);
              break;
            }
            var o = e.charCodeAt(r);
            if (34 === o) {
              (t += e.substring(i, r)), r++;
              break;
            }
            if (92 !== o) {
              if (o >= 0 && o <= 31) {
                if (c(o)) {
                  (t += e.substring(i, r)), (d = 2);
                  break;
                }
                d = 6;
              }
              r++;
            } else {
              if (((t += e.substring(i, r)), r++, r >= n)) {
                d = 2;
                break;
              }
              var a = e.charCodeAt(r++);
              switch (a) {
                case 34:
                  t += '"';
                  break;
                case 92:
                  t += "\\";
                  break;
                case 47:
                  t += "/";
                  break;
                case 98:
                  t += "\b";
                  break;
                case 102:
                  t += "\f";
                  break;
                case 110:
                  t += "\n";
                  break;
                case 114:
                  t += "\r";
                  break;
                case 116:
                  t += "\t";
                  break;
                case 117:
                  var s = m(4, !0);
                  s >= 0 ? (t += String.fromCharCode(s)) : (d = 4);
                  break;
                default:
                  d = 5;
              }
              i = r;
            }
          }
          return t;
        }
        function b() {
          if (((i = ""), (d = 0), (o = r), (f = s), (p = h), r >= n))
            return (o = n), (a = 17);
          var t = e.charCodeAt(r);
          if (u(t)) {
            do {
              r++, (i += String.fromCharCode(t)), (t = e.charCodeAt(r));
            } while (u(t));
            return (a = 15);
          }
          if (c(t))
            return (
              r++,
              (i += String.fromCharCode(t)),
              13 === t && 10 === e.charCodeAt(r) && (r++, (i += "\n")),
              s++,
              (h = r),
              (a = 14)
            );
          switch (t) {
            case 123:
              return r++, (a = 1);
            case 125:
              return r++, (a = 2);
            case 91:
              return r++, (a = 3);
            case 93:
              return r++, (a = 4);
            case 58:
              return r++, (a = 6);
            case 44:
              return r++, (a = 5);
            case 34:
              return r++, (i = y()), (a = 10);
            case 47:
              var m = r - 1;
              if (47 === e.charCodeAt(r + 1)) {
                r += 2;
                while (r < n) {
                  if (c(e.charCodeAt(r))) break;
                  r++;
                }
                return (i = e.substring(m, r)), (a = 12);
              }
              if (42 === e.charCodeAt(r + 1)) {
                r += 2;
                var g = n - 1,
                  b = !1;
                while (r < g) {
                  var C = e.charCodeAt(r);
                  if (42 === C && 47 === e.charCodeAt(r + 1)) {
                    (r += 2), (b = !0);
                    break;
                  }
                  r++,
                    c(C) &&
                      (13 === C && 10 === e.charCodeAt(r) && r++, s++, (h = r));
                }
                return b || (r++, (d = 1)), (i = e.substring(m, r)), (a = 13);
              }
              return (i += String.fromCharCode(t)), r++, (a = 16);
            case 45:
              if (
                ((i += String.fromCharCode(t)),
                r++,
                r === n || !l(e.charCodeAt(r)))
              )
                return (a = 16);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return (i += v()), (a = 11);
            default:
              while (r < n && x(t)) r++, (t = e.charCodeAt(r));
              if (o !== r) {
                switch (((i = e.substring(o, r)), i)) {
                  case "true":
                    return (a = 8);
                  case "false":
                    return (a = 9);
                  case "null":
                    return (a = 7);
                }
                return (a = 16);
              }
              return (i += String.fromCharCode(t)), r++, (a = 16);
          }
        }
        function x(e) {
          if (u(e) || c(e)) return !1;
          switch (e) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
              return !1;
          }
          return !0;
        }
        function C() {
          var e;
          do {
            e = b();
          } while (e >= 12 && e <= 15);
          return e;
        }
        return {
          setPosition: g,
          getPosition: function () {
            return r;
          },
          scan: t ? C : b,
          getToken: function () {
            return a;
          },
          getTokenValue: function () {
            return i;
          },
          getTokenOffset: function () {
            return o;
          },
          getTokenLength: function () {
            return r - o;
          },
          getTokenStartLine: function () {
            return f;
          },
          getTokenStartCharacter: function () {
            return o - p;
          },
          getTokenError: function () {
            return d;
          },
        };
      }
      function u(e) {
        return (
          32 === e ||
          9 === e ||
          11 === e ||
          12 === e ||
          160 === e ||
          5760 === e ||
          (e >= 8192 && e <= 8203) ||
          8239 === e ||
          8287 === e ||
          12288 === e ||
          65279 === e
        );
      }
      function c(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e;
      }
      function l(e) {
        return e >= 48 && e <= 57;
      }
      function f(e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = r.DEFAULT);
        var i = null,
          o = [],
          a = [];
        function s(e) {
          Array.isArray(o) ? o.push(e) : null !== i && (o[i] = e);
        }
        var u = {
          onObjectBegin: function () {
            var e = {};
            s(e), a.push(o), (o = e), (i = null);
          },
          onObjectProperty: function (e) {
            i = e;
          },
          onObjectEnd: function () {
            o = a.pop();
          },
          onArrayBegin: function () {
            var e = [];
            s(e), a.push(o), (o = e), (i = null);
          },
          onArrayEnd: function () {
            o = a.pop();
          },
          onLiteralValue: s,
          onError: function (e, n, r) {
            t.push({ error: e, offset: n, length: r });
          },
        };
        return g(e, u, n), o[0];
      }
      function h(e) {
        if (!e.parent || !e.parent.children) return [];
        var t = h(e.parent);
        if ("property" === e.parent.type) {
          var n = e.parent.children[0].value;
          t.push(n);
        } else if ("array" === e.parent.type) {
          var r = e.parent.children.indexOf(e);
          -1 !== r && t.push(r);
        }
        return t;
      }
      function p(e) {
        switch (e.type) {
          case "array":
            return e.children.map(p);
          case "object":
            for (
              var t = Object.create(null), n = 0, r = e.children;
              n < r.length;
              n++
            ) {
              var i = r[n],
                o = i.children[1];
              o && (t[i.children[0].value] = p(o));
            }
            return t;
          case "null":
          case "string":
          case "number":
          case "boolean":
            return e.value;
          default:
            return;
        }
      }
      function d(e, t, n) {
        return (
          void 0 === n && (n = !1),
          (t >= e.offset && t < e.offset + e.length) ||
            (n && t === e.offset + e.length)
        );
      }
      function m(e, t, n) {
        if ((void 0 === n && (n = !1), d(e, t, n))) {
          var r = e.children;
          if (Array.isArray(r))
            for (var i = 0; i < r.length && r[i].offset <= t; i++) {
              var o = m(r[i], t, n);
              if (o) return o;
            }
          return e;
        }
      }
      function g(e, t, n) {
        void 0 === n && (n = r.DEFAULT);
        var i = s(e, !1);
        function o(e) {
          return e
            ? function () {
                return e(
                  i.getTokenOffset(),
                  i.getTokenLength(),
                  i.getTokenStartLine(),
                  i.getTokenStartCharacter()
                );
              }
            : function () {
                return !0;
              };
        }
        function a(e) {
          return e
            ? function (t) {
                return e(
                  t,
                  i.getTokenOffset(),
                  i.getTokenLength(),
                  i.getTokenStartLine(),
                  i.getTokenStartCharacter()
                );
              }
            : function () {
                return !0;
              };
        }
        var u = o(t.onObjectBegin),
          c = a(t.onObjectProperty),
          l = o(t.onObjectEnd),
          f = o(t.onArrayBegin),
          h = o(t.onArrayEnd),
          p = a(t.onLiteralValue),
          d = a(t.onSeparator),
          m = o(t.onComment),
          g = a(t.onError),
          v = n && n.disallowComments,
          y = n && n.allowTrailingComma;
        function b() {
          while (1) {
            var e = i.scan();
            switch (i.getTokenError()) {
              case 4:
                x(14);
                break;
              case 5:
                x(15);
                break;
              case 3:
                x(13);
                break;
              case 1:
                v || x(11);
                break;
              case 2:
                x(12);
                break;
              case 6:
                x(16);
                break;
            }
            switch (e) {
              case 12:
              case 13:
                v ? x(10) : m();
                break;
              case 16:
                x(1);
                break;
              case 15:
              case 14:
                break;
              default:
                return e;
            }
          }
        }
        function x(e, t, n) {
          if (
            (void 0 === t && (t = []),
            void 0 === n && (n = []),
            g(e),
            t.length + n.length > 0)
          ) {
            var r = i.getToken();
            while (17 !== r) {
              if (-1 !== t.indexOf(r)) {
                b();
                break;
              }
              if (-1 !== n.indexOf(r)) break;
              r = b();
            }
          }
        }
        function C(e) {
          var t = i.getTokenValue();
          return e ? p(t) : c(t), b(), !0;
        }
        function w() {
          switch (i.getToken()) {
            case 11:
              var e = i.getTokenValue(),
                t = Number(e);
              isNaN(t) && (x(2), (t = 0)), p(t);
              break;
            case 7:
              p(null);
              break;
            case 8:
              p(!0);
              break;
            case 9:
              p(!1);
              break;
            default:
              return !1;
          }
          return b(), !0;
        }
        function A() {
          return 10 !== i.getToken()
            ? (x(3, [], [2, 5]), !1)
            : (C(!1),
              6 === i.getToken()
                ? (d(":"), b(), I() || x(4, [], [2, 5]))
                : x(5, [], [2, 5]),
              !0);
        }
        function k() {
          u(), b();
          var e = !1;
          while (2 !== i.getToken() && 17 !== i.getToken()) {
            if (5 === i.getToken()) {
              if ((e || x(4, [], []), d(","), b(), 2 === i.getToken() && y))
                break;
            } else e && x(6, [], []);
            A() || x(4, [], [2, 5]), (e = !0);
          }
          return l(), 2 !== i.getToken() ? x(7, [2], []) : b(), !0;
        }
        function S() {
          f(), b();
          var e = !1;
          while (4 !== i.getToken() && 17 !== i.getToken()) {
            if (5 === i.getToken()) {
              if ((e || x(4, [], []), d(","), b(), 4 === i.getToken() && y))
                break;
            } else e && x(6, [], []);
            I() || x(4, [], [4, 5]), (e = !0);
          }
          return h(), 4 !== i.getToken() ? x(8, [4], []) : b(), !0;
        }
        function I() {
          switch (i.getToken()) {
            case 3:
              return S();
            case 1:
              return k();
            case 10:
              return C(!0);
            default:
              return w();
          }
        }
        return (
          b(),
          17 === i.getToken()
            ? !!n.allowEmptyContent || (x(4, [], []), !1)
            : I()
            ? (17 !== i.getToken() && x(9, [], []), !0)
            : (x(4, [], []), !1)
        );
      }
      (function (e) {
        e.DEFAULT = { allowTrailingComma: !1 };
      })(r || (r = {}));
      var v,
        y,
        b,
        x,
        C,
        w,
        A,
        k,
        S,
        I,
        E,
        T,
        O,
        j,
        _,
        P,
        M,
        V,
        N,
        F,
        R,
        $,
        L,
        D,
        U,
        W,
        q = s,
        B = f,
        K = m,
        J = h,
        H = p;
      function z(e, t) {
        if (e === t) return !0;
        if (null === e || void 0 === e || null === t || void 0 === t) return !1;
        if (typeof e !== typeof t) return !1;
        if ("object" !== typeof e) return !1;
        if (Array.isArray(e) !== Array.isArray(t)) return !1;
        var n, r;
        if (Array.isArray(e)) {
          if (e.length !== t.length) return !1;
          for (n = 0; n < e.length; n++) if (!z(e[n], t[n])) return !1;
        } else {
          var i = [];
          for (r in e) i.push(r);
          i.sort();
          var o = [];
          for (r in t) o.push(r);
          if ((o.sort(), !z(i, o))) return !1;
          for (n = 0; n < i.length; n++) if (!z(e[i[n]], t[i[n]])) return !1;
        }
        return !0;
      }
      function G(e) {
        return "number" === typeof e;
      }
      function X(e) {
        return "undefined" !== typeof e;
      }
      function Z(e) {
        return "boolean" === typeof e;
      }
      function Q(e) {
        return "string" === typeof e;
      }
      (function (e) {
        (e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647);
      })(v || (v = {})),
        (function (e) {
          (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647);
        })(y || (y = {})),
        (function (e) {
          function t(e, t) {
            return (
              e === Number.MAX_VALUE && (e = y.MAX_VALUE),
              t === Number.MAX_VALUE && (t = y.MAX_VALUE),
              { line: e, character: t }
            );
          }
          function n(e) {
            var t = e;
            return (
              Pe.objectLiteral(t) &&
              Pe.uinteger(t.line) &&
              Pe.uinteger(t.character)
            );
          }
          (e.create = t), (e.is = n);
        })(b || (b = {})),
        (function (e) {
          function t(e, t, n, r) {
            if (
              Pe.uinteger(e) &&
              Pe.uinteger(t) &&
              Pe.uinteger(n) &&
              Pe.uinteger(r)
            )
              return { start: b.create(e, t), end: b.create(n, r) };
            if (b.is(e) && b.is(t)) return { start: e, end: t };
            throw new Error(
              "Range#create called with invalid arguments[" +
                e +
                ", " +
                t +
                ", " +
                n +
                ", " +
                r +
                "]"
            );
          }
          function n(e) {
            var t = e;
            return Pe.objectLiteral(t) && b.is(t.start) && b.is(t.end);
          }
          (e.create = t), (e.is = n);
        })(x || (x = {})),
        (function (e) {
          function t(e, t) {
            return { uri: e, range: t };
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              x.is(t.range) &&
              (Pe.string(t.uri) || Pe.undefined(t.uri))
            );
          }
          (e.create = t), (e.is = n);
        })(C || (C = {})),
        (function (e) {
          function t(e, t, n, r) {
            return {
              targetUri: e,
              targetRange: t,
              targetSelectionRange: n,
              originSelectionRange: r,
            };
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              x.is(t.targetRange) &&
              Pe.string(t.targetUri) &&
              (x.is(t.targetSelectionRange) ||
                Pe.undefined(t.targetSelectionRange)) &&
              (x.is(t.originSelectionRange) ||
                Pe.undefined(t.originSelectionRange))
            );
          }
          (e.create = t), (e.is = n);
        })(w || (w = {})),
        (function (e) {
          function t(e, t, n, r) {
            return { red: e, green: t, blue: n, alpha: r };
          }
          function n(e) {
            var t = e;
            return (
              Pe.numberRange(t.red, 0, 1) &&
              Pe.numberRange(t.green, 0, 1) &&
              Pe.numberRange(t.blue, 0, 1) &&
              Pe.numberRange(t.alpha, 0, 1)
            );
          }
          (e.create = t), (e.is = n);
        })(A || (A = {})),
        (function (e) {
          function t(e, t) {
            return { range: e, color: t };
          }
          function n(e) {
            var t = e;
            return x.is(t.range) && A.is(t.color);
          }
          (e.create = t), (e.is = n);
        })(k || (k = {})),
        (function (e) {
          function t(e, t, n) {
            return { label: e, textEdit: t, additionalTextEdits: n };
          }
          function n(e) {
            var t = e;
            return (
              Pe.string(t.label) &&
              (Pe.undefined(t.textEdit) || V.is(t)) &&
              (Pe.undefined(t.additionalTextEdits) ||
                Pe.typedArray(t.additionalTextEdits, V.is))
            );
          }
          (e.create = t), (e.is = n);
        })(S || (S = {})),
        (function (e) {
          (e["Comment"] = "comment"),
            (e["Imports"] = "imports"),
            (e["Region"] = "region");
        })(I || (I = {})),
        (function (e) {
          function t(e, t, n, r, i) {
            var o = { startLine: e, endLine: t };
            return (
              Pe.defined(n) && (o.startCharacter = n),
              Pe.defined(r) && (o.endCharacter = r),
              Pe.defined(i) && (o.kind = i),
              o
            );
          }
          function n(e) {
            var t = e;
            return (
              Pe.uinteger(t.startLine) &&
              Pe.uinteger(t.startLine) &&
              (Pe.undefined(t.startCharacter) ||
                Pe.uinteger(t.startCharacter)) &&
              (Pe.undefined(t.endCharacter) || Pe.uinteger(t.endCharacter)) &&
              (Pe.undefined(t.kind) || Pe.string(t.kind))
            );
          }
          (e.create = t), (e.is = n);
        })(E || (E = {})),
        (function (e) {
          function t(e, t) {
            return { location: e, message: t };
          }
          function n(e) {
            var t = e;
            return Pe.defined(t) && C.is(t.location) && Pe.string(t.message);
          }
          (e.create = t), (e.is = n);
        })(T || (T = {})),
        (function (e) {
          (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
        })(O || (O = {})),
        (function (e) {
          (e.Unnecessary = 1), (e.Deprecated = 2);
        })(j || (j = {})),
        (function (e) {
          function t(e) {
            var t = e;
            return void 0 !== t && null !== t && Pe.string(t.href);
          }
          e.is = t;
        })(_ || (_ = {})),
        (function (e) {
          function t(e, t, n, r, i, o) {
            var a = { range: e, message: t };
            return (
              Pe.defined(n) && (a.severity = n),
              Pe.defined(r) && (a.code = r),
              Pe.defined(i) && (a.source = i),
              Pe.defined(o) && (a.relatedInformation = o),
              a
            );
          }
          function n(e) {
            var t,
              n = e;
            return (
              Pe.defined(n) &&
              x.is(n.range) &&
              Pe.string(n.message) &&
              (Pe.number(n.severity) || Pe.undefined(n.severity)) &&
              (Pe.integer(n.code) ||
                Pe.string(n.code) ||
                Pe.undefined(n.code)) &&
              (Pe.undefined(n.codeDescription) ||
                Pe.string(
                  null === (t = n.codeDescription) || void 0 === t
                    ? void 0
                    : t.href
                )) &&
              (Pe.string(n.source) || Pe.undefined(n.source)) &&
              (Pe.undefined(n.relatedInformation) ||
                Pe.typedArray(n.relatedInformation, T.is))
            );
          }
          (e.create = t), (e.is = n);
        })(P || (P = {})),
        (function (e) {
          function t(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = { title: e, command: t };
            return Pe.defined(n) && n.length > 0 && (i.arguments = n), i;
          }
          function n(e) {
            var t = e;
            return Pe.defined(t) && Pe.string(t.title) && Pe.string(t.command);
          }
          (e.create = t), (e.is = n);
        })(M || (M = {})),
        (function (e) {
          function t(e, t) {
            return { range: e, newText: t };
          }
          function n(e, t) {
            return { range: { start: e, end: e }, newText: t };
          }
          function r(e) {
            return { range: e, newText: "" };
          }
          function i(e) {
            var t = e;
            return Pe.objectLiteral(t) && Pe.string(t.newText) && x.is(t.range);
          }
          (e.replace = t), (e.insert = n), (e.del = r), (e.is = i);
        })(V || (V = {})),
        (function (e) {
          function t(e, t, n) {
            var r = { label: e };
            return (
              void 0 !== t && (r.needsConfirmation = t),
              void 0 !== n && (r.description = n),
              r
            );
          }
          function n(e) {
            var t = e;
            return (
              void 0 !== t &&
              Pe.objectLiteral(t) &&
              Pe.string(t.label) &&
              (Pe.boolean(t.needsConfirmation) ||
                void 0 === t.needsConfirmation) &&
              (Pe.string(t.description) || void 0 === t.description)
            );
          }
          (e.create = t), (e.is = n);
        })(N || (N = {})),
        (function (e) {
          function t(e) {
            var t = e;
            return "string" === typeof t;
          }
          e.is = t;
        })(F || (F = {})),
        (function (e) {
          function t(e, t, n) {
            return { range: e, newText: t, annotationId: n };
          }
          function n(e, t, n) {
            return { range: { start: e, end: e }, newText: t, annotationId: n };
          }
          function r(e, t) {
            return { range: e, newText: "", annotationId: t };
          }
          function i(e) {
            var t = e;
            return V.is(t) && (N.is(t.annotationId) || F.is(t.annotationId));
          }
          (e.replace = t), (e.insert = n), (e.del = r), (e.is = i);
        })(R || (R = {})),
        (function (e) {
          function t(e, t) {
            return { textDocument: e, edits: t };
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) && te.is(t.textDocument) && Array.isArray(t.edits)
            );
          }
          (e.create = t), (e.is = n);
        })($ || ($ = {})),
        (function (e) {
          function t(e, t, n) {
            var r = { kind: "create", uri: e };
            return (
              void 0 === t ||
                (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
                (r.options = t),
              void 0 !== n && (r.annotationId = n),
              r
            );
          }
          function n(e) {
            var t = e;
            return (
              t &&
              "create" === t.kind &&
              Pe.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  Pe.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    Pe.boolean(t.options.ignoreIfExists)))) &&
              (void 0 === t.annotationId || F.is(t.annotationId))
            );
          }
          (e.create = t), (e.is = n);
        })(L || (L = {})),
        (function (e) {
          function t(e, t, n, r) {
            var i = { kind: "rename", oldUri: e, newUri: t };
            return (
              void 0 === n ||
                (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
                (i.options = n),
              void 0 !== r && (i.annotationId = r),
              i
            );
          }
          function n(e) {
            var t = e;
            return (
              t &&
              "rename" === t.kind &&
              Pe.string(t.oldUri) &&
              Pe.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  Pe.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    Pe.boolean(t.options.ignoreIfExists)))) &&
              (void 0 === t.annotationId || F.is(t.annotationId))
            );
          }
          (e.create = t), (e.is = n);
        })(D || (D = {})),
        (function (e) {
          function t(e, t, n) {
            var r = { kind: "delete", uri: e };
            return (
              void 0 === t ||
                (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
                (r.options = t),
              void 0 !== n && (r.annotationId = n),
              r
            );
          }
          function n(e) {
            var t = e;
            return (
              t &&
              "delete" === t.kind &&
              Pe.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive ||
                  Pe.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists ||
                    Pe.boolean(t.options.ignoreIfNotExists)))) &&
              (void 0 === t.annotationId || F.is(t.annotationId))
            );
          }
          (e.create = t), (e.is = n);
        })(U || (U = {})),
        (function (e) {
          function t(e) {
            var t = e;
            return (
              t &&
              (void 0 !== t.changes || void 0 !== t.documentChanges) &&
              (void 0 === t.documentChanges ||
                t.documentChanges.every(function (e) {
                  return Pe.string(e.kind)
                    ? L.is(e) || D.is(e) || U.is(e)
                    : $.is(e);
                }))
            );
          }
          e.is = t;
        })(W || (W = {}));
      var Y,
        ee,
        te,
        ne,
        re,
        ie,
        oe,
        ae,
        se,
        ue,
        ce,
        le,
        fe,
        he,
        pe,
        de,
        me,
        ge,
        ve,
        ye,
        be,
        xe,
        Ce,
        we,
        Ae,
        ke,
        Se,
        Ie,
        Ee,
        Te,
        Oe = (function () {
          function e(e, t) {
            (this.edits = e), (this.changeAnnotations = t);
          }
          return (
            (e.prototype.insert = function (e, t, n) {
              var r, i;
              if (
                (void 0 === n
                  ? (r = V.insert(e, t))
                  : F.is(n)
                  ? ((i = n), (r = R.insert(e, t, n)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (i = this.changeAnnotations.manage(n)),
                    (r = R.insert(e, t, i))),
                this.edits.push(r),
                void 0 !== i)
              )
                return i;
            }),
            (e.prototype.replace = function (e, t, n) {
              var r, i;
              if (
                (void 0 === n
                  ? (r = V.replace(e, t))
                  : F.is(n)
                  ? ((i = n), (r = R.replace(e, t, n)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (i = this.changeAnnotations.manage(n)),
                    (r = R.replace(e, t, i))),
                this.edits.push(r),
                void 0 !== i)
              )
                return i;
            }),
            (e.prototype.delete = function (e, t) {
              var n, r;
              if (
                (void 0 === t
                  ? (n = V.del(e))
                  : F.is(t)
                  ? ((r = t), (n = R.del(e, t)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (r = this.changeAnnotations.manage(t)),
                    (n = R.del(e, r))),
                this.edits.push(n),
                void 0 !== r)
              )
                return r;
            }),
            (e.prototype.add = function (e) {
              this.edits.push(e);
            }),
            (e.prototype.all = function () {
              return this.edits;
            }),
            (e.prototype.clear = function () {
              this.edits.splice(0, this.edits.length);
            }),
            (e.prototype.assertChangeAnnotations = function (e) {
              if (void 0 === e)
                throw new Error(
                  "Text edit change is not configured to manage change annotations."
                );
            }),
            e
          );
        })(),
        je = (function () {
          function e(e) {
            (this._annotations = void 0 === e ? Object.create(null) : e),
              (this._counter = 0),
              (this._size = 0);
          }
          return (
            (e.prototype.all = function () {
              return this._annotations;
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                return this._size;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.manage = function (e, t) {
              var n;
              if (
                (F.is(e) ? (n = e) : ((n = this.nextId()), (t = e)),
                void 0 !== this._annotations[n])
              )
                throw new Error("Id " + n + " is already in use.");
              if (void 0 === t)
                throw new Error("No annotation provided for id " + n);
              return (this._annotations[n] = t), this._size++, n;
            }),
            (e.prototype.nextId = function () {
              return this._counter++, this._counter.toString();
            }),
            e
          );
        })();
      (function () {
        function e(e) {
          var t = this;
          (this._textEditChanges = Object.create(null)),
            void 0 !== e
              ? ((this._workspaceEdit = e),
                e.documentChanges
                  ? ((this._changeAnnotations = new je(e.changeAnnotations)),
                    (e.changeAnnotations = this._changeAnnotations.all()),
                    e.documentChanges.forEach(function (e) {
                      if ($.is(e)) {
                        var n = new Oe(e.edits, t._changeAnnotations);
                        t._textEditChanges[e.textDocument.uri] = n;
                      }
                    }))
                  : e.changes &&
                    Object.keys(e.changes).forEach(function (n) {
                      var r = new Oe(e.changes[n]);
                      t._textEditChanges[n] = r;
                    }))
              : (this._workspaceEdit = {});
        }
        Object.defineProperty(e.prototype, "edit", {
          get: function () {
            return (
              this.initDocumentChanges(),
              void 0 !== this._changeAnnotations &&
                (0 === this._changeAnnotations.size
                  ? (this._workspaceEdit.changeAnnotations = void 0)
                  : (this._workspaceEdit.changeAnnotations =
                      this._changeAnnotations.all())),
              this._workspaceEdit
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
          (e.prototype.getTextEditChange = function (e) {
            if (te.is(e)) {
              if (
                (this.initDocumentChanges(),
                void 0 === this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  "Workspace edit is not configured for document changes."
                );
              var t = { uri: e.uri, version: e.version },
                n = this._textEditChanges[t.uri];
              if (!n) {
                var r = [],
                  i = { textDocument: t, edits: r };
                this._workspaceEdit.documentChanges.push(i),
                  (n = new Oe(r, this._changeAnnotations)),
                  (this._textEditChanges[t.uri] = n);
              }
              return n;
            }
            if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
              throw new Error(
                "Workspace edit is not configured for normal text edit changes."
              );
            n = this._textEditChanges[e];
            if (!n) {
              r = [];
              (this._workspaceEdit.changes[e] = r),
                (n = new Oe(r)),
                (this._textEditChanges[e] = n);
            }
            return n;
          }),
          (e.prototype.initDocumentChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              ((this._changeAnnotations = new je()),
              (this._workspaceEdit.documentChanges = []),
              (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all()));
          }),
          (e.prototype.initChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              (this._workspaceEdit.changes = Object.create(null));
          }),
          (e.prototype.createFile = function (e, t, n) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
            var r, i, o;
            if (
              (N.is(t) || F.is(t) ? (r = t) : (n = t),
              void 0 === r
                ? (i = L.create(e, n))
                : ((o = F.is(r) ? r : this._changeAnnotations.manage(r)),
                  (i = L.create(e, n, o))),
              this._workspaceEdit.documentChanges.push(i),
              void 0 !== o)
            )
              return o;
          }),
          (e.prototype.renameFile = function (e, t, n, r) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
            var i, o, a;
            if (
              (N.is(n) || F.is(n) ? (i = n) : (r = n),
              void 0 === i
                ? (o = D.create(e, t, r))
                : ((a = F.is(i) ? i : this._changeAnnotations.manage(i)),
                  (o = D.create(e, t, r, a))),
              this._workspaceEdit.documentChanges.push(o),
              void 0 !== a)
            )
              return a;
          }),
          (e.prototype.deleteFile = function (e, t, n) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
            var r, i, o;
            if (
              (N.is(t) || F.is(t) ? (r = t) : (n = t),
              void 0 === r
                ? (i = U.create(e, n))
                : ((o = F.is(r) ? r : this._changeAnnotations.manage(r)),
                  (i = U.create(e, n, o))),
              this._workspaceEdit.documentChanges.push(i),
              void 0 !== o)
            )
              return o;
          });
      })();
      (function (e) {
        function t(e) {
          return { uri: e };
        }
        function n(e) {
          var t = e;
          return Pe.defined(t) && Pe.string(t.uri);
        }
        (e.create = t), (e.is = n);
      })(Y || (Y = {})),
        (function (e) {
          function t(e, t) {
            return { uri: e, version: t };
          }
          function n(e) {
            var t = e;
            return Pe.defined(t) && Pe.string(t.uri) && Pe.integer(t.version);
          }
          (e.create = t), (e.is = n);
        })(ee || (ee = {})),
        (function (e) {
          function t(e, t) {
            return { uri: e, version: t };
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              Pe.string(t.uri) &&
              (null === t.version || Pe.integer(t.version))
            );
          }
          (e.create = t), (e.is = n);
        })(te || (te = {})),
        (function (e) {
          function t(e, t, n, r) {
            return { uri: e, languageId: t, version: n, text: r };
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              Pe.string(t.uri) &&
              Pe.string(t.languageId) &&
              Pe.integer(t.version) &&
              Pe.string(t.text)
            );
          }
          (e.create = t), (e.is = n);
        })(ne || (ne = {})),
        (function (e) {
          (e.PlainText = "plaintext"), (e.Markdown = "markdown");
        })(re || (re = {})),
        (function (e) {
          function t(t) {
            var n = t;
            return n === e.PlainText || n === e.Markdown;
          }
          e.is = t;
        })(re || (re = {})),
        (function (e) {
          function t(e) {
            var t = e;
            return Pe.objectLiteral(e) && re.is(t.kind) && Pe.string(t.value);
          }
          e.is = t;
        })(ie || (ie = {})),
        (function (e) {
          (e.Text = 1),
            (e.Method = 2),
            (e.Function = 3),
            (e.Constructor = 4),
            (e.Field = 5),
            (e.Variable = 6),
            (e.Class = 7),
            (e.Interface = 8),
            (e.Module = 9),
            (e.Property = 10),
            (e.Unit = 11),
            (e.Value = 12),
            (e.Enum = 13),
            (e.Keyword = 14),
            (e.Snippet = 15),
            (e.Color = 16),
            (e.File = 17),
            (e.Reference = 18),
            (e.Folder = 19),
            (e.EnumMember = 20),
            (e.Constant = 21),
            (e.Struct = 22),
            (e.Event = 23),
            (e.Operator = 24),
            (e.TypeParameter = 25);
        })(oe || (oe = {})),
        (function (e) {
          (e.PlainText = 1), (e.Snippet = 2);
        })(ae || (ae = {})),
        (function (e) {
          e.Deprecated = 1;
        })(se || (se = {})),
        (function (e) {
          function t(e, t, n) {
            return { newText: e, insert: t, replace: n };
          }
          function n(e) {
            var t = e;
            return (
              t && Pe.string(t.newText) && x.is(t.insert) && x.is(t.replace)
            );
          }
          (e.create = t), (e.is = n);
        })(ue || (ue = {})),
        (function (e) {
          (e.asIs = 1), (e.adjustIndentation = 2);
        })(ce || (ce = {})),
        (function (e) {
          function t(e) {
            return { label: e };
          }
          e.create = t;
        })(le || (le = {})),
        (function (e) {
          function t(e, t) {
            return { items: e || [], isIncomplete: !!t };
          }
          e.create = t;
        })(fe || (fe = {})),
        (function (e) {
          function t(e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
          }
          function n(e) {
            var t = e;
            return (
              Pe.string(t) ||
              (Pe.objectLiteral(t) &&
                Pe.string(t.language) &&
                Pe.string(t.value))
            );
          }
          (e.fromPlainText = t), (e.is = n);
        })(he || (he = {})),
        (function (e) {
          function t(e) {
            var t = e;
            return (
              !!t &&
              Pe.objectLiteral(t) &&
              (ie.is(t.contents) ||
                he.is(t.contents) ||
                Pe.typedArray(t.contents, he.is)) &&
              (void 0 === e.range || x.is(e.range))
            );
          }
          e.is = t;
        })(pe || (pe = {})),
        (function (e) {
          function t(e, t) {
            return t ? { label: e, documentation: t } : { label: e };
          }
          e.create = t;
        })(de || (de = {})),
        (function (e) {
          function t(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = { label: e };
            return (
              Pe.defined(t) && (i.documentation = t),
              Pe.defined(n) ? (i.parameters = n) : (i.parameters = []),
              i
            );
          }
          e.create = t;
        })(me || (me = {})),
        (function (e) {
          (e.Text = 1), (e.Read = 2), (e.Write = 3);
        })(ge || (ge = {})),
        (function (e) {
          function t(e, t) {
            var n = { range: e };
            return Pe.number(t) && (n.kind = t), n;
          }
          e.create = t;
        })(ve || (ve = {})),
        (function (e) {
          (e.File = 1),
            (e.Module = 2),
            (e.Namespace = 3),
            (e.Package = 4),
            (e.Class = 5),
            (e.Method = 6),
            (e.Property = 7),
            (e.Field = 8),
            (e.Constructor = 9),
            (e.Enum = 10),
            (e.Interface = 11),
            (e.Function = 12),
            (e.Variable = 13),
            (e.Constant = 14),
            (e.String = 15),
            (e.Number = 16),
            (e.Boolean = 17),
            (e.Array = 18),
            (e.Object = 19),
            (e.Key = 20),
            (e.Null = 21),
            (e.EnumMember = 22),
            (e.Struct = 23),
            (e.Event = 24),
            (e.Operator = 25),
            (e.TypeParameter = 26);
        })(ye || (ye = {})),
        (function (e) {
          e.Deprecated = 1;
        })(be || (be = {})),
        (function (e) {
          function t(e, t, n, r, i) {
            var o = { name: e, kind: t, location: { uri: r, range: n } };
            return i && (o.containerName = i), o;
          }
          e.create = t;
        })(xe || (xe = {})),
        (function (e) {
          function t(e, t, n, r, i, o) {
            var a = {
              name: e,
              detail: t,
              kind: n,
              range: r,
              selectionRange: i,
            };
            return void 0 !== o && (a.children = o), a;
          }
          function n(e) {
            var t = e;
            return (
              t &&
              Pe.string(t.name) &&
              Pe.number(t.kind) &&
              x.is(t.range) &&
              x.is(t.selectionRange) &&
              (void 0 === t.detail || Pe.string(t.detail)) &&
              (void 0 === t.deprecated || Pe.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children)) &&
              (void 0 === t.tags || Array.isArray(t.tags))
            );
          }
          (e.create = t), (e.is = n);
        })(Ce || (Ce = {})),
        (function (e) {
          (e.Empty = ""),
            (e.QuickFix = "quickfix"),
            (e.Refactor = "refactor"),
            (e.RefactorExtract = "refactor.extract"),
            (e.RefactorInline = "refactor.inline"),
            (e.RefactorRewrite = "refactor.rewrite"),
            (e.Source = "source"),
            (e.SourceOrganizeImports = "source.organizeImports"),
            (e.SourceFixAll = "source.fixAll");
        })(we || (we = {})),
        (function (e) {
          function t(e, t) {
            var n = { diagnostics: e };
            return void 0 !== t && null !== t && (n.only = t), n;
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              Pe.typedArray(t.diagnostics, P.is) &&
              (void 0 === t.only || Pe.typedArray(t.only, Pe.string))
            );
          }
          (e.create = t), (e.is = n);
        })(Ae || (Ae = {})),
        (function (e) {
          function t(e, t, n) {
            var r = { title: e },
              i = !0;
            return (
              "string" === typeof t
                ? ((i = !1), (r.kind = t))
                : M.is(t)
                ? (r.command = t)
                : (r.edit = t),
              i && void 0 !== n && (r.kind = n),
              r
            );
          }
          function n(e) {
            var t = e;
            return (
              t &&
              Pe.string(t.title) &&
              (void 0 === t.diagnostics ||
                Pe.typedArray(t.diagnostics, P.is)) &&
              (void 0 === t.kind || Pe.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || M.is(t.command)) &&
              (void 0 === t.isPreferred || Pe.boolean(t.isPreferred)) &&
              (void 0 === t.edit || W.is(t.edit))
            );
          }
          (e.create = t), (e.is = n);
        })(ke || (ke = {})),
        (function (e) {
          function t(e, t) {
            var n = { range: e };
            return Pe.defined(t) && (n.data = t), n;
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              x.is(t.range) &&
              (Pe.undefined(t.command) || M.is(t.command))
            );
          }
          (e.create = t), (e.is = n);
        })(Se || (Se = {})),
        (function (e) {
          function t(e, t) {
            return { tabSize: e, insertSpaces: t };
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              Pe.uinteger(t.tabSize) &&
              Pe.boolean(t.insertSpaces)
            );
          }
          (e.create = t), (e.is = n);
        })(Ie || (Ie = {})),
        (function (e) {
          function t(e, t, n) {
            return { range: e, target: t, data: n };
          }
          function n(e) {
            var t = e;
            return (
              Pe.defined(t) &&
              x.is(t.range) &&
              (Pe.undefined(t.target) || Pe.string(t.target))
            );
          }
          (e.create = t), (e.is = n);
        })(Ee || (Ee = {})),
        (function (e) {
          function t(e, t) {
            return { range: e, parent: t };
          }
          function n(t) {
            var n = t;
            return (
              void 0 !== n &&
              x.is(n.range) &&
              (void 0 === n.parent || e.is(n.parent))
            );
          }
          (e.create = t), (e.is = n);
        })(Te || (Te = {}));
      var _e;
      (function (e) {
        function t(e, t, n, r) {
          return new Me(e, t, n, r);
        }
        function n(e) {
          var t = e;
          return !!(
            Pe.defined(t) &&
            Pe.string(t.uri) &&
            (Pe.undefined(t.languageId) || Pe.string(t.languageId)) &&
            Pe.uinteger(t.lineCount) &&
            Pe.func(t.getText) &&
            Pe.func(t.positionAt) &&
            Pe.func(t.offsetAt)
          );
        }
        function r(e, t) {
          for (
            var n = e.getText(),
              r = i(t, function (e, t) {
                var n = e.range.start.line - t.range.start.line;
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n;
              }),
              o = n.length,
              a = r.length - 1;
            a >= 0;
            a--
          ) {
            var s = r[a],
              u = e.offsetAt(s.range.start),
              c = e.offsetAt(s.range.end);
            if (!(c <= o)) throw new Error("Overlapping edit");
            (n = n.substring(0, u) + s.newText + n.substring(c, n.length)),
              (o = u);
          }
          return n;
        }
        function i(e, t) {
          if (e.length <= 1) return e;
          var n = (e.length / 2) | 0,
            r = e.slice(0, n),
            o = e.slice(n);
          i(r, t), i(o, t);
          var a = 0,
            s = 0,
            u = 0;
          while (a < r.length && s < o.length) {
            var c = t(r[a], o[s]);
            e[u++] = c <= 0 ? r[a++] : o[s++];
          }
          while (a < r.length) e[u++] = r[a++];
          while (s < o.length) e[u++] = o[s++];
          return e;
        }
        (e.create = t), (e.is = n), (e.applyEdits = r);
      })(_e || (_e = {}));
      var Pe,
        Me = (function () {
          function e(e, t, n, r) {
            (this._uri = e),
              (this._languageId = t),
              (this._version = n),
              (this._content = r),
              (this._lineOffsets = void 0);
          }
          return (
            Object.defineProperty(e.prototype, "uri", {
              get: function () {
                return this._uri;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "languageId", {
              get: function () {
                return this._languageId;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "version", {
              get: function () {
                return this._version;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.getText = function (e) {
              if (e) {
                var t = this.offsetAt(e.start),
                  n = this.offsetAt(e.end);
                return this._content.substring(t, n);
              }
              return this._content;
            }),
            (e.prototype.update = function (e, t) {
              (this._content = e.text),
                (this._version = t),
                (this._lineOffsets = void 0);
            }),
            (e.prototype.getLineOffsets = function () {
              if (void 0 === this._lineOffsets) {
                for (
                  var e = [], t = this._content, n = !0, r = 0;
                  r < t.length;
                  r++
                ) {
                  n && (e.push(r), (n = !1));
                  var i = t.charAt(r);
                  (n = "\r" === i || "\n" === i),
                    "\r" === i &&
                      r + 1 < t.length &&
                      "\n" === t.charAt(r + 1) &&
                      r++;
                }
                n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
              }
              return this._lineOffsets;
            }),
            (e.prototype.positionAt = function (e) {
              e = Math.max(Math.min(e, this._content.length), 0);
              var t = this.getLineOffsets(),
                n = 0,
                r = t.length;
              if (0 === r) return b.create(0, e);
              while (n < r) {
                var i = Math.floor((n + r) / 2);
                t[i] > e ? (r = i) : (n = i + 1);
              }
              var o = n - 1;
              return b.create(o, e - t[o]);
            }),
            (e.prototype.offsetAt = function (e) {
              var t = this.getLineOffsets();
              if (e.line >= t.length) return this._content.length;
              if (e.line < 0) return 0;
              var n = t[e.line],
                r =
                  e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
              return Math.max(Math.min(n + e.character, r), n);
            }),
            Object.defineProperty(e.prototype, "lineCount", {
              get: function () {
                return this.getLineOffsets().length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      (function (e) {
        var t = Object.prototype.toString;
        function n(e) {
          return "undefined" !== typeof e;
        }
        function r(e) {
          return "undefined" === typeof e;
        }
        function i(e) {
          return !0 === e || !1 === e;
        }
        function o(e) {
          return "[object String]" === t.call(e);
        }
        function a(e) {
          return "[object Number]" === t.call(e);
        }
        function s(e, n, r) {
          return "[object Number]" === t.call(e) && n <= e && e <= r;
        }
        function u(e) {
          return (
            "[object Number]" === t.call(e) &&
            -2147483648 <= e &&
            e <= 2147483647
          );
        }
        function c(e) {
          return "[object Number]" === t.call(e) && 0 <= e && e <= 2147483647;
        }
        function l(e) {
          return "[object Function]" === t.call(e);
        }
        function f(e) {
          return null !== e && "object" === typeof e;
        }
        function h(e, t) {
          return Array.isArray(e) && e.every(t);
        }
        (e.defined = n),
          (e.undefined = r),
          (e.boolean = i),
          (e.string = o),
          (e.number = a),
          (e.numberRange = s),
          (e.integer = u),
          (e.uinteger = c),
          (e.func = l),
          (e.objectLiteral = f),
          (e.typedArray = h);
      })(Pe || (Pe = {}));
      var Ve,
        Ne,
        Fe,
        Re = (function () {
          function e(e, t, n, r) {
            (this._uri = e),
              (this._languageId = t),
              (this._version = n),
              (this._content = r),
              (this._lineOffsets = void 0);
          }
          return (
            Object.defineProperty(e.prototype, "uri", {
              get: function () {
                return this._uri;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "languageId", {
              get: function () {
                return this._languageId;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "version", {
              get: function () {
                return this._version;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getText = function (e) {
              if (e) {
                var t = this.offsetAt(e.start),
                  n = this.offsetAt(e.end);
                return this._content.substring(t, n);
              }
              return this._content;
            }),
            (e.prototype.update = function (t, n) {
              for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                if (e.isIncremental(o)) {
                  var a = De(o.range),
                    s = this.offsetAt(a.start),
                    u = this.offsetAt(a.end);
                  this._content =
                    this._content.substring(0, s) +
                    o.text +
                    this._content.substring(u, this._content.length);
                  var c = Math.max(a.start.line, 0),
                    l = Math.max(a.end.line, 0),
                    f = this._lineOffsets,
                    h = Le(o.text, !1, s);
                  if (l - c === h.length)
                    for (var p = 0, d = h.length; p < d; p++)
                      f[p + c + 1] = h[p];
                  else
                    h.length < 1e4
                      ? f.splice.apply(f, [c + 1, l - c].concat(h))
                      : (this._lineOffsets = f =
                          f.slice(0, c + 1).concat(h, f.slice(l + 1)));
                  var m = o.text.length - (u - s);
                  if (0 !== m)
                    for (p = c + 1 + h.length, d = f.length; p < d; p++)
                      f[p] = f[p] + m;
                } else {
                  if (!e.isFull(o))
                    throw new Error("Unknown change event received");
                  (this._content = o.text), (this._lineOffsets = void 0);
                }
              }
              this._version = n;
            }),
            (e.prototype.getLineOffsets = function () {
              return (
                void 0 === this._lineOffsets &&
                  (this._lineOffsets = Le(this._content, !0)),
                this._lineOffsets
              );
            }),
            (e.prototype.positionAt = function (e) {
              e = Math.max(Math.min(e, this._content.length), 0);
              var t = this.getLineOffsets(),
                n = 0,
                r = t.length;
              if (0 === r) return { line: 0, character: e };
              while (n < r) {
                var i = Math.floor((n + r) / 2);
                t[i] > e ? (r = i) : (n = i + 1);
              }
              var o = n - 1;
              return { line: o, character: e - t[o] };
            }),
            (e.prototype.offsetAt = function (e) {
              var t = this.getLineOffsets();
              if (e.line >= t.length) return this._content.length;
              if (e.line < 0) return 0;
              var n = t[e.line],
                r =
                  e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
              return Math.max(Math.min(n + e.character, r), n);
            }),
            Object.defineProperty(e.prototype, "lineCount", {
              get: function () {
                return this.getLineOffsets().length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.isIncremental = function (e) {
              var t = e;
              return (
                void 0 !== t &&
                null !== t &&
                "string" === typeof t.text &&
                void 0 !== t.range &&
                (void 0 === t.rangeLength || "number" === typeof t.rangeLength)
              );
            }),
            (e.isFull = function (e) {
              var t = e;
              return (
                void 0 !== t &&
                null !== t &&
                "string" === typeof t.text &&
                void 0 === t.range &&
                void 0 === t.rangeLength
              );
            }),
            e
          );
        })();
      function $e(e, t) {
        if (e.length <= 1) return e;
        var n = (e.length / 2) | 0,
          r = e.slice(0, n),
          i = e.slice(n);
        $e(r, t), $e(i, t);
        var o = 0,
          a = 0,
          s = 0;
        while (o < r.length && a < i.length) {
          var u = t(r[o], i[a]);
          e[s++] = u <= 0 ? r[o++] : i[a++];
        }
        while (o < r.length) e[s++] = r[o++];
        while (a < i.length) e[s++] = i[a++];
        return e;
      }
      function Le(e, t, n) {
        void 0 === n && (n = 0);
        for (var r = t ? [n] : [], i = 0; i < e.length; i++) {
          var o = e.charCodeAt(i);
          (13 !== o && 10 !== o) ||
            (13 === o && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++,
            r.push(n + i + 1));
        }
        return r;
      }
      function De(e) {
        var t = e.start,
          n = e.end;
        return t.line > n.line ||
          (t.line === n.line && t.character > n.character)
          ? { start: n, end: t }
          : e;
      }
      function Ue(e) {
        var t = De(e.range);
        return t !== e.range ? { newText: e.newText, range: t } : e;
      }
      function We(e, t) {
        var n;
        return (
          (n =
            0 === t.length
              ? e
              : e.replace(/\{(\d+)\}/g, function (e, n) {
                  var r = n[0];
                  return "undefined" !== typeof t[r] ? t[r] : e;
                })),
          n
        );
      }
      function qe(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        return We(t, n);
      }
      function Be(e) {
        return qe;
      }
      (function (e) {
        function t(e, t, n, r) {
          return new Re(e, t, n, r);
        }
        function n(e, t, n) {
          if (e instanceof Re) return e.update(t, n), e;
          throw new Error(
            "TextDocument.update: document must be created by TextDocument.create"
          );
        }
        function r(e, t) {
          for (
            var n = e.getText(),
              r = $e(t.map(Ue), function (e, t) {
                var n = e.range.start.line - t.range.start.line;
                return 0 === n
                  ? e.range.start.character - t.range.start.character
                  : n;
              }),
              i = 0,
              o = [],
              a = 0,
              s = r;
            a < s.length;
            a++
          ) {
            var u = s[a],
              c = e.offsetAt(u.range.start);
            if (c < i) throw new Error("Overlapping edit");
            c > i && o.push(n.substring(i, c)),
              u.newText.length && o.push(u.newText),
              (i = e.offsetAt(u.range.end));
          }
          return o.push(n.substr(i)), o.join("");
        }
        (e.create = t), (e.update = n), (e.applyEdits = r);
      })(Ve || (Ve = {})),
        (function (e) {
          (e[(e["Undefined"] = 0)] = "Undefined"),
            (e[(e["EnumValueMismatch"] = 1)] = "EnumValueMismatch"),
            (e[(e["Deprecated"] = 2)] = "Deprecated"),
            (e[(e["UnexpectedEndOfComment"] = 257)] = "UnexpectedEndOfComment"),
            (e[(e["UnexpectedEndOfString"] = 258)] = "UnexpectedEndOfString"),
            (e[(e["UnexpectedEndOfNumber"] = 259)] = "UnexpectedEndOfNumber"),
            (e[(e["InvalidUnicode"] = 260)] = "InvalidUnicode"),
            (e[(e["InvalidEscapeCharacter"] = 261)] = "InvalidEscapeCharacter"),
            (e[(e["InvalidCharacter"] = 262)] = "InvalidCharacter"),
            (e[(e["PropertyExpected"] = 513)] = "PropertyExpected"),
            (e[(e["CommaExpected"] = 514)] = "CommaExpected"),
            (e[(e["ColonExpected"] = 515)] = "ColonExpected"),
            (e[(e["ValueExpected"] = 516)] = "ValueExpected"),
            (e[(e["CommaOrCloseBacketExpected"] = 517)] =
              "CommaOrCloseBacketExpected"),
            (e[(e["CommaOrCloseBraceExpected"] = 518)] =
              "CommaOrCloseBraceExpected"),
            (e[(e["TrailingComma"] = 519)] = "TrailingComma"),
            (e[(e["DuplicateKey"] = 520)] = "DuplicateKey"),
            (e[(e["CommentNotPermitted"] = 521)] = "CommentNotPermitted"),
            (e[(e["SchemaResolveError"] = 768)] = "SchemaResolveError");
        })(Ne || (Ne = {})),
        (function (e) {
          e.LATEST = {
            textDocument: {
              completion: {
                completionItem: {
                  documentationFormat: [re.Markdown, re.PlainText],
                  commitCharactersSupport: !0,
                },
              },
            },
          };
        })(Fe || (Fe = {}));
      var Ke,
        Je = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        He = Be(),
        ze = {
          "color-hex": {
            errorMessage: He(
              "colorHexFormatWarning",
              "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."
            ),
            pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
          },
          "date-time": {
            errorMessage: He(
              "dateTimeFormatWarning",
              "String is not a RFC3339 date-time."
            ),
            pattern:
              /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
          },
          date: {
            errorMessage: He(
              "dateFormatWarning",
              "String is not a RFC3339 date."
            ),
            pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i,
          },
          time: {
            errorMessage: He(
              "timeFormatWarning",
              "String is not a RFC3339 time."
            ),
            pattern:
              /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
          },
          email: {
            errorMessage: He(
              "emailFormatWarning",
              "String is not an e-mail address."
            ),
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          },
        },
        Ge = (function () {
          function e(e, t, n) {
            void 0 === n && (n = 0),
              (this.offset = t),
              (this.length = n),
              (this.parent = e);
          }
          return (
            Object.defineProperty(e.prototype, "children", {
              get: function () {
                return [];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.toString = function () {
              return (
                "type: " +
                this.type +
                " (" +
                this.offset +
                "/" +
                this.length +
                ")" +
                (this.parent ? " parent: {" + this.parent.toString() + "}" : "")
              );
            }),
            e
          );
        })();
      (function (e) {
        function t(t, n) {
          var r = e.call(this, t, n) || this;
          return (r.type = "null"), (r.value = null), r;
        }
        Je(t, e);
      })(Ge),
        (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, r) || this;
            return (i.type = "boolean"), (i.value = n), i;
          }
          Je(t, e);
        })(Ge),
        (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.type = "array"), (r.items = []), r;
          }
          Je(t, e),
            Object.defineProperty(t.prototype, "children", {
              get: function () {
                return this.items;
              },
              enumerable: !1,
              configurable: !0,
            });
        })(Ge),
        (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (
              (r.type = "number"), (r.isInteger = !0), (r.value = Number.NaN), r
            );
          }
          Je(t, e);
        })(Ge),
        (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, n, r) || this;
            return (i.type = "string"), (i.value = ""), i;
          }
          Je(t, e);
        })(Ge),
        (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, n) || this;
            return (
              (i.type = "property"), (i.colonOffset = -1), (i.keyNode = r), i
            );
          }
          Je(t, e),
            Object.defineProperty(t.prototype, "children", {
              get: function () {
                return this.valueNode
                  ? [this.keyNode, this.valueNode]
                  : [this.keyNode];
              },
              enumerable: !1,
              configurable: !0,
            });
        })(Ge),
        (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.type = "object"), (r.properties = []), r;
          }
          Je(t, e),
            Object.defineProperty(t.prototype, "children", {
              get: function () {
                return this.properties;
              },
              enumerable: !1,
              configurable: !0,
            });
        })(Ge);
      function Xe(e) {
        return Z(e) ? (e ? {} : { not: {} }) : e;
      }
      (function (e) {
        (e[(e["Key"] = 0)] = "Key"), (e[(e["Enum"] = 1)] = "Enum");
      })(Ke || (Ke = {}));
      var Ze = (function () {
          function e(e, t) {
            void 0 === e && (e = -1),
              (this.focusOffset = e),
              (this.exclude = t),
              (this.schemas = []);
          }
          return (
            (e.prototype.add = function (e) {
              this.schemas.push(e);
            }),
            (e.prototype.merge = function (e) {
              Array.prototype.push.apply(this.schemas, e.schemas);
            }),
            (e.prototype.include = function (e) {
              return (
                (-1 === this.focusOffset || nt(e, this.focusOffset)) &&
                e !== this.exclude
              );
            }),
            (e.prototype.newSub = function () {
              return new e(-1, this.exclude);
            }),
            e
          );
        })(),
        Qe = (function () {
          function e() {}
          return (
            Object.defineProperty(e.prototype, "schemas", {
              get: function () {
                return [];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.add = function (e) {}),
            (e.prototype.merge = function (e) {}),
            (e.prototype.include = function (e) {
              return !0;
            }),
            (e.prototype.newSub = function () {
              return this;
            }),
            (e.instance = new e()),
            e
          );
        })(),
        Ye = (function () {
          function e() {
            (this.problems = []),
              (this.propertiesMatches = 0),
              (this.propertiesValueMatches = 0),
              (this.primaryValueMatches = 0),
              (this.enumValueMatch = !1),
              (this.enumValues = void 0);
          }
          return (
            (e.prototype.hasProblems = function () {
              return !!this.problems.length;
            }),
            (e.prototype.mergeAll = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var r = n[t];
                this.merge(r);
              }
            }),
            (e.prototype.merge = function (e) {
              this.problems = this.problems.concat(e.problems);
            }),
            (e.prototype.mergeEnumValues = function (e) {
              if (
                !this.enumValueMatch &&
                !e.enumValueMatch &&
                this.enumValues &&
                e.enumValues
              ) {
                this.enumValues = this.enumValues.concat(e.enumValues);
                for (var t = 0, n = this.problems; t < n.length; t++) {
                  var r = n[t];
                  r.code === Ne.EnumValueMismatch &&
                    (r.message = He(
                      "enumWarning",
                      "Value is not accepted. Valid values: {0}.",
                      this.enumValues
                        .map(function (e) {
                          return JSON.stringify(e);
                        })
                        .join(", ")
                    ));
                }
              }
            }),
            (e.prototype.mergePropertyMatch = function (e) {
              this.merge(e),
                this.propertiesMatches++,
                (e.enumValueMatch ||
                  (!e.hasProblems() && e.propertiesMatches)) &&
                  this.propertiesValueMatches++,
                e.enumValueMatch &&
                  e.enumValues &&
                  1 === e.enumValues.length &&
                  this.primaryValueMatches++;
            }),
            (e.prototype.compare = function (e) {
              var t = this.hasProblems();
              return t !== e.hasProblems()
                ? t
                  ? -1
                  : 1
                : this.enumValueMatch !== e.enumValueMatch
                ? e.enumValueMatch
                  ? -1
                  : 1
                : this.primaryValueMatches !== e.primaryValueMatches
                ? this.primaryValueMatches - e.primaryValueMatches
                : this.propertiesValueMatches !== e.propertiesValueMatches
                ? this.propertiesValueMatches - e.propertiesValueMatches
                : this.propertiesMatches - e.propertiesMatches;
            }),
            e
          );
        })();
      function et(e) {
        return H(e);
      }
      function tt(e) {
        return J(e);
      }
      function nt(e, t, n) {
        return (
          void 0 === n && (n = !1),
          (t >= e.offset && t < e.offset + e.length) ||
            (n && t === e.offset + e.length)
        );
      }
      (function () {
        function e(e, t, n) {
          void 0 === t && (t = []),
            void 0 === n && (n = []),
            (this.root = e),
            (this.syntaxErrors = t),
            (this.comments = n);
        }
        (e.prototype.getNodeFromOffset = function (e, t) {
          if ((void 0 === t && (t = !1), this.root)) return K(this.root, e, t);
        }),
          (e.prototype.visit = function (e) {
            if (this.root) {
              var t = function (n) {
                var r = e(n),
                  i = n.children;
                if (Array.isArray(i))
                  for (var o = 0; o < i.length && r; o++) r = t(i[o]);
                return r;
              };
              t(this.root);
            }
          }),
          (e.prototype.validate = function (e, t, n) {
            if ((void 0 === n && (n = O.Warning), this.root && t)) {
              var r = new Ye();
              return (
                rt(this.root, t, r, Qe.instance),
                r.problems.map(function (t) {
                  var r,
                    i = x.create(
                      e.positionAt(t.location.offset),
                      e.positionAt(t.location.offset + t.location.length)
                    );
                  return P.create(
                    i,
                    t.message,
                    null !== (r = t.severity) && void 0 !== r ? r : n,
                    t.code
                  );
                })
              );
            }
          }),
          (e.prototype.getMatchingSchemas = function (e, t, n) {
            void 0 === t && (t = -1);
            var r = new Ze(t, n);
            return this.root && e && rt(this.root, e, new Ye(), r), r.schemas;
          });
      })();
      function rt(e, t, n, r) {
        if (e && r.include(e)) {
          var i = e;
          switch (i.type) {
            case "object":
              c(i, t, n, r);
              break;
            case "array":
              u(i, t, n, r);
              break;
            case "string":
              s(i, t, n, r);
              break;
            case "number":
              a(i, t, n, r);
              break;
            case "property":
              return rt(i.valueNode, t, n, r);
          }
          o(), r.add({ node: i, schema: t });
        }
        function o() {
          function e(e) {
            return (
              i.type === e ||
              ("integer" === e && "number" === i.type && i.isInteger)
            );
          }
          if (
            (Array.isArray(t.type)
              ? t.type.some(e) ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  message:
                    t.errorMessage ||
                    He(
                      "typeArrayMismatchWarning",
                      "Incorrect type. Expected one of {0}.",
                      t.type.join(", ")
                    ),
                })
              : t.type &&
                (e(t.type) ||
                  n.problems.push({
                    location: { offset: i.offset, length: i.length },
                    message:
                      t.errorMessage ||
                      He(
                        "typeMismatchWarning",
                        'Incorrect type. Expected "{0}".',
                        t.type
                      ),
                  })),
            Array.isArray(t.allOf))
          )
            for (var o = 0, a = t.allOf; o < a.length; o++) {
              var s = a[o];
              rt(i, Xe(s), n, r);
            }
          var u = Xe(t.not);
          if (u) {
            var c = new Ye(),
              l = r.newSub();
            rt(i, u, c, l),
              c.hasProblems() ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  message: He(
                    "notSchemaWarning",
                    "Matches a schema that is not allowed."
                  ),
                });
            for (var f = 0, h = l.schemas; f < h.length; f++) {
              var p = h[f];
              (p.inverted = !p.inverted), r.add(p);
            }
          }
          var d = function (e, t) {
            for (var o = [], a = void 0, s = 0, u = e; s < u.length; s++) {
              var c = u[s],
                l = Xe(c),
                f = new Ye(),
                h = r.newSub();
              if ((rt(i, l, f, h), f.hasProblems() || o.push(l), a))
                if (t || f.hasProblems() || a.validationResult.hasProblems()) {
                  var p = f.compare(a.validationResult);
                  p > 0
                    ? (a = {
                        schema: l,
                        validationResult: f,
                        matchingSchemas: h,
                      })
                    : 0 === p &&
                      (a.matchingSchemas.merge(h),
                      a.validationResult.mergeEnumValues(f));
                } else
                  a.matchingSchemas.merge(h),
                    (a.validationResult.propertiesMatches +=
                      f.propertiesMatches),
                    (a.validationResult.propertiesValueMatches +=
                      f.propertiesValueMatches);
              else a = { schema: l, validationResult: f, matchingSchemas: h };
            }
            return (
              o.length > 1 &&
                t &&
                n.problems.push({
                  location: { offset: i.offset, length: 1 },
                  message: He(
                    "oneOfWarning",
                    "Matches multiple schemas when only one must validate."
                  ),
                }),
              a &&
                (n.merge(a.validationResult),
                (n.propertiesMatches += a.validationResult.propertiesMatches),
                (n.propertiesValueMatches +=
                  a.validationResult.propertiesValueMatches),
                r.merge(a.matchingSchemas)),
              o.length
            );
          };
          Array.isArray(t.anyOf) && d(t.anyOf, !1),
            Array.isArray(t.oneOf) && d(t.oneOf, !0);
          var m = function (e) {
              var t = new Ye(),
                o = r.newSub();
              rt(i, Xe(e), t, o),
                n.merge(t),
                (n.propertiesMatches += t.propertiesMatches),
                (n.propertiesValueMatches += t.propertiesValueMatches),
                r.merge(o);
            },
            g = function (e, t, n) {
              var o = Xe(e),
                a = new Ye(),
                s = r.newSub();
              rt(i, o, a, s),
                r.merge(s),
                a.hasProblems() ? n && m(n) : t && m(t);
            },
            v = Xe(t.if);
          if ((v && g(v, Xe(t.then), Xe(t.else)), Array.isArray(t.enum))) {
            for (var y = et(i), b = !1, x = 0, C = t.enum; x < C.length; x++) {
              var w = C[x];
              if (z(y, w)) {
                b = !0;
                break;
              }
            }
            (n.enumValues = t.enum),
              (n.enumValueMatch = b),
              b ||
                n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  code: Ne.EnumValueMismatch,
                  message:
                    t.errorMessage ||
                    He(
                      "enumWarning",
                      "Value is not accepted. Valid values: {0}.",
                      t.enum
                        .map(function (e) {
                          return JSON.stringify(e);
                        })
                        .join(", ")
                    ),
                });
          }
          if (X(t.const)) {
            y = et(i);
            z(y, t.const)
              ? (n.enumValueMatch = !0)
              : (n.problems.push({
                  location: { offset: i.offset, length: i.length },
                  code: Ne.EnumValueMismatch,
                  message:
                    t.errorMessage ||
                    He(
                      "constWarning",
                      "Value must be {0}.",
                      JSON.stringify(t.const)
                    ),
                }),
                (n.enumValueMatch = !1)),
              (n.enumValues = [t.const]);
          }
          t.deprecationMessage &&
            i.parent &&
            n.problems.push({
              location: { offset: i.parent.offset, length: i.parent.length },
              severity: O.Warning,
              message: t.deprecationMessage,
              code: Ne.Deprecated,
            });
        }
        function a(e, t, n, r) {
          var i = e.value;
          function o(e) {
            var t,
              n = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(e.toString());
            return (
              n && {
                value: Number(n[1] + (n[2] || "")),
                multiplier:
                  ((null === (t = n[2]) || void 0 === t ? void 0 : t.length) ||
                    0) - (parseInt(n[3]) || 0),
              }
            );
          }
          if (G(t.multipleOf)) {
            var a = -1;
            if (Number.isInteger(t.multipleOf)) a = i % t.multipleOf;
            else {
              var s = o(t.multipleOf),
                u = o(i);
              if (s && u) {
                var c = Math.pow(10, Math.abs(u.multiplier - s.multiplier));
                u.multiplier < s.multiplier ? (u.value *= c) : (s.value *= c),
                  (a = u.value % s.value);
              }
            }
            0 !== a &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He(
                  "multipleOfWarning",
                  "Value is not divisible by {0}.",
                  t.multipleOf
                ),
              });
          }
          function l(e, t) {
            return G(t) ? t : Z(t) && t ? e : void 0;
          }
          function f(e, t) {
            if (!Z(t) || !t) return e;
          }
          var h = l(t.minimum, t.exclusiveMinimum);
          G(h) &&
            i <= h &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: He(
                "exclusiveMinimumWarning",
                "Value is below the exclusive minimum of {0}.",
                h
              ),
            });
          var p = l(t.maximum, t.exclusiveMaximum);
          G(p) &&
            i >= p &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: He(
                "exclusiveMaximumWarning",
                "Value is above the exclusive maximum of {0}.",
                p
              ),
            });
          var d = f(t.minimum, t.exclusiveMinimum);
          G(d) &&
            i < d &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: He(
                "minimumWarning",
                "Value is below the minimum of {0}.",
                d
              ),
            });
          var m = f(t.maximum, t.exclusiveMaximum);
          G(m) &&
            i > m &&
            n.problems.push({
              location: { offset: e.offset, length: e.length },
              message: He(
                "maximumWarning",
                "Value is above the maximum of {0}.",
                m
              ),
            });
        }
        function s(e, t, n, r) {
          if (
            (G(t.minLength) &&
              e.value.length < t.minLength &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He(
                  "minLengthWarning",
                  "String is shorter than the minimum length of {0}.",
                  t.minLength
                ),
              }),
            G(t.maxLength) &&
              e.value.length > t.maxLength &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He(
                  "maxLengthWarning",
                  "String is longer than the maximum length of {0}.",
                  t.maxLength
                ),
              }),
            Q(t.pattern))
          ) {
            var i = new RegExp(t.pattern);
            i.test(e.value) ||
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message:
                  t.patternErrorMessage ||
                  t.errorMessage ||
                  He(
                    "patternWarning",
                    'String does not match the pattern of "{0}".',
                    t.pattern
                  ),
              });
          }
          if (t.format)
            switch (t.format) {
              case "uri":
              case "uri-reference":
                var o = void 0;
                if (e.value) {
                  var a =
                    /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(
                      e.value
                    );
                  a
                    ? a[2] ||
                      "uri" !== t.format ||
                      (o = He(
                        "uriSchemeMissing",
                        "URI with a scheme is expected."
                      ))
                    : (o = He("uriMissing", "URI is expected."));
                } else o = He("uriEmpty", "URI expected.");
                o &&
                  n.problems.push({
                    location: { offset: e.offset, length: e.length },
                    message:
                      t.patternErrorMessage ||
                      t.errorMessage ||
                      He("uriFormatWarning", "String is not a URI: {0}", o),
                  });
                break;
              case "color-hex":
              case "date-time":
              case "date":
              case "time":
              case "email":
                var s = ze[t.format];
                (e.value && s.pattern.exec(e.value)) ||
                  n.problems.push({
                    location: { offset: e.offset, length: e.length },
                    message:
                      t.patternErrorMessage || t.errorMessage || s.errorMessage,
                  });
              default:
            }
        }
        function u(e, t, n, r) {
          if (Array.isArray(t.items)) {
            for (var i = t.items, o = 0; o < i.length; o++) {
              var a = i[o],
                s = Xe(a),
                u = new Ye(),
                c = e.items[o];
              c
                ? (rt(c, s, u, r), n.mergePropertyMatch(u))
                : e.items.length >= i.length && n.propertiesValueMatches++;
            }
            if (e.items.length > i.length)
              if ("object" === typeof t.additionalItems)
                for (var l = i.length; l < e.items.length; l++) {
                  u = new Ye();
                  rt(e.items[l], t.additionalItems, u, r),
                    n.mergePropertyMatch(u);
                }
              else
                !1 === t.additionalItems &&
                  n.problems.push({
                    location: { offset: e.offset, length: e.length },
                    message: He(
                      "additionalItemsWarning",
                      "Array has too many items according to schema. Expected {0} or fewer.",
                      i.length
                    ),
                  });
          } else {
            var f = Xe(t.items);
            if (f)
              for (var h = 0, p = e.items; h < p.length; h++) {
                (c = p[h]), (u = new Ye());
                rt(c, f, u, r), n.mergePropertyMatch(u);
              }
          }
          var d = Xe(t.contains);
          if (d) {
            var m = e.items.some(function (e) {
              var t = new Ye();
              return rt(e, d, t, Qe.instance), !t.hasProblems();
            });
            m ||
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message:
                  t.errorMessage ||
                  He(
                    "requiredItemMissingWarning",
                    "Array does not contain required item."
                  ),
              });
          }
          if (
            (G(t.minItems) &&
              e.items.length < t.minItems &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He(
                  "minItemsWarning",
                  "Array has too few items. Expected {0} or more.",
                  t.minItems
                ),
              }),
            G(t.maxItems) &&
              e.items.length > t.maxItems &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He(
                  "maxItemsWarning",
                  "Array has too many items. Expected {0} or fewer.",
                  t.maxItems
                ),
              }),
            !0 === t.uniqueItems)
          ) {
            var g = et(e),
              v = g.some(function (e, t) {
                return t !== g.lastIndexOf(e);
              });
            v &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He("uniqueItemsWarning", "Array has duplicate items."),
              });
          }
        }
        function c(e, t, n, r) {
          for (
            var i = Object.create(null), o = [], a = 0, s = e.properties;
            a < s.length;
            a++
          ) {
            var u = s[a],
              c = u.keyNode.value;
            (i[c] = u.valueNode), o.push(c);
          }
          if (Array.isArray(t.required))
            for (var l = 0, f = t.required; l < f.length; l++) {
              var h = f[l];
              if (!i[h]) {
                var p =
                    e.parent &&
                    "property" === e.parent.type &&
                    e.parent.keyNode,
                  d = p
                    ? { offset: p.offset, length: p.length }
                    : { offset: e.offset, length: 1 };
                n.problems.push({
                  location: d,
                  message: He(
                    "MissingRequiredPropWarning",
                    'Missing property "{0}".',
                    h
                  ),
                });
              }
            }
          var m = function (e) {
            var t = o.indexOf(e);
            while (t >= 0) o.splice(t, 1), (t = o.indexOf(e));
          };
          if (t.properties)
            for (var g = 0, v = Object.keys(t.properties); g < v.length; g++) {
              h = v[g];
              m(h);
              var y = t.properties[h],
                b = i[h];
              if (b)
                if (Z(y))
                  if (y) n.propertiesMatches++, n.propertiesValueMatches++;
                  else {
                    u = b.parent;
                    n.problems.push({
                      location: {
                        offset: u.keyNode.offset,
                        length: u.keyNode.length,
                      },
                      message:
                        t.errorMessage ||
                        He(
                          "DisallowedExtraPropWarning",
                          "Property {0} is not allowed.",
                          h
                        ),
                    });
                  }
                else {
                  var x = new Ye();
                  rt(b, y, x, r), n.mergePropertyMatch(x);
                }
            }
          if (t.patternProperties)
            for (
              var C = 0, w = Object.keys(t.patternProperties);
              C < w.length;
              C++
            )
              for (
                var A = w[C], k = new RegExp(A), S = 0, I = o.slice(0);
                S < I.length;
                S++
              ) {
                h = I[S];
                if (k.test(h)) {
                  m(h);
                  b = i[h];
                  if (b) {
                    y = t.patternProperties[A];
                    if (Z(y))
                      if (y) n.propertiesMatches++, n.propertiesValueMatches++;
                      else {
                        u = b.parent;
                        n.problems.push({
                          location: {
                            offset: u.keyNode.offset,
                            length: u.keyNode.length,
                          },
                          message:
                            t.errorMessage ||
                            He(
                              "DisallowedExtraPropWarning",
                              "Property {0} is not allowed.",
                              h
                            ),
                        });
                      }
                    else {
                      x = new Ye();
                      rt(b, y, x, r), n.mergePropertyMatch(x);
                    }
                  }
                }
              }
          if ("object" === typeof t.additionalProperties)
            for (var E = 0, T = o; E < T.length; E++) {
              (h = T[E]), (b = i[h]);
              if (b) {
                x = new Ye();
                rt(b, t.additionalProperties, x, r), n.mergePropertyMatch(x);
              }
            }
          else if (!1 === t.additionalProperties && o.length > 0)
            for (var O = 0, j = o; O < j.length; O++) {
              (h = j[O]), (b = i[h]);
              if (b) {
                u = b.parent;
                n.problems.push({
                  location: {
                    offset: u.keyNode.offset,
                    length: u.keyNode.length,
                  },
                  message:
                    t.errorMessage ||
                    He(
                      "DisallowedExtraPropWarning",
                      "Property {0} is not allowed.",
                      h
                    ),
                });
              }
            }
          if (
            (G(t.maxProperties) &&
              e.properties.length > t.maxProperties &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He(
                  "MaxPropWarning",
                  "Object has more properties than limit of {0}.",
                  t.maxProperties
                ),
              }),
            G(t.minProperties) &&
              e.properties.length < t.minProperties &&
              n.problems.push({
                location: { offset: e.offset, length: e.length },
                message: He(
                  "MinPropWarning",
                  "Object has fewer properties than the required number of {0}",
                  t.minProperties
                ),
              }),
            t.dependencies)
          )
            for (
              var _ = 0, P = Object.keys(t.dependencies);
              _ < P.length;
              _++
            ) {
              c = P[_];
              var M = i[c];
              if (M) {
                var V = t.dependencies[c];
                if (Array.isArray(V))
                  for (var N = 0, F = V; N < F.length; N++) {
                    var R = F[N];
                    i[R]
                      ? n.propertiesValueMatches++
                      : n.problems.push({
                          location: { offset: e.offset, length: e.length },
                          message: He(
                            "RequiredDependentPropWarning",
                            "Object is missing property {0} required by property {1}.",
                            R,
                            c
                          ),
                        });
                  }
                else {
                  y = Xe(V);
                  if (y) {
                    x = new Ye();
                    rt(e, y, x, r), n.mergePropertyMatch(x);
                  }
                }
              }
            }
          var $ = Xe(t.propertyNames);
          if ($)
            for (var L = 0, D = e.properties; L < D.length; L++) {
              var U = D[L];
              c = U.keyNode;
              c && rt(c, $, n, Qe.instance);
            }
        }
      }
      function it(e, t, n) {
        if (null !== e && "object" === typeof e) {
          var r = t + "\t";
          if (Array.isArray(e)) {
            if (0 === e.length) return "[]";
            for (var i = "[\n", o = 0; o < e.length; o++)
              (i += r + it(e[o], r, n)),
                o < e.length - 1 && (i += ","),
                (i += "\n");
            return (i += t + "]"), i;
          }
          var a = Object.keys(e);
          if (0 === a.length) return "{}";
          for (i = "{\n", o = 0; o < a.length; o++) {
            var s = a[o];
            (i += r + JSON.stringify(s) + ": " + it(e[s], r, n)),
              o < a.length - 1 && (i += ","),
              (i += "\n");
          }
          return (i += t + "}"), i;
        }
        return n(e);
      }
      function ot(e, t) {
        if (e.length < t.length) return !1;
        for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function at(e, t) {
        var n = e.length - t.length;
        return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t;
      }
      function st(e) {
        return e
          .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
          .replace(/[\*]/g, ".*");
      }
      var ut,
        ct = Be(),
        lt = [",", "}", "]"],
        ft = [":"];
      (function () {
        function e(e, t, n, r) {
          void 0 === t && (t = []),
            void 0 === n && (n = Promise),
            void 0 === r && (r = {}),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promiseConstructor = n),
            (this.clientCapabilities = r);
        }
        (e.prototype.doResolve = function (e) {
          for (var t = this.contributions.length - 1; t >= 0; t--) {
            var n = this.contributions[t].resolveCompletion;
            if (n) {
              var r = n(e);
              if (r) return r;
            }
          }
          return this.promiseConstructor.resolve(e);
        }),
          (e.prototype.doComplete = function (e, t, n) {
            var r = this,
              i = { items: [], isIncomplete: !1 },
              o = e.getText(),
              a = e.offsetAt(t),
              s = n.getNodeFromOffset(a, !0);
            if (this.isInComment(e, s ? s.offset : 0, a))
              return Promise.resolve(i);
            if (s && a === s.offset + s.length && a > 0) {
              var u = o[a - 1];
              (("object" === s.type && "}" === u) ||
                ("array" === s.type && "]" === u)) &&
                (s = s.parent);
            }
            var c,
              l = this.getCurrentWord(e, a);
            if (
              !s ||
              ("string" !== s.type &&
                "number" !== s.type &&
                "boolean" !== s.type &&
                "null" !== s.type)
            ) {
              var f = a - l.length;
              f > 0 && '"' === o[f - 1] && f--,
                (c = x.create(e.positionAt(f), t));
            } else
              c = x.create(
                e.positionAt(s.offset),
                e.positionAt(s.offset + s.length)
              );
            var h = !1,
              p = {},
              d = {
                add: function (e) {
                  var t = e.label,
                    n = p[t];
                  if (n)
                    n.documentation || (n.documentation = e.documentation),
                      n.detail || (n.detail = e.detail);
                  else {
                    if (((t = t.replace(/[\n]/g, "↵")), t.length > 60)) {
                      var r = t.substr(0, 57).trim() + "...";
                      p[r] || (t = r);
                    }
                    c &&
                      void 0 !== e.insertText &&
                      (e.textEdit = V.replace(c, e.insertText)),
                      h &&
                        (e.commitCharacters = e.kind === oe.Property ? ft : lt),
                      (e.label = t),
                      (p[t] = e),
                      i.items.push(e);
                  }
                },
                setAsIncomplete: function () {
                  i.isIncomplete = !0;
                },
                error: function (e) {
                  console.error(e);
                },
                log: function (e) {
                  console.log(e);
                },
                getNumberOfProposals: function () {
                  return i.items.length;
                },
              };
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function (t) {
                var u = [],
                  f = !0,
                  h = "",
                  m = void 0;
                if (s && "string" === s.type) {
                  var g = s.parent;
                  g &&
                    "property" === g.type &&
                    g.keyNode === s &&
                    ((f = !g.valueNode),
                    (m = g),
                    (h = o.substr(s.offset + 1, s.length - 2)),
                    g && (s = g.parent));
                }
                if (s && "object" === s.type) {
                  if (s.offset === a) return i;
                  var v = s.properties;
                  v.forEach(function (e) {
                    (m && m === e) || (p[e.keyNode.value] = le.create("__"));
                  });
                  var y = "";
                  f && (y = r.evaluateSeparatorAfter(e, e.offsetAt(c.end))),
                    t
                      ? r.getPropertyCompletions(t, n, s, f, y, d)
                      : r.getSchemaLessPropertyCompletions(n, s, h, d);
                  var b = tt(s);
                  r.contributions.forEach(function (t) {
                    var n = t.collectPropertyCompletions(
                      e.uri,
                      b,
                      l,
                      f,
                      "" === y,
                      d
                    );
                    n && u.push(n);
                  }),
                    !t &&
                      l.length > 0 &&
                      '"' !== o.charAt(a - l.length - 1) &&
                      (d.add({
                        kind: oe.Property,
                        label: r.getLabelForValue(l),
                        insertText: r.getInsertTextForProperty(
                          l,
                          void 0,
                          !1,
                          y
                        ),
                        insertTextFormat: ae.Snippet,
                        documentation: "",
                      }),
                      d.setAsIncomplete());
                }
                var x = {};
                return (
                  t
                    ? r.getValueCompletions(t, n, s, a, e, d, x)
                    : r.getSchemaLessValueCompletions(n, s, a, e, d),
                  r.contributions.length > 0 &&
                    r.getContributedValueCompletions(n, s, a, e, d, u),
                  r.promiseConstructor.all(u).then(function () {
                    if (0 === d.getNumberOfProposals()) {
                      var t = a;
                      !s ||
                        ("string" !== s.type &&
                          "number" !== s.type &&
                          "boolean" !== s.type &&
                          "null" !== s.type) ||
                        (t = s.offset + s.length);
                      var n = r.evaluateSeparatorAfter(e, t);
                      r.addFillerValueCompletions(x, n, d);
                    }
                    return i;
                  })
                );
              });
          }),
          (e.prototype.getPropertyCompletions = function (e, t, n, r, i, o) {
            var a = this,
              s = t.getMatchingSchemas(e.schema, n.offset);
            s.forEach(function (e) {
              if (e.node === n && !e.inverted) {
                var t = e.schema.properties;
                t &&
                  Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    if (
                      "object" === typeof n &&
                      !n.deprecationMessage &&
                      !n.doNotSuggest
                    ) {
                      var s = {
                        kind: oe.Property,
                        label: e,
                        insertText: a.getInsertTextForProperty(e, n, r, i),
                        insertTextFormat: ae.Snippet,
                        filterText: a.getFilterTextForValue(e),
                        documentation:
                          a.fromMarkup(n.markdownDescription) ||
                          n.description ||
                          "",
                      };
                      void 0 !== n.suggestSortText &&
                        (s.sortText = n.suggestSortText),
                        s.insertText &&
                          at(s.insertText, "$1" + i) &&
                          (s.command = {
                            title: "Suggest",
                            command: "editor.action.triggerSuggest",
                          }),
                        o.add(s);
                    }
                  });
                var s = e.schema.propertyNames;
                if (
                  "object" === typeof s &&
                  !s.deprecationMessage &&
                  !s.doNotSuggest
                ) {
                  var u = function (e, t) {
                    void 0 === t && (t = void 0);
                    var n = {
                      kind: oe.Property,
                      label: e,
                      insertText: a.getInsertTextForProperty(e, void 0, r, i),
                      insertTextFormat: ae.Snippet,
                      filterText: a.getFilterTextForValue(e),
                      documentation:
                        t ||
                        a.fromMarkup(s.markdownDescription) ||
                        s.description ||
                        "",
                    };
                    void 0 !== s.suggestSortText &&
                      (n.sortText = s.suggestSortText),
                      n.insertText &&
                        at(n.insertText, "$1" + i) &&
                        (n.command = {
                          title: "Suggest",
                          command: "editor.action.triggerSuggest",
                        }),
                      o.add(n);
                  };
                  if (s.enum)
                    for (var c = 0; c < s.enum.length; c++) {
                      var l = void 0;
                      s.markdownEnumDescriptions &&
                      c < s.markdownEnumDescriptions.length
                        ? (l = a.fromMarkup(s.markdownEnumDescriptions[c]))
                        : s.enumDescriptions &&
                          c < s.enumDescriptions.length &&
                          (l = s.enumDescriptions[c]),
                        u(s.enum[c], l);
                    }
                  s.const && u(s.const);
                }
              }
            });
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function (
            e,
            t,
            n,
            r
          ) {
            var i = this,
              o = function (e) {
                e.properties.forEach(function (e) {
                  var t = e.keyNode.value;
                  r.add({
                    kind: oe.Property,
                    label: t,
                    insertText: i.getInsertTextForValue(t, ""),
                    insertTextFormat: ae.Snippet,
                    filterText: i.getFilterTextForValue(t),
                    documentation: "",
                  });
                });
              };
            if (t.parent)
              if ("property" === t.parent.type) {
                var a = t.parent.keyNode.value;
                e.visit(function (e) {
                  return (
                    "property" === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === a &&
                      e.valueNode &&
                      "object" === e.valueNode.type &&
                      o(e.valueNode),
                    !0
                  );
                });
              } else
                "array" === t.parent.type &&
                  t.parent.items.forEach(function (e) {
                    "object" === e.type && e !== t && o(e);
                  });
            else
              "object" === t.type &&
                r.add({
                  kind: oe.Property,
                  label: "$schema",
                  insertText: this.getInsertTextForProperty(
                    "$schema",
                    void 0,
                    !0,
                    ""
                  ),
                  insertTextFormat: ae.Snippet,
                  documentation: "",
                  filterText: this.getFilterTextForValue("$schema"),
                });
          }),
          (e.prototype.getSchemaLessValueCompletions = function (
            e,
            t,
            n,
            r,
            i
          ) {
            var o = this,
              a = n;
            if (
              (!t ||
                ("string" !== t.type &&
                  "number" !== t.type &&
                  "boolean" !== t.type &&
                  "null" !== t.type) ||
                ((a = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                i.add({
                  kind: this.getSuggestionKind("object"),
                  label: "Empty object",
                  insertText: this.getInsertTextForValue({}, ""),
                  insertTextFormat: ae.Snippet,
                  documentation: "",
                }),
                void i.add({
                  kind: this.getSuggestionKind("array"),
                  label: "Empty array",
                  insertText: this.getInsertTextForValue([], ""),
                  insertTextFormat: ae.Snippet,
                  documentation: "",
                })
              );
            var s = this.evaluateSeparatorAfter(r, a),
              u = function (e) {
                e.parent &&
                  !nt(e.parent, n, !0) &&
                  i.add({
                    kind: o.getSuggestionKind(e.type),
                    label: o.getLabelTextForMatchingNode(e, r),
                    insertText: o.getInsertTextForMatchingNode(e, r, s),
                    insertTextFormat: ae.Snippet,
                    documentation: "",
                  }),
                  "boolean" === e.type &&
                    o.addBooleanValueCompletion(!e.value, s, i);
              };
            if ("property" === t.type && n > (t.colonOffset || 0)) {
              var c = t.valueNode;
              if (
                c &&
                (n > c.offset + c.length ||
                  "object" === c.type ||
                  "array" === c.type)
              )
                return;
              var l = t.keyNode.value;
              e.visit(function (e) {
                return (
                  "property" === e.type &&
                    e.keyNode.value === l &&
                    e.valueNode &&
                    u(e.valueNode),
                  !0
                );
              }),
                "$schema" === l &&
                  t.parent &&
                  !t.parent.parent &&
                  this.addDollarSchemaCompletions(s, i);
            }
            if ("array" === t.type)
              if (t.parent && "property" === t.parent.type) {
                var f = t.parent.keyNode.value;
                e.visit(function (e) {
                  return (
                    "property" === e.type &&
                      e.keyNode.value === f &&
                      e.valueNode &&
                      "array" === e.valueNode.type &&
                      e.valueNode.items.forEach(u),
                    !0
                  );
                });
              } else t.items.forEach(u);
          }),
          (e.prototype.getValueCompletions = function (e, t, n, r, i, o, a) {
            var s = r,
              u = void 0,
              c = void 0;
            if (
              (!n ||
                ("string" !== n.type &&
                  "number" !== n.type &&
                  "boolean" !== n.type &&
                  "null" !== n.type) ||
                ((s = n.offset + n.length), (c = n), (n = n.parent)),
              n)
            ) {
              if ("property" === n.type && r > (n.colonOffset || 0)) {
                var l = n.valueNode;
                if (l && r > l.offset + l.length) return;
                (u = n.keyNode.value), (n = n.parent);
              }
              if (n && (void 0 !== u || "array" === n.type)) {
                for (
                  var f = this.evaluateSeparatorAfter(i, s),
                    h = t.getMatchingSchemas(e.schema, n.offset, c),
                    p = 0,
                    d = h;
                  p < d.length;
                  p++
                ) {
                  var m = d[p];
                  if (m.node === n && !m.inverted && m.schema) {
                    if ("array" === n.type && m.schema.items)
                      if (Array.isArray(m.schema.items)) {
                        var g = this.findItemAtOffset(n, i, r);
                        g < m.schema.items.length &&
                          this.addSchemaValueCompletions(
                            m.schema.items[g],
                            f,
                            o,
                            a
                          );
                      } else
                        this.addSchemaValueCompletions(m.schema.items, f, o, a);
                    if (void 0 !== u) {
                      var v = !1;
                      if (m.schema.properties) {
                        var y = m.schema.properties[u];
                        y &&
                          ((v = !0),
                          this.addSchemaValueCompletions(y, f, o, a));
                      }
                      if (m.schema.patternProperties && !v)
                        for (
                          var b = 0,
                            x = Object.keys(m.schema.patternProperties);
                          b < x.length;
                          b++
                        ) {
                          var C = x[b],
                            w = new RegExp(C);
                          if (w.test(u)) {
                            v = !0;
                            y = m.schema.patternProperties[C];
                            this.addSchemaValueCompletions(y, f, o, a);
                          }
                        }
                      if (m.schema.additionalProperties && !v) {
                        y = m.schema.additionalProperties;
                        this.addSchemaValueCompletions(y, f, o, a);
                      }
                    }
                  }
                }
                "$schema" !== u ||
                  n.parent ||
                  this.addDollarSchemaCompletions(f, o),
                  a["boolean"] &&
                    (this.addBooleanValueCompletion(!0, f, o),
                    this.addBooleanValueCompletion(!1, f, o)),
                  a["null"] && this.addNullValueCompletion(f, o);
              }
            } else this.addSchemaValueCompletions(e.schema, "", o, a);
          }),
          (e.prototype.getContributedValueCompletions = function (
            e,
            t,
            n,
            r,
            i,
            o
          ) {
            if (t) {
              if (
                (("string" !== t.type &&
                  "number" !== t.type &&
                  "boolean" !== t.type &&
                  "null" !== t.type) ||
                  (t = t.parent),
                t && "property" === t.type && n > (t.colonOffset || 0))
              ) {
                var a = t.keyNode.value,
                  s = t.valueNode;
                if ((!s || n <= s.offset + s.length) && t.parent) {
                  var u = tt(t.parent);
                  this.contributions.forEach(function (e) {
                    var t = e.collectValueCompletions(r.uri, u, a, i);
                    t && o.push(t);
                  });
                }
              }
            } else
              this.contributions.forEach(function (e) {
                var t = e.collectDefaultCompletions(r.uri, i);
                t && o.push(t);
              });
          }),
          (e.prototype.addSchemaValueCompletions = function (e, t, n, r) {
            var i = this;
            "object" === typeof e &&
              (this.addEnumValueCompletions(e, t, n),
              this.addDefaultValueCompletions(e, t, n),
              this.collectTypes(e, r),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function (e) {
                  return i.addSchemaValueCompletions(e, t, n, r);
                }));
          }),
          (e.prototype.addDefaultValueCompletions = function (e, t, n, r) {
            var i = this;
            void 0 === r && (r = 0);
            var o = !1;
            if (X(e.default)) {
              for (var a = e.type, s = e.default, u = r; u > 0; u--)
                (s = [s]), (a = "array");
              n.add({
                kind: this.getSuggestionKind(a),
                label: this.getLabelForValue(s),
                insertText: this.getInsertTextForValue(s, t),
                insertTextFormat: ae.Snippet,
                detail: ct("json.suggest.default", "Default value"),
              }),
                (o = !0);
            }
            Array.isArray(e.examples) &&
              e.examples.forEach(function (a) {
                for (var s = e.type, u = a, c = r; c > 0; c--)
                  (u = [u]), (s = "array");
                n.add({
                  kind: i.getSuggestionKind(s),
                  label: i.getLabelForValue(u),
                  insertText: i.getInsertTextForValue(u, t),
                  insertTextFormat: ae.Snippet,
                }),
                  (o = !0);
              }),
              Array.isArray(e.defaultSnippets) &&
                e.defaultSnippets.forEach(function (a) {
                  var s,
                    u,
                    c = e.type,
                    l = a.body,
                    f = a.label;
                  if (X(l)) {
                    e.type;
                    for (var h = r; h > 0; h--) (l = [l]), "array";
                    (s = i.getInsertTextForSnippetValue(l, t)),
                      (u = i.getFilterTextForSnippetValue(l)),
                      (f = f || i.getLabelForSnippetValue(l));
                  } else {
                    if ("string" !== typeof a.bodyText) return;
                    var p = "",
                      d = "",
                      m = "";
                    for (h = r; h > 0; h--)
                      (p = p + m + "[\n"),
                        (d = d + "\n" + m + "]"),
                        (m += "\t"),
                        (c = "array");
                    (s = p + m + a.bodyText.split("\n").join("\n" + m) + d + t),
                      (f = f || s),
                      (u = s.replace(/[\n]/g, ""));
                  }
                  n.add({
                    kind: i.getSuggestionKind(c),
                    label: f,
                    documentation:
                      i.fromMarkup(a.markdownDescription) || a.description,
                    insertText: s,
                    insertTextFormat: ae.Snippet,
                    filterText: u,
                  }),
                    (o = !0);
                }),
              !o &&
                "object" === typeof e.items &&
                !Array.isArray(e.items) &&
                r < 5 &&
                this.addDefaultValueCompletions(e.items, t, n, r + 1);
          }),
          (e.prototype.addEnumValueCompletions = function (e, t, n) {
            if (
              (X(e.const) &&
                n.add({
                  kind: this.getSuggestionKind(e.type),
                  label: this.getLabelForValue(e.const),
                  insertText: this.getInsertTextForValue(e.const, t),
                  insertTextFormat: ae.Snippet,
                  documentation:
                    this.fromMarkup(e.markdownDescription) || e.description,
                }),
              Array.isArray(e.enum))
            )
              for (var r = 0, i = e.enum.length; r < i; r++) {
                var o = e.enum[r],
                  a = this.fromMarkup(e.markdownDescription) || e.description;
                e.markdownEnumDescriptions &&
                r < e.markdownEnumDescriptions.length &&
                this.doesSupportMarkdown()
                  ? (a = this.fromMarkup(e.markdownEnumDescriptions[r]))
                  : e.enumDescriptions &&
                    r < e.enumDescriptions.length &&
                    (a = e.enumDescriptions[r]),
                  n.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(o),
                    insertText: this.getInsertTextForValue(o, t),
                    insertTextFormat: ae.Snippet,
                    documentation: a,
                  });
              }
          }),
          (e.prototype.collectTypes = function (e, t) {
            if (!Array.isArray(e.enum) && !X(e.const)) {
              var n = e.type;
              Array.isArray(n)
                ? n.forEach(function (e) {
                    return (t[e] = !0);
                  })
                : n && (t[n] = !0);
            }
          }),
          (e.prototype.addFillerValueCompletions = function (e, t, n) {
            e["object"] &&
              n.add({
                kind: this.getSuggestionKind("object"),
                label: "{}",
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: ae.Snippet,
                detail: ct("defaults.object", "New object"),
                documentation: "",
              }),
              e["array"] &&
                n.add({
                  kind: this.getSuggestionKind("array"),
                  label: "[]",
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: ae.Snippet,
                  detail: ct("defaults.array", "New array"),
                  documentation: "",
                });
          }),
          (e.prototype.addBooleanValueCompletion = function (e, t, n) {
            n.add({
              kind: this.getSuggestionKind("boolean"),
              label: e ? "true" : "false",
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: ae.Snippet,
              documentation: "",
            });
          }),
          (e.prototype.addNullValueCompletion = function (e, t) {
            t.add({
              kind: this.getSuggestionKind("null"),
              label: "null",
              insertText: "null" + e,
              insertTextFormat: ae.Snippet,
              documentation: "",
            });
          }),
          (e.prototype.addDollarSchemaCompletions = function (e, t) {
            var n = this,
              r = this.schemaService.getRegisteredSchemaIds(function (e) {
                return "http" === e || "https" === e;
              });
            r.forEach(function (r) {
              return t.add({
                kind: oe.Module,
                label: n.getLabelForValue(r),
                filterText: n.getFilterTextForValue(r),
                insertText: n.getInsertTextForValue(r, e),
                insertTextFormat: ae.Snippet,
                documentation: "",
              });
            });
          }),
          (e.prototype.getLabelForValue = function (e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForValue = function (e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForSnippetValue = function (e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
          }),
          (e.prototype.getLabelForSnippetValue = function (e) {
            var t = JSON.stringify(e);
            return t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
          }),
          (e.prototype.getInsertTextForPlainText = function (e) {
            return e.replace(/[\\\$\}]/g, "\\$&");
          }),
          (e.prototype.getInsertTextForValue = function (e, t) {
            var n = JSON.stringify(e, null, "\t");
            return "{}" === n
              ? "{$1}" + t
              : "[]" === n
              ? "[$1]" + t
              : this.getInsertTextForPlainText(n + t);
          }),
          (e.prototype.getInsertTextForSnippetValue = function (e, t) {
            var n = function (e) {
              return "string" === typeof e && "^" === e[0]
                ? e.substr(1)
                : JSON.stringify(e);
            };
            return it(e, "", n) + t;
          }),
          (e.prototype.getInsertTextForGuessedValue = function (e, t) {
            switch (typeof e) {
              case "object":
                return null === e
                  ? "${1:null}" + t
                  : this.getInsertTextForValue(e, t);
              case "string":
                var n = JSON.stringify(e);
                return (
                  (n = n.substr(1, n.length - 2)),
                  (n = this.getInsertTextForPlainText(n)),
                  '"${1:' + n + '}"' + t
                );
              case "number":
              case "boolean":
                return "${1:" + JSON.stringify(e) + "}" + t;
            }
            return this.getInsertTextForValue(e, t);
          }),
          (e.prototype.getSuggestionKind = function (e) {
            if (Array.isArray(e)) {
              var t = e;
              e = t.length > 0 ? t[0] : void 0;
            }
            if (!e) return oe.Value;
            switch (e) {
              case "string":
                return oe.Value;
              case "object":
                return oe.Module;
              case "property":
                return oe.Property;
              default:
                return oe.Value;
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function (e, t) {
            switch (e.type) {
              case "array":
                return "[]";
              case "object":
                return "{}";
              default:
                var n = t.getText().substr(e.offset, e.length);
                return n;
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function (e, t, n) {
            switch (e.type) {
              case "array":
                return this.getInsertTextForValue([], n);
              case "object":
                return this.getInsertTextForValue({}, n);
              default:
                var r = t.getText().substr(e.offset, e.length) + n;
                return this.getInsertTextForPlainText(r);
            }
          }),
          (e.prototype.getInsertTextForProperty = function (e, t, n, r) {
            var i = this.getInsertTextForValue(e, "");
            if (!n) return i;
            var o,
              a = i + ": ",
              s = 0;
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var u = t.defaultSnippets[0].body;
                  X(u) && (o = this.getInsertTextForSnippetValue(u, ""));
                }
                s += t.defaultSnippets.length;
              }
              if (
                (t.enum &&
                  (o ||
                    1 !== t.enum.length ||
                    (o = this.getInsertTextForGuessedValue(t.enum[0], "")),
                  (s += t.enum.length)),
                X(t.default) &&
                  (o || (o = this.getInsertTextForGuessedValue(t.default, "")),
                  s++),
                Array.isArray(t.examples) &&
                  t.examples.length &&
                  (o ||
                    (o = this.getInsertTextForGuessedValue(t.examples[0], "")),
                  (s += t.examples.length)),
                0 === s)
              ) {
                var c = Array.isArray(t.type) ? t.type[0] : t.type;
                switch (
                  (c ||
                    (t.properties ? (c = "object") : t.items && (c = "array")),
                  c)
                ) {
                  case "boolean":
                    o = "$1";
                    break;
                  case "string":
                    o = '"$1"';
                    break;
                  case "object":
                    o = "{$1}";
                    break;
                  case "array":
                    o = "[$1]";
                    break;
                  case "number":
                  case "integer":
                    o = "${1:0}";
                    break;
                  case "null":
                    o = "${1:null}";
                    break;
                  default:
                    return i;
                }
              }
            }
            return (!o || s > 1) && (o = "$1"), a + o + r;
          }),
          (e.prototype.getCurrentWord = function (e, t) {
            var n = t - 1,
              r = e.getText();
            while (n >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n)))
              n--;
            return r.substring(n + 1, t);
          }),
          (e.prototype.evaluateSeparatorAfter = function (e, t) {
            var n = q(e.getText(), !0);
            n.setPosition(t);
            var r = n.scan();
            switch (r) {
              case 5:
              case 2:
              case 4:
              case 17:
                return "";
              default:
                return ",";
            }
          }),
          (e.prototype.findItemAtOffset = function (e, t, n) {
            for (
              var r = q(t.getText(), !0), i = e.items, o = i.length - 1;
              o >= 0;
              o--
            ) {
              var a = i[o];
              if (n > a.offset + a.length) {
                r.setPosition(a.offset + a.length);
                var s = r.scan();
                return 5 === s && n >= r.getTokenOffset() + r.getTokenLength()
                  ? o + 1
                  : o;
              }
              if (n >= a.offset) return o;
            }
            return 0;
          }),
          (e.prototype.isInComment = function (e, t, n) {
            var r = q(e.getText(), !1);
            r.setPosition(t);
            var i = r.scan();
            while (17 !== i && r.getTokenOffset() + r.getTokenLength() < n)
              i = r.scan();
            return (12 === i || 13 === i) && r.getTokenOffset() <= n;
          }),
          (e.prototype.fromMarkup = function (e) {
            if (e && this.doesSupportMarkdown())
              return { kind: re.Markdown, value: e };
          }),
          (e.prototype.doesSupportMarkdown = function () {
            if (!X(this.supportsMarkdown)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsMarkdown =
                e &&
                e.completionItem &&
                Array.isArray(e.completionItem.documentationFormat) &&
                -1 !==
                  e.completionItem.documentationFormat.indexOf(re.Markdown);
            }
            return this.supportsMarkdown;
          }),
          (e.prototype.doesSupportsCommitCharacters = function () {
            if (!X(this.supportsCommitCharacters)) {
              var e =
                this.clientCapabilities.textDocument &&
                this.clientCapabilities.textDocument.completion;
              this.supportsCommitCharacters =
                e &&
                e.completionItem &&
                !!e.completionItem.commitCharactersSupport;
            }
            return this.supportsCommitCharacters;
          });
      })(),
        (function () {
          function e(e, t, n) {
            void 0 === t && (t = []),
              (this.schemaService = e),
              (this.contributions = t),
              (this.promise = n || Promise);
          }
          e.prototype.doHover = function (e, t, n) {
            var r = e.offsetAt(t),
              i = n.getNodeFromOffset(r);
            if (
              !i ||
              (("object" === i.type || "array" === i.type) &&
                r > i.offset + 1 &&
                r < i.offset + i.length - 1)
            )
              return this.promise.resolve(null);
            var o = i;
            if ("string" === i.type) {
              var a = i.parent;
              if (
                a &&
                "property" === a.type &&
                a.keyNode === i &&
                ((i = a.valueNode), !i)
              )
                return this.promise.resolve(null);
            }
            for (
              var s = x.create(
                  e.positionAt(o.offset),
                  e.positionAt(o.offset + o.length)
                ),
                u = function (e) {
                  var t = { contents: e, range: s };
                  return t;
                },
                c = tt(i),
                l = this.contributions.length - 1;
              l >= 0;
              l--
            ) {
              var f = this.contributions[l],
                h = f.getInfoContribution(e.uri, c);
              if (h)
                return h.then(function (e) {
                  return u(e);
                });
            }
            return this.schemaService
              .getSchemaForResource(e.uri, n)
              .then(function (e) {
                if (e && i) {
                  var t = n.getMatchingSchemas(e.schema, i.offset),
                    r = void 0,
                    o = void 0,
                    a = void 0,
                    s = void 0;
                  t.every(function (e) {
                    if (
                      e.node === i &&
                      !e.inverted &&
                      e.schema &&
                      ((r = r || e.schema.title),
                      (o =
                        o ||
                        e.schema.markdownDescription ||
                        ht(e.schema.description)),
                      e.schema.enum)
                    ) {
                      var t = e.schema.enum.indexOf(et(i));
                      e.schema.markdownEnumDescriptions
                        ? (a = e.schema.markdownEnumDescriptions[t])
                        : e.schema.enumDescriptions &&
                          (a = ht(e.schema.enumDescriptions[t])),
                        a &&
                          ((s = e.schema.enum[t]),
                          "string" !== typeof s && (s = JSON.stringify(s)));
                    }
                    return !0;
                  });
                  var c = "";
                  return (
                    r && (c = ht(r)),
                    o && (c.length > 0 && (c += "\n\n"), (c += o)),
                    a &&
                      (c.length > 0 && (c += "\n\n"),
                      (c += "`" + pt(s) + "`: " + a)),
                    u([c])
                  );
                }
                return null;
              });
          };
        })();
      function ht(e) {
        if (e) {
          var t = e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, "$1\n\n$3");
          return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }
      }
      function pt(e) {
        return -1 !== e.indexOf("`") ? "`` " + e + " ``" : e;
      }
      ut = (() => {
        var e = {
            470: (e) => {
              function t(e) {
                if ("string" != typeof e)
                  throw new TypeError(
                    "Path must be a string. Received " + JSON.stringify(e)
                  );
              }
              function n(e, t) {
                for (
                  var n, r = "", i = 0, o = -1, a = 0, s = 0;
                  s <= e.length;
                  ++s
                ) {
                  if (s < e.length) n = e.charCodeAt(s);
                  else {
                    if (47 === n) break;
                    n = 47;
                  }
                  if (47 === n) {
                    if (o === s - 1 || 1 === a);
                    else if (o !== s - 1 && 2 === a) {
                      if (
                        r.length < 2 ||
                        2 !== i ||
                        46 !== r.charCodeAt(r.length - 1) ||
                        46 !== r.charCodeAt(r.length - 2)
                      )
                        if (r.length > 2) {
                          var u = r.lastIndexOf("/");
                          if (u !== r.length - 1) {
                            -1 === u
                              ? ((r = ""), (i = 0))
                              : (i =
                                  (r = r.slice(0, u)).length -
                                  1 -
                                  r.lastIndexOf("/")),
                              (o = s),
                              (a = 0);
                            continue;
                          }
                        } else if (2 === r.length || 1 === r.length) {
                          (r = ""), (i = 0), (o = s), (a = 0);
                          continue;
                        }
                      t && (r.length > 0 ? (r += "/..") : (r = ".."), (i = 2));
                    } else
                      r.length > 0
                        ? (r += "/" + e.slice(o + 1, s))
                        : (r = e.slice(o + 1, s)),
                        (i = s - o - 1);
                    (o = s), (a = 0);
                  } else 46 === n && -1 !== a ? ++a : (a = -1);
                }
                return r;
              }
              var r = {
                resolve: function () {
                  for (
                    var e, r = "", i = !1, o = arguments.length - 1;
                    o >= -1 && !i;
                    o--
                  ) {
                    var a;
                    o >= 0
                      ? (a = arguments[o])
                      : (void 0 === e && (e = process.cwd()), (a = e)),
                      t(a),
                      0 !== a.length &&
                        ((r = a + "/" + r), (i = 47 === a.charCodeAt(0)));
                  }
                  return (
                    (r = n(r, !i)),
                    i ? (r.length > 0 ? "/" + r : "/") : r.length > 0 ? r : "."
                  );
                },
                normalize: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  var r = 47 === e.charCodeAt(0),
                    i = 47 === e.charCodeAt(e.length - 1);
                  return (
                    0 !== (e = n(e, !r)).length || r || (e = "."),
                    e.length > 0 && i && (e += "/"),
                    r ? "/" + e : e
                  );
                },
                isAbsolute: function (e) {
                  return t(e), e.length > 0 && 47 === e.charCodeAt(0);
                },
                join: function () {
                  if (0 === arguments.length) return ".";
                  for (var e, n = 0; n < arguments.length; ++n) {
                    var i = arguments[n];
                    t(i),
                      i.length > 0 && (void 0 === e ? (e = i) : (e += "/" + i));
                  }
                  return void 0 === e ? "." : r.normalize(e);
                },
                relative: function (e, n) {
                  if ((t(e), t(n), e === n)) return "";
                  if ((e = r.resolve(e)) === (n = r.resolve(n))) return "";
                  for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
                  for (
                    var o = e.length, a = o - i, s = 1;
                    s < n.length && 47 === n.charCodeAt(s);
                    ++s
                  );
                  for (
                    var u = n.length - s, c = a < u ? a : u, l = -1, f = 0;
                    f <= c;
                    ++f
                  ) {
                    if (f === c) {
                      if (u > c) {
                        if (47 === n.charCodeAt(s + f))
                          return n.slice(s + f + 1);
                        if (0 === f) return n.slice(s + f);
                      } else
                        a > c &&
                          (47 === e.charCodeAt(i + f)
                            ? (l = f)
                            : 0 === f && (l = 0));
                      break;
                    }
                    var h = e.charCodeAt(i + f);
                    if (h !== n.charCodeAt(s + f)) break;
                    47 === h && (l = f);
                  }
                  var p = "";
                  for (f = i + l + 1; f <= o; ++f)
                    (f !== o && 47 !== e.charCodeAt(f)) ||
                      (0 === p.length ? (p += "..") : (p += "/.."));
                  return p.length > 0
                    ? p + n.slice(s + l)
                    : ((s += l), 47 === n.charCodeAt(s) && ++s, n.slice(s));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((t(e), 0 === e.length)) return ".";
                  for (
                    var n = e.charCodeAt(0),
                      r = 47 === n,
                      i = -1,
                      o = !0,
                      a = e.length - 1;
                    a >= 1;
                    --a
                  )
                    if (47 === (n = e.charCodeAt(a))) {
                      if (!o) {
                        i = a;
                        break;
                      }
                    } else o = !1;
                  return -1 === i
                    ? r
                      ? "/"
                      : "."
                    : r && 1 === i
                    ? "//"
                    : e.slice(0, i);
                },
                basename: function (e, n) {
                  if (void 0 !== n && "string" != typeof n)
                    throw new TypeError('"ext" argument must be a string');
                  t(e);
                  var r,
                    i = 0,
                    o = -1,
                    a = !0;
                  if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                    if (n.length === e.length && n === e) return "";
                    var s = n.length - 1,
                      u = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var c = e.charCodeAt(r);
                      if (47 === c) {
                        if (!a) {
                          i = r + 1;
                          break;
                        }
                      } else
                        -1 === u && ((a = !1), (u = r + 1)),
                          s >= 0 &&
                            (c === n.charCodeAt(s)
                              ? -1 == --s && (o = r)
                              : ((s = -1), (o = u)));
                    }
                    return (
                      i === o ? (o = u) : -1 === o && (o = e.length),
                      e.slice(i, o)
                    );
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!a) {
                        i = r + 1;
                        break;
                      }
                    } else -1 === o && ((a = !1), (o = r + 1));
                  return -1 === o ? "" : e.slice(i, o);
                },
                extname: function (e) {
                  t(e);
                  for (
                    var n = -1, r = 0, i = -1, o = !0, a = 0, s = e.length - 1;
                    s >= 0;
                    --s
                  ) {
                    var u = e.charCodeAt(s);
                    if (47 !== u)
                      -1 === i && ((o = !1), (i = s + 1)),
                        46 === u
                          ? -1 === n
                            ? (n = s)
                            : 1 !== a && (a = 1)
                          : -1 !== n && (a = -1);
                    else if (!o) {
                      r = s + 1;
                      break;
                    }
                  }
                  return -1 === n ||
                    -1 === i ||
                    0 === a ||
                    (1 === a && n === i - 1 && n === r + 1)
                    ? ""
                    : e.slice(n, i);
                },
                format: function (e) {
                  if (null === e || "object" != typeof e)
                    throw new TypeError(
                      'The "pathObject" argument must be of type Object. Received type ' +
                        typeof e
                    );
                  return (function (e, t) {
                    var n = t.dir || t.root,
                      r = t.base || (t.name || "") + (t.ext || "");
                    return n ? (n === t.root ? n + r : n + "/" + r) : r;
                  })(0, e);
                },
                parse: function (e) {
                  t(e);
                  var n = { root: "", dir: "", base: "", ext: "", name: "" };
                  if (0 === e.length) return n;
                  var r,
                    i = e.charCodeAt(0),
                    o = 47 === i;
                  o ? ((n.root = "/"), (r = 1)) : (r = 0);
                  for (
                    var a = -1, s = 0, u = -1, c = !0, l = e.length - 1, f = 0;
                    l >= r;
                    --l
                  )
                    if (47 !== (i = e.charCodeAt(l)))
                      -1 === u && ((c = !1), (u = l + 1)),
                        46 === i
                          ? -1 === a
                            ? (a = l)
                            : 1 !== f && (f = 1)
                          : -1 !== a && (f = -1);
                    else if (!c) {
                      s = l + 1;
                      break;
                    }
                  return (
                    -1 === a ||
                    -1 === u ||
                    0 === f ||
                    (1 === f && a === u - 1 && a === s + 1)
                      ? -1 !== u &&
                        (n.base = n.name =
                          0 === s && o ? e.slice(1, u) : e.slice(s, u))
                      : (0 === s && o
                          ? ((n.name = e.slice(1, a)), (n.base = e.slice(1, u)))
                          : ((n.name = e.slice(s, a)),
                            (n.base = e.slice(s, u))),
                        (n.ext = e.slice(a, u))),
                    s > 0 ? (n.dir = e.slice(0, s - 1)) : o && (n.dir = "/"),
                    n
                  );
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null,
              };
              (r.posix = r), (e.exports = r);
            },
            447: (e, t, n) => {
              var r;
              if (
                (n.r(t),
                n.d(t, { URI: () => d, Utils: () => S }),
                "object" == typeof process)
              )
                r = "win32" === process.platform;
              else if ("object" == typeof navigator) {
                var i = navigator.userAgent;
                r = i.indexOf("Windows") >= 0;
              }
              var o,
                a,
                s =
                  ((o = function (e, t) {
                    return (o =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var n in t)
                          Object.prototype.hasOwnProperty.call(t, n) &&
                            (e[n] = t[n]);
                      })(e, t);
                  }),
                  function (e, t) {
                    function n() {
                      this.constructor = e;
                    }
                    o(e, t),
                      (e.prototype =
                        null === t
                          ? Object.create(t)
                          : ((n.prototype = t.prototype), new n()));
                  }),
                u = /^\w[\w\d+.-]*$/,
                c = /^\//,
                l = /^\/\//,
                f = "",
                h = "/",
                p =
                  /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                d = (function () {
                  function e(e, t, n, r, i, o) {
                    void 0 === o && (o = !1),
                      "object" == typeof e
                        ? ((this.scheme = e.scheme || f),
                          (this.authority = e.authority || f),
                          (this.path = e.path || f),
                          (this.query = e.query || f),
                          (this.fragment = e.fragment || f))
                        : ((this.scheme = (function (e, t) {
                            return e || t ? e : "file";
                          })(e, o)),
                          (this.authority = t || f),
                          (this.path = (function (e, t) {
                            switch (e) {
                              case "https":
                              case "http":
                              case "file":
                                t ? t[0] !== h && (t = h + t) : (t = h);
                            }
                            return t;
                          })(this.scheme, n || f)),
                          (this.query = r || f),
                          (this.fragment = i || f),
                          (function (e, t) {
                            if (!e.scheme && t)
                              throw new Error(
                                '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                                  e.authority +
                                  '", path: "' +
                                  e.path +
                                  '", query: "' +
                                  e.query +
                                  '", fragment: "' +
                                  e.fragment +
                                  '"}'
                              );
                            if (e.scheme && !u.test(e.scheme))
                              throw new Error(
                                "[UriError]: Scheme contains illegal characters."
                              );
                            if (e.path)
                              if (e.authority) {
                                if (!c.test(e.path))
                                  throw new Error(
                                    '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                                  );
                              } else if (l.test(e.path))
                                throw new Error(
                                  '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                                );
                          })(this, o));
                  }
                  return (
                    (e.isUri = function (t) {
                      return (
                        t instanceof e ||
                        (!!t &&
                          "string" == typeof t.authority &&
                          "string" == typeof t.fragment &&
                          "string" == typeof t.path &&
                          "string" == typeof t.query &&
                          "string" == typeof t.scheme &&
                          "function" == typeof t.fsPath &&
                          "function" == typeof t.with &&
                          "function" == typeof t.toString)
                      );
                    }),
                    Object.defineProperty(e.prototype, "fsPath", {
                      get: function () {
                        return x(this, !1);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.with = function (e) {
                      if (!e) return this;
                      var t = e.scheme,
                        n = e.authority,
                        r = e.path,
                        i = e.query,
                        o = e.fragment;
                      return (
                        void 0 === t
                          ? (t = this.scheme)
                          : null === t && (t = f),
                        void 0 === n
                          ? (n = this.authority)
                          : null === n && (n = f),
                        void 0 === r ? (r = this.path) : null === r && (r = f),
                        void 0 === i ? (i = this.query) : null === i && (i = f),
                        void 0 === o
                          ? (o = this.fragment)
                          : null === o && (o = f),
                        t === this.scheme &&
                        n === this.authority &&
                        r === this.path &&
                        i === this.query &&
                        o === this.fragment
                          ? this
                          : new g(t, n, r, i, o)
                      );
                    }),
                    (e.parse = function (e, t) {
                      void 0 === t && (t = !1);
                      var n = p.exec(e);
                      return n
                        ? new g(
                            n[2] || f,
                            k(n[4] || f),
                            k(n[5] || f),
                            k(n[7] || f),
                            k(n[9] || f),
                            t
                          )
                        : new g(f, f, f, f, f);
                    }),
                    (e.file = function (e) {
                      var t = f;
                      if (
                        (r && (e = e.replace(/\\/g, h)),
                        e[0] === h && e[1] === h)
                      ) {
                        var n = e.indexOf(h, 2);
                        -1 === n
                          ? ((t = e.substring(2)), (e = h))
                          : ((t = e.substring(2, n)),
                            (e = e.substring(n) || h));
                      }
                      return new g("file", t, e, f, f);
                    }),
                    (e.from = function (e) {
                      return new g(
                        e.scheme,
                        e.authority,
                        e.path,
                        e.query,
                        e.fragment
                      );
                    }),
                    (e.prototype.toString = function (e) {
                      return void 0 === e && (e = !1), C(this, e);
                    }),
                    (e.prototype.toJSON = function () {
                      return this;
                    }),
                    (e.revive = function (t) {
                      if (t) {
                        if (t instanceof e) return t;
                        var n = new g(t);
                        return (
                          (n._formatted = t.external),
                          (n._fsPath = t._sep === m ? t.fsPath : null),
                          n
                        );
                      }
                      return t;
                    }),
                    e
                  );
                })(),
                m = r ? 1 : void 0,
                g = (function (e) {
                  function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t._formatted = null), (t._fsPath = null), t;
                  }
                  return (
                    s(t, e),
                    Object.defineProperty(t.prototype, "fsPath", {
                      get: function () {
                        return (
                          this._fsPath || (this._fsPath = x(this, !1)),
                          this._fsPath
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.toString = function (e) {
                      return (
                        void 0 === e && (e = !1),
                        e
                          ? C(this, !0)
                          : (this._formatted || (this._formatted = C(this, !1)),
                            this._formatted)
                      );
                    }),
                    (t.prototype.toJSON = function () {
                      var e = { $mid: 1 };
                      return (
                        this._fsPath &&
                          ((e.fsPath = this._fsPath), (e._sep = m)),
                        this._formatted && (e.external = this._formatted),
                        this.path && (e.path = this.path),
                        this.scheme && (e.scheme = this.scheme),
                        this.authority && (e.authority = this.authority),
                        this.query && (e.query = this.query),
                        this.fragment && (e.fragment = this.fragment),
                        e
                      );
                    }),
                    t
                  );
                })(d),
                v =
                  (((a = {})[58] = "%3A"),
                  (a[47] = "%2F"),
                  (a[63] = "%3F"),
                  (a[35] = "%23"),
                  (a[91] = "%5B"),
                  (a[93] = "%5D"),
                  (a[64] = "%40"),
                  (a[33] = "%21"),
                  (a[36] = "%24"),
                  (a[38] = "%26"),
                  (a[39] = "%27"),
                  (a[40] = "%28"),
                  (a[41] = "%29"),
                  (a[42] = "%2A"),
                  (a[43] = "%2B"),
                  (a[44] = "%2C"),
                  (a[59] = "%3B"),
                  (a[61] = "%3D"),
                  (a[32] = "%20"),
                  a);
              function y(e, t) {
                for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
                  var o = e.charCodeAt(i);
                  if (
                    (o >= 97 && o <= 122) ||
                    (o >= 65 && o <= 90) ||
                    (o >= 48 && o <= 57) ||
                    45 === o ||
                    46 === o ||
                    95 === o ||
                    126 === o ||
                    (t && 47 === o)
                  )
                    -1 !== r &&
                      ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
                      void 0 !== n && (n += e.charAt(i));
                  else {
                    void 0 === n && (n = e.substr(0, i));
                    var a = v[o];
                    void 0 !== a
                      ? (-1 !== r &&
                          ((n += encodeURIComponent(e.substring(r, i))),
                          (r = -1)),
                        (n += a))
                      : -1 === r && (r = i);
                  }
                }
                return (
                  -1 !== r && (n += encodeURIComponent(e.substring(r))),
                  void 0 !== n ? n : e
                );
              }
              function b(e) {
                for (var t = void 0, n = 0; n < e.length; n++) {
                  var r = e.charCodeAt(n);
                  35 === r || 63 === r
                    ? (void 0 === t && (t = e.substr(0, n)), (t += v[r]))
                    : void 0 !== t && (t += e[n]);
                }
                return void 0 !== t ? t : e;
              }
              function x(e, t) {
                var n;
                return (
                  (n =
                    e.authority && e.path.length > 1 && "file" === e.scheme
                      ? "//" + e.authority + e.path
                      : 47 === e.path.charCodeAt(0) &&
                        ((e.path.charCodeAt(1) >= 65 &&
                          e.path.charCodeAt(1) <= 90) ||
                          (e.path.charCodeAt(1) >= 97 &&
                            e.path.charCodeAt(1) <= 122)) &&
                        58 === e.path.charCodeAt(2)
                      ? t
                        ? e.path.substr(1)
                        : e.path[1].toLowerCase() + e.path.substr(2)
                      : e.path),
                  r && (n = n.replace(/\//g, "\\")),
                  n
                );
              }
              function C(e, t) {
                var n = t ? b : y,
                  r = "",
                  i = e.scheme,
                  o = e.authority,
                  a = e.path,
                  s = e.query,
                  u = e.fragment;
                if (
                  (i && ((r += i), (r += ":")),
                  (o || "file" === i) && ((r += h), (r += h)),
                  o)
                ) {
                  var c = o.indexOf("@");
                  if (-1 !== c) {
                    var l = o.substr(0, c);
                    (o = o.substr(c + 1)),
                      -1 === (c = l.indexOf(":"))
                        ? (r += n(l, !1))
                        : ((r += n(l.substr(0, c), !1)),
                          (r += ":"),
                          (r += n(l.substr(c + 1), !1))),
                      (r += "@");
                  }
                  -1 === (c = (o = o.toLowerCase()).indexOf(":"))
                    ? (r += n(o, !1))
                    : ((r += n(o.substr(0, c), !1)), (r += o.substr(c)));
                }
                if (a) {
                  if (
                    a.length >= 3 &&
                    47 === a.charCodeAt(0) &&
                    58 === a.charCodeAt(2)
                  )
                    (f = a.charCodeAt(1)) >= 65 &&
                      f <= 90 &&
                      (a =
                        "/" + String.fromCharCode(f + 32) + ":" + a.substr(3));
                  else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
                    var f;
                    (f = a.charCodeAt(0)) >= 65 &&
                      f <= 90 &&
                      (a = String.fromCharCode(f + 32) + ":" + a.substr(2));
                  }
                  r += n(a, !0);
                }
                return (
                  s && ((r += "?"), (r += n(s, !1))),
                  u && ((r += "#"), (r += t ? u : y(u, !1))),
                  r
                );
              }
              function w(e) {
                try {
                  return decodeURIComponent(e);
                } catch (t) {
                  return e.length > 3 ? e.substr(0, 3) + w(e.substr(3)) : e;
                }
              }
              var A = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
              function k(e) {
                return e.match(A)
                  ? e.replace(A, function (e) {
                      return w(e);
                    })
                  : e;
              }
              var S,
                I = n(470),
                E = function () {
                  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                  var r = Array(e),
                    i = 0;
                  for (t = 0; t < n; t++)
                    for (
                      var o = arguments[t], a = 0, s = o.length;
                      a < s;
                      a++, i++
                    )
                      r[i] = o[a];
                  return r;
                },
                T = I.posix || I;
              !(function (e) {
                (e.joinPath = function (e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  return e.with({ path: T.join.apply(T, E([e.path], t)) });
                }),
                  (e.resolvePath = function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    var r = e.path || "/";
                    return e.with({ path: T.resolve.apply(T, E([r], t)) });
                  }),
                  (e.dirname = function (e) {
                    var t = T.dirname(e.path);
                    return 1 === t.length && 46 === t.charCodeAt(0)
                      ? e
                      : e.with({ path: t });
                  }),
                  (e.basename = function (e) {
                    return T.basename(e.path);
                  }),
                  (e.extname = function (e) {
                    return T.extname(e.path);
                  });
              })(S || (S = {}));
            },
          },
          t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var i = (t[r] = { exports: {} });
          return e[r](i, i.exports, n), i.exports;
        }
        return (
          (n.d = (e, t) => {
            for (var r in t)
              n.o(t, r) &&
                !n.o(e, r) &&
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          }),
          (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (n.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          n(447)
        );
      })();
      const { URI: dt, Utils: mt } = ut;
      var gt = Be(),
        vt = (function () {
          function e(e, t) {
            (this.patternRegExps = []), (this.isInclude = []);
            try {
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = "!" !== i[0];
                o || (i = i.substring(1)),
                  this.patternRegExps.push(new RegExp(st(i) + "$")),
                  this.isInclude.push(o);
              }
              this.uris = t;
            } catch (a) {
              (this.patternRegExps.length = 0),
                (this.isInclude.length = 0),
                (this.uris = []);
            }
          }
          return (
            (e.prototype.matchesPattern = function (e) {
              for (var t = !1, n = 0; n < this.patternRegExps.length; n++) {
                var r = this.patternRegExps[n];
                r.test(e) && (t = this.isInclude[n]);
              }
              return t;
            }),
            (e.prototype.getURIs = function () {
              return this.uris;
            }),
            e
          );
        })(),
        yt = (function () {
          function e(e, t, n) {
            (this.service = e),
              (this.url = t),
              (this.dependencies = {}),
              n &&
                (this.unresolvedSchema = this.service.promise.resolve(
                  new bt(n)
                ));
          }
          return (
            (e.prototype.getUnresolvedSchema = function () {
              return (
                this.unresolvedSchema ||
                  (this.unresolvedSchema = this.service.loadSchema(this.url)),
                this.unresolvedSchema
              );
            }),
            (e.prototype.getResolvedSchema = function () {
              var e = this;
              return (
                this.resolvedSchema ||
                  (this.resolvedSchema = this.getUnresolvedSchema().then(
                    function (t) {
                      return e.service.resolveSchemaContent(
                        t,
                        e.url,
                        e.dependencies
                      );
                    }
                  )),
                this.resolvedSchema
              );
            }),
            (e.prototype.clearSchema = function () {
              (this.resolvedSchema = void 0),
                (this.unresolvedSchema = void 0),
                (this.dependencies = {});
            }),
            e
          );
        })(),
        bt = (function () {
          function e(e, t) {
            void 0 === t && (t = []), (this.schema = e), (this.errors = t);
          }
          return e;
        })(),
        xt = (function () {
          function e(e, t) {
            void 0 === t && (t = []), (this.schema = e), (this.errors = t);
          }
          return (
            (e.prototype.getSection = function (e) {
              var t = this.getSectionRecursive(e, this.schema);
              if (t) return Xe(t);
            }),
            (e.prototype.getSectionRecursive = function (e, t) {
              if (!t || "boolean" === typeof t || 0 === e.length) return t;
              var n = e.shift();
              if (t.properties && (t.properties[n], 1))
                return this.getSectionRecursive(e, t.properties[n]);
              if (t.patternProperties)
                for (
                  var r = 0, i = Object.keys(t.patternProperties);
                  r < i.length;
                  r++
                ) {
                  var o = i[r],
                    a = new RegExp(o);
                  if (a.test(n))
                    return this.getSectionRecursive(e, t.patternProperties[o]);
                }
              else {
                if ("object" === typeof t.additionalProperties)
                  return this.getSectionRecursive(e, t.additionalProperties);
                if (n.match("[0-9]+"))
                  if (Array.isArray(t.items)) {
                    var s = parseInt(n, 10);
                    if (!isNaN(s) && t.items[s])
                      return this.getSectionRecursive(e, t.items[s]);
                  } else if (t.items)
                    return this.getSectionRecursive(e, t.items);
              }
            }),
            e
          );
        })(),
        Ct =
          ((function () {
            function e(e, t, n) {
              (this.contextService = t),
                (this.requestService = e),
                (this.promiseConstructor = n || Promise),
                (this.callOnDispose = []),
                (this.contributionSchemas = {}),
                (this.contributionAssociations = []),
                (this.schemasById = {}),
                (this.filePatternAssociations = []),
                (this.registeredSchemasIds = {});
            }
            (e.prototype.getRegisteredSchemaIds = function (e) {
              return Object.keys(this.registeredSchemasIds).filter(function (
                t
              ) {
                var n = dt.parse(t).scheme;
                return "schemaservice" !== n && (!e || e(n));
              });
            }),
              Object.defineProperty(e.prototype, "promise", {
                get: function () {
                  return this.promiseConstructor;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.dispose = function () {
                while (this.callOnDispose.length > 0)
                  this.callOnDispose.pop()();
              }),
              (e.prototype.onResourceChange = function (e) {
                var t = this,
                  n = !1;
                e = wt(e);
                var r = [e],
                  i = Object.keys(this.schemasById).map(function (e) {
                    return t.schemasById[e];
                  });
                while (r.length)
                  for (var o = r.pop(), a = 0; a < i.length; a++) {
                    var s = i[a];
                    s &&
                      (s.url === o || s.dependencies[o]) &&
                      (s.url !== o && r.push(s.url),
                      s.clearSchema(),
                      (i[a] = void 0),
                      (n = !0));
                  }
                return n;
              }),
              (e.prototype.setSchemaContributions = function (e) {
                if (e.schemas) {
                  var t = e.schemas;
                  for (var n in t) {
                    var r = wt(n);
                    this.contributionSchemas[r] = this.addSchemaHandle(r, t[n]);
                  }
                }
                if (Array.isArray(e.schemaAssociations))
                  for (
                    var i = e.schemaAssociations, o = 0, a = i;
                    o < a.length;
                    o++
                  ) {
                    var s = a[o],
                      u = s.uris.map(wt),
                      c = this.addFilePatternAssociation(s.pattern, u);
                    this.contributionAssociations.push(c);
                  }
              }),
              (e.prototype.addSchemaHandle = function (e, t) {
                var n = new yt(this, e, t);
                return (this.schemasById[e] = n), n;
              }),
              (e.prototype.getOrAddSchemaHandle = function (e, t) {
                return this.schemasById[e] || this.addSchemaHandle(e, t);
              }),
              (e.prototype.addFilePatternAssociation = function (e, t) {
                var n = new vt(e, t);
                return this.filePatternAssociations.push(n), n;
              }),
              (e.prototype.registerExternalSchema = function (e, t, n) {
                var r = wt(e);
                return (
                  (this.registeredSchemasIds[r] = !0),
                  (this.cachedSchemaForResource = void 0),
                  t && this.addFilePatternAssociation(t, [e]),
                  n ? this.addSchemaHandle(r, n) : this.getOrAddSchemaHandle(r)
                );
              }),
              (e.prototype.clearExternalSchemas = function () {
                for (var e in ((this.schemasById = {}),
                (this.filePatternAssociations = []),
                (this.registeredSchemasIds = {}),
                (this.cachedSchemaForResource = void 0),
                this.contributionSchemas))
                  (this.schemasById[e] = this.contributionSchemas[e]),
                    (this.registeredSchemasIds[e] = !0);
                for (
                  var t = 0, n = this.contributionAssociations;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  this.filePatternAssociations.push(r);
                }
              }),
              (e.prototype.getResolvedSchema = function (e) {
                var t = wt(e),
                  n = this.schemasById[t];
                return n ? n.getResolvedSchema() : this.promise.resolve(void 0);
              }),
              (e.prototype.loadSchema = function (e) {
                if (!this.requestService) {
                  var t = gt(
                    "json.schema.norequestservice",
                    "Unable to load schema from '{0}'. No schema request service available",
                    kt(e)
                  );
                  return this.promise.resolve(new bt({}, [t]));
                }
                return this.requestService(e).then(
                  function (t) {
                    if (!t) {
                      var n = gt(
                        "json.schema.nocontent",
                        "Unable to load schema from '{0}': No content.",
                        kt(e)
                      );
                      return new bt({}, [n]);
                    }
                    var r = {},
                      i = [];
                    r = B(t, i);
                    var o = i.length
                      ? [
                          gt(
                            "json.schema.invalidFormat",
                            "Unable to parse content from '{0}': Parse error at offset {1}.",
                            kt(e),
                            i[0].offset
                          ),
                        ]
                      : [];
                    return new bt(r, o);
                  },
                  function (t) {
                    var n = t.toString(),
                      r = t.toString().split("Error: ");
                    return (
                      r.length > 1 && (n = r[1]),
                      at(n, ".") && (n = n.substr(0, n.length - 1)),
                      new bt({}, [
                        gt(
                          "json.schema.nocontent",
                          "Unable to load schema from '{0}': {1}.",
                          kt(e),
                          n
                        ),
                      ])
                    );
                  }
                );
              }),
              (e.prototype.resolveSchemaContent = function (e, t, n) {
                var r = this,
                  i = e.errors.slice(0),
                  o = e.schema;
                if (o.$schema) {
                  var a = wt(o.$schema);
                  if ("http://json-schema.org/draft-03/schema" === a)
                    return this.promise.resolve(
                      new xt({}, [
                        gt(
                          "json.schema.draft03.notsupported",
                          "Draft-03 schemas are not supported."
                        ),
                      ])
                    );
                  "https://json-schema.org/draft/2019-09/schema" === a &&
                    i.push(
                      gt(
                        "json.schema.draft201909.notsupported",
                        "Draft 2019-09 schemas are not yet fully supported."
                      )
                    );
                }
                var s = this.contextService,
                  u = function (e, t) {
                    if (!t) return e;
                    var n = e;
                    return (
                      "/" === t[0] && (t = t.substr(1)),
                      t.split("/").some(function (e) {
                        return (n = n[e]), !n;
                      }),
                      n
                    );
                  },
                  c = function (e, t, n, r) {
                    var o = r ? decodeURIComponent(r) : void 0,
                      a = u(t, o);
                    if (a)
                      for (var s in a)
                        a.hasOwnProperty(s) &&
                          !e.hasOwnProperty(s) &&
                          (e[s] = a[s]);
                    else
                      i.push(
                        gt(
                          "json.schema.invalidref",
                          "$ref '{0}' in '{1}' can not be resolved.",
                          o,
                          n
                        )
                      );
                  },
                  l = function (e, t, n, o, a) {
                    s &&
                      !/^\w+:\/\/.*/.test(t) &&
                      (t = s.resolveRelativePath(t, o)),
                      (t = wt(t));
                    var u = r.getOrAddSchemaHandle(t);
                    return u.getUnresolvedSchema().then(function (r) {
                      if (((a[t] = !0), r.errors.length)) {
                        var o = n ? t + "#" + n : t;
                        i.push(
                          gt(
                            "json.schema.problemloadingref",
                            "Problems loading reference '{0}': {1}",
                            o,
                            r.errors[0]
                          )
                        );
                      }
                      return (
                        c(e, r.schema, t, n), f(e, r.schema, t, u.dependencies)
                      );
                    });
                  },
                  f = function (e, t, n, i) {
                    if (!e || "object" !== typeof e)
                      return Promise.resolve(null);
                    var o = [e],
                      a = [],
                      s = [],
                      u = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        for (var n = 0, r = e; n < r.length; n++) {
                          var i = r[n];
                          "object" === typeof i && o.push(i);
                        }
                      },
                      f = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        for (var n = 0, r = e; n < r.length; n++) {
                          var i = r[n];
                          if ("object" === typeof i)
                            for (var a in i) {
                              var s = a,
                                u = i[s];
                              "object" === typeof u && o.push(u);
                            }
                        }
                      },
                      h = function () {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        for (var n = 0, r = e; n < r.length; n++) {
                          var i = r[n];
                          if (Array.isArray(i))
                            for (var a = 0, s = i; a < s.length; a++) {
                              var u = s[a];
                              "object" === typeof u && o.push(u);
                            }
                        }
                      },
                      p = function (e) {
                        var r = [];
                        while (e.$ref) {
                          var o = e.$ref,
                            a = o.split("#", 2);
                          if ((delete e.$ref, a[0].length > 0))
                            return void s.push(l(e, a[0], a[1], n, i));
                          -1 === r.indexOf(o) && (c(e, t, n, a[1]), r.push(o));
                        }
                        u(
                          e.items,
                          e.additionalItems,
                          e.additionalProperties,
                          e.not,
                          e.contains,
                          e.propertyNames,
                          e.if,
                          e.then,
                          e.else
                        ),
                          f(
                            e.definitions,
                            e.properties,
                            e.patternProperties,
                            e.dependencies
                          ),
                          h(e.anyOf, e.allOf, e.oneOf, e.items);
                      };
                    while (o.length) {
                      var d = o.pop();
                      a.indexOf(d) >= 0 || (a.push(d), p(d));
                    }
                    return r.promise.all(s);
                  };
                return f(o, o, t, n).then(function (e) {
                  return new xt(o, i);
                });
              }),
              (e.prototype.getSchemaForResource = function (e, t) {
                if (t && t.root && "object" === t.root.type) {
                  var n = t.root.properties.filter(function (e) {
                    return (
                      "$schema" === e.keyNode.value &&
                      e.valueNode &&
                      "string" === e.valueNode.type
                    );
                  });
                  if (n.length > 0) {
                    var r = n[0].valueNode;
                    if (r && "string" === r.type) {
                      var i = et(r);
                      if (
                        (i &&
                          ot(i, ".") &&
                          this.contextService &&
                          (i = this.contextService.resolveRelativePath(i, e)),
                        i)
                      ) {
                        var o = wt(i);
                        return this.getOrAddSchemaHandle(o).getResolvedSchema();
                      }
                    }
                  }
                }
                if (
                  this.cachedSchemaForResource &&
                  this.cachedSchemaForResource.resource === e
                )
                  return this.cachedSchemaForResource.resolvedSchema;
                for (
                  var a = Object.create(null),
                    s = [],
                    u = At(e),
                    c = 0,
                    l = this.filePatternAssociations;
                  c < l.length;
                  c++
                ) {
                  var f = l[c];
                  if (f.matchesPattern(u))
                    for (var h = 0, p = f.getURIs(); h < p.length; h++) {
                      var d = p[h];
                      a[d] || (s.push(d), (a[d] = !0));
                    }
                }
                var m =
                  s.length > 0
                    ? this.createCombinedSchema(e, s).getResolvedSchema()
                    : this.promise.resolve(void 0);
                return (
                  (this.cachedSchemaForResource = {
                    resource: e,
                    resolvedSchema: m,
                  }),
                  m
                );
              }),
              (e.prototype.createCombinedSchema = function (e, t) {
                if (1 === t.length) return this.getOrAddSchemaHandle(t[0]);
                var n =
                    "schemaservice://combinedSchema/" + encodeURIComponent(e),
                  r = {
                    allOf: t.map(function (e) {
                      return { $ref: e };
                    }),
                  };
                return this.addSchemaHandle(n, r);
              }),
              (e.prototype.getMatchingSchemas = function (e, t, n) {
                if (n) {
                  var r =
                    n.id || "schemaservice://untitled/matchingSchemas/" + Ct++;
                  return this.resolveSchemaContent(new bt(n), r, {}).then(
                    function (e) {
                      return t
                        .getMatchingSchemas(e.schema)
                        .filter(function (e) {
                          return !e.inverted;
                        });
                    }
                  );
                }
                return this.getSchemaForResource(e.uri, t).then(function (e) {
                  return e
                    ? t.getMatchingSchemas(e.schema).filter(function (e) {
                        return !e.inverted;
                      })
                    : [];
                });
              });
          })(),
          0);
      function wt(e) {
        try {
          return dt.parse(e).toString();
        } catch (t) {
          return e;
        }
      }
      function At(e) {
        try {
          return dt.parse(e).with({ fragment: null, query: null }).toString();
        } catch (t) {
          return e;
        }
      }
      function kt(e) {
        try {
          var t = dt.parse(e);
          if ("file" === t.scheme) return t.fsPath;
        } catch (n) {}
        return e;
      }
      var St = Be(),
        It =
          ((function () {
            function e(e, t) {
              (this.jsonSchemaService = e),
                (this.promise = t),
                (this.validationEnabled = !0);
            }
            (e.prototype.configure = function (e) {
              e &&
                ((this.validationEnabled = !1 !== e.validate),
                (this.commentSeverity = e.allowComments ? void 0 : O.Error));
            }),
              (e.prototype.doValidation = function (e, t, n, r) {
                var i = this;
                if (!this.validationEnabled) return this.promise.resolve([]);
                var o = [],
                  a = {},
                  s = function (e) {
                    var t =
                      e.range.start.line +
                      " " +
                      e.range.start.character +
                      " " +
                      e.message;
                    a[t] || ((a[t] = !0), o.push(e));
                  },
                  u = function (r) {
                    var a = n ? Ot(n.trailingCommas) : O.Error,
                      u = n ? Ot(n.comments) : i.commentSeverity,
                      c = (
                        null === n || void 0 === n ? void 0 : n.schemaValidation
                      )
                        ? Ot(n.schemaValidation)
                        : O.Warning,
                      l = (
                        null === n || void 0 === n ? void 0 : n.schemaRequest
                      )
                        ? Ot(n.schemaRequest)
                        : O.Warning;
                    if (r) {
                      if (r.errors.length && t.root && l) {
                        var f = t.root,
                          h = "object" === f.type ? f.properties[0] : void 0;
                        if (h && "$schema" === h.keyNode.value) {
                          var p = h.valueNode || h,
                            d = x.create(
                              e.positionAt(p.offset),
                              e.positionAt(p.offset + p.length)
                            );
                          s(P.create(d, r.errors[0], l, Ne.SchemaResolveError));
                        } else {
                          d = x.create(
                            e.positionAt(f.offset),
                            e.positionAt(f.offset + 1)
                          );
                          s(P.create(d, r.errors[0], l, Ne.SchemaResolveError));
                        }
                      } else if (c) {
                        var m = t.validate(e, r.schema, c);
                        m && m.forEach(s);
                      }
                      Et(r.schema) && (u = void 0),
                        Tt(r.schema) && (a = void 0);
                    }
                    for (var g = 0, v = t.syntaxErrors; g < v.length; g++) {
                      var y = v[g];
                      if (y.code === Ne.TrailingComma) {
                        if ("number" !== typeof a) continue;
                        y.severity = a;
                      }
                      s(y);
                    }
                    if ("number" === typeof u) {
                      var b = St(
                        "InvalidCommentToken",
                        "Comments are not permitted in JSON."
                      );
                      t.comments.forEach(function (e) {
                        s(P.create(e, b, u, Ne.CommentNotPermitted));
                      });
                    }
                    return o;
                  };
                if (r) {
                  var c = r.id || "schemaservice://untitled/" + It++;
                  return this.jsonSchemaService
                    .resolveSchemaContent(new bt(r), c, {})
                    .then(function (e) {
                      return u(e);
                    });
                }
                return this.jsonSchemaService
                  .getSchemaForResource(e.uri, t)
                  .then(function (e) {
                    return u(e);
                  });
              });
          })(),
          0);
      function Et(e) {
        if (e && "object" === typeof e) {
          if (Z(e.allowComments)) return e.allowComments;
          if (e.allOf)
            for (var t = 0, n = e.allOf; t < n.length; t++) {
              var r = n[t],
                i = Et(r);
              if (Z(i)) return i;
            }
        }
      }
      function Tt(e) {
        if (e && "object" === typeof e) {
          if (Z(e.allowTrailingCommas)) return e.allowTrailingCommas;
          var t = e;
          if (Z(t["allowsTrailingCommas"])) return t["allowsTrailingCommas"];
          if (e.allOf)
            for (var n = 0, r = e.allOf; n < r.length; n++) {
              var i = r[n],
                o = Tt(i);
              if (Z(o)) return o;
            }
        }
      }
      function Ot(e) {
        switch (e) {
          case "error":
            return O.Error;
          case "warning":
            return O.Warning;
          case "ignore":
            return;
        }
      }
      var jt = 48,
        _t = 57,
        Pt = 65,
        Mt = 97,
        Vt = 102;
      function Nt(e) {
        return e < jt
          ? 0
          : e <= _t
          ? e - jt
          : (e < Mt && (e += Mt - Pt), e >= Mt && e <= Vt ? e - Mt + 10 : 0);
      }
      function Ft(e) {
        if ("#" === e[0])
          switch (e.length) {
            case 4:
              return {
                red: (17 * Nt(e.charCodeAt(1))) / 255,
                green: (17 * Nt(e.charCodeAt(2))) / 255,
                blue: (17 * Nt(e.charCodeAt(3))) / 255,
                alpha: 1,
              };
            case 5:
              return {
                red: (17 * Nt(e.charCodeAt(1))) / 255,
                green: (17 * Nt(e.charCodeAt(2))) / 255,
                blue: (17 * Nt(e.charCodeAt(3))) / 255,
                alpha: (17 * Nt(e.charCodeAt(4))) / 255,
              };
            case 7:
              return {
                red: (16 * Nt(e.charCodeAt(1)) + Nt(e.charCodeAt(2))) / 255,
                green: (16 * Nt(e.charCodeAt(3)) + Nt(e.charCodeAt(4))) / 255,
                blue: (16 * Nt(e.charCodeAt(5)) + Nt(e.charCodeAt(6))) / 255,
                alpha: 1,
              };
            case 9:
              return {
                red: (16 * Nt(e.charCodeAt(1)) + Nt(e.charCodeAt(2))) / 255,
                green: (16 * Nt(e.charCodeAt(3)) + Nt(e.charCodeAt(4))) / 255,
                blue: (16 * Nt(e.charCodeAt(5)) + Nt(e.charCodeAt(6))) / 255,
                alpha: (16 * Nt(e.charCodeAt(7)) + Nt(e.charCodeAt(8))) / 255,
              };
          }
      }
      (function () {
        function e(e) {
          this.schemaService = e;
        }
        (e.prototype.findDocumentSymbols = function (e, t, n) {
          var r = this;
          void 0 === n && (n = { resultLimit: Number.MAX_VALUE });
          var i = t.root;
          if (!i) return [];
          var o = n.resultLimit || Number.MAX_VALUE,
            a = e.uri;
          if (
            ("vscode://defaultsettings/keybindings.json" === a ||
              at(a.toLowerCase(), "/user/keybindings.json")) &&
            "array" === i.type
          ) {
            for (var s = [], u = 0, c = i.items; u < c.length; u++) {
              var l = c[u];
              if ("object" === l.type)
                for (var f = 0, h = l.properties; f < h.length; f++) {
                  var p = h[f];
                  if ("key" === p.keyNode.value && p.valueNode) {
                    var d = C.create(e.uri, Rt(e, l));
                    if (
                      (s.push({
                        name: et(p.valueNode),
                        kind: ye.Function,
                        location: d,
                      }),
                      o--,
                      o <= 0)
                    )
                      return (
                        n &&
                          n.onResultLimitExceeded &&
                          n.onResultLimitExceeded(a),
                        s
                      );
                  }
                }
            }
            return s;
          }
          var m = [{ node: i, containerName: "" }],
            g = 0,
            v = !1,
            y = [],
            b = function (t, n) {
              "array" === t.type
                ? t.items.forEach(function (e) {
                    e && m.push({ node: e, containerName: n });
                  })
                : "object" === t.type &&
                  t.properties.forEach(function (t) {
                    var i = t.valueNode;
                    if (i)
                      if (o > 0) {
                        o--;
                        var a = C.create(e.uri, Rt(e, t)),
                          s = n ? n + "." + t.keyNode.value : t.keyNode.value;
                        y.push({
                          name: r.getKeyLabel(t),
                          kind: r.getSymbolKind(i.type),
                          location: a,
                          containerName: n,
                        }),
                          m.push({ node: i, containerName: s });
                      } else v = !0;
                  });
            };
          while (g < m.length) {
            var x = m[g++];
            b(x.node, x.containerName);
          }
          return (
            v && n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), y
          );
        }),
          (e.prototype.findDocumentSymbols2 = function (e, t, n) {
            var r = this;
            void 0 === n && (n = { resultLimit: Number.MAX_VALUE });
            var i = t.root;
            if (!i) return [];
            var o = n.resultLimit || Number.MAX_VALUE,
              a = e.uri;
            if (
              ("vscode://defaultsettings/keybindings.json" === a ||
                at(a.toLowerCase(), "/user/keybindings.json")) &&
              "array" === i.type
            ) {
              for (var s = [], u = 0, c = i.items; u < c.length; u++) {
                var l = c[u];
                if ("object" === l.type)
                  for (var f = 0, h = l.properties; f < h.length; f++) {
                    var p = h[f];
                    if ("key" === p.keyNode.value && p.valueNode) {
                      var d = Rt(e, l),
                        m = Rt(e, p.keyNode);
                      if (
                        (s.push({
                          name: et(p.valueNode),
                          kind: ye.Function,
                          range: d,
                          selectionRange: m,
                        }),
                        o--,
                        o <= 0)
                      )
                        return (
                          n &&
                            n.onResultLimitExceeded &&
                            n.onResultLimitExceeded(a),
                          s
                        );
                    }
                  }
              }
              return s;
            }
            var g = [],
              v = [{ node: i, result: g }],
              y = 0,
              b = !1,
              x = function (t, n) {
                "array" === t.type
                  ? t.items.forEach(function (t, i) {
                      if (t)
                        if (o > 0) {
                          o--;
                          var a = Rt(e, t),
                            s = a,
                            u = String(i),
                            c = {
                              name: u,
                              kind: r.getSymbolKind(t.type),
                              range: a,
                              selectionRange: s,
                              children: [],
                            };
                          n.push(c), v.push({ result: c.children, node: t });
                        } else b = !0;
                    })
                  : "object" === t.type &&
                    t.properties.forEach(function (t) {
                      var i = t.valueNode;
                      if (i)
                        if (o > 0) {
                          o--;
                          var a = Rt(e, t),
                            s = Rt(e, t.keyNode),
                            u = [],
                            c = {
                              name: r.getKeyLabel(t),
                              kind: r.getSymbolKind(i.type),
                              range: a,
                              selectionRange: s,
                              children: u,
                              detail: r.getDetail(i),
                            };
                          n.push(c), v.push({ result: u, node: i });
                        } else b = !0;
                    });
              };
            while (y < v.length) {
              var C = v[y++];
              x(C.node, C.result);
            }
            return (
              b && n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), g
            );
          }),
          (e.prototype.getSymbolKind = function (e) {
            switch (e) {
              case "object":
                return ye.Module;
              case "string":
                return ye.String;
              case "number":
                return ye.Number;
              case "array":
                return ye.Array;
              case "boolean":
                return ye.Boolean;
              default:
                return ye.Variable;
            }
          }),
          (e.prototype.getKeyLabel = function (e) {
            var t = e.keyNode.value;
            return (
              t && (t = t.replace(/[\n]/g, "↵")),
              t && t.trim() ? t : '"' + t + '"'
            );
          }),
          (e.prototype.getDetail = function (e) {
            if (e)
              return "boolean" === e.type ||
                "number" === e.type ||
                "null" === e.type ||
                "string" === e.type
                ? String(e.value)
                : "array" === e.type
                ? e.children.length
                  ? void 0
                  : "[]"
                : "object" === e.type
                ? e.children.length
                  ? void 0
                  : "{}"
                : void 0;
          }),
          (e.prototype.findDocumentColors = function (e, t, n) {
            return this.schemaService
              .getSchemaForResource(e.uri, t)
              .then(function (r) {
                var i = [];
                if (r)
                  for (
                    var o =
                        n && "number" === typeof n.resultLimit
                          ? n.resultLimit
                          : Number.MAX_VALUE,
                      a = t.getMatchingSchemas(r.schema),
                      s = {},
                      u = 0,
                      c = a;
                    u < c.length;
                    u++
                  ) {
                    var l = c[u];
                    if (
                      !l.inverted &&
                      l.schema &&
                      ("color" === l.schema.format ||
                        "color-hex" === l.schema.format) &&
                      l.node &&
                      "string" === l.node.type
                    ) {
                      var f = String(l.node.offset);
                      if (!s[f]) {
                        var h = Ft(et(l.node));
                        if (h) {
                          var p = Rt(e, l.node);
                          i.push({ color: h, range: p });
                        }
                        if (((s[f] = !0), o--, o <= 0))
                          return (
                            n &&
                              n.onResultLimitExceeded &&
                              n.onResultLimitExceeded(e.uri),
                            i
                          );
                      }
                    }
                  }
                return i;
              });
          }),
          (e.prototype.getColorPresentations = function (e, t, n, r) {
            var i,
              o = [],
              a = Math.round(255 * n.red),
              s = Math.round(255 * n.green),
              u = Math.round(255 * n.blue);
            function c(e) {
              var t = e.toString(16);
              return 2 !== t.length ? "0" + t : t;
            }
            return (
              (i =
                1 === n.alpha
                  ? "#" + c(a) + c(s) + c(u)
                  : "#" + c(a) + c(s) + c(u) + c(Math.round(255 * n.alpha))),
              o.push({ label: i, textEdit: V.replace(r, JSON.stringify(i)) }),
              o
            );
          });
      })();
      function Rt(e, t) {
        return x.create(
          e.positionAt(t.offset),
          e.positionAt(t.offset + t.length)
        );
      }
      var $t = Be(),
        Lt = {
          schemaAssociations: [],
          schemas: {
            "http://json-schema.org/schema#": {
              $ref: "http://json-schema.org/draft-07/schema#",
            },
            "http://json-schema.org/draft-04/schema#": {
              title: $t(
                "schema.json",
                "Describes a JSON file using a schema. See json-schema.org for more info."
              ),
              $schema: "http://json-schema.org/draft-04/schema#",
              definitions: {
                schemaArray: {
                  type: "array",
                  minItems: 1,
                  items: { $ref: "#" },
                },
                positiveInteger: { type: "integer", minimum: 0 },
                positiveIntegerDefault0: {
                  allOf: [
                    { $ref: "#/definitions/positiveInteger" },
                    { default: 0 },
                  ],
                },
                simpleTypes: {
                  type: "string",
                  enum: [
                    "array",
                    "boolean",
                    "integer",
                    "null",
                    "number",
                    "object",
                    "string",
                  ],
                },
                stringArray: {
                  type: "array",
                  items: { type: "string" },
                  minItems: 1,
                  uniqueItems: !0,
                },
              },
              type: "object",
              properties: {
                id: { type: "string", format: "uri" },
                $schema: { type: "string", format: "uri" },
                title: { type: "string" },
                description: { type: "string" },
                default: {},
                multipleOf: {
                  type: "number",
                  minimum: 0,
                  exclusiveMinimum: !0,
                },
                maximum: { type: "number" },
                exclusiveMaximum: { type: "boolean", default: !1 },
                minimum: { type: "number" },
                exclusiveMinimum: { type: "boolean", default: !1 },
                maxLength: {
                  allOf: [{ $ref: "#/definitions/positiveInteger" }],
                },
                minLength: {
                  allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
                },
                pattern: { type: "string", format: "regex" },
                additionalItems: {
                  anyOf: [{ type: "boolean" }, { $ref: "#" }],
                  default: {},
                },
                items: {
                  anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
                  default: {},
                },
                maxItems: {
                  allOf: [{ $ref: "#/definitions/positiveInteger" }],
                },
                minItems: {
                  allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
                },
                uniqueItems: { type: "boolean", default: !1 },
                maxProperties: {
                  allOf: [{ $ref: "#/definitions/positiveInteger" }],
                },
                minProperties: {
                  allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
                },
                required: { allOf: [{ $ref: "#/definitions/stringArray" }] },
                additionalProperties: {
                  anyOf: [{ type: "boolean" }, { $ref: "#" }],
                  default: {},
                },
                definitions: {
                  type: "object",
                  additionalProperties: { $ref: "#" },
                  default: {},
                },
                properties: {
                  type: "object",
                  additionalProperties: { $ref: "#" },
                  default: {},
                },
                patternProperties: {
                  type: "object",
                  additionalProperties: { $ref: "#" },
                  default: {},
                },
                dependencies: {
                  type: "object",
                  additionalProperties: {
                    anyOf: [
                      { $ref: "#" },
                      { $ref: "#/definitions/stringArray" },
                    ],
                  },
                },
                enum: { type: "array", minItems: 1, uniqueItems: !0 },
                type: {
                  anyOf: [
                    { $ref: "#/definitions/simpleTypes" },
                    {
                      type: "array",
                      items: { $ref: "#/definitions/simpleTypes" },
                      minItems: 1,
                      uniqueItems: !0,
                    },
                  ],
                },
                format: {
                  anyOf: [
                    {
                      type: "string",
                      enum: [
                        "date-time",
                        "uri",
                        "email",
                        "hostname",
                        "ipv4",
                        "ipv6",
                        "regex",
                      ],
                    },
                    { type: "string" },
                  ],
                },
                allOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
                anyOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
                oneOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
                not: { allOf: [{ $ref: "#" }] },
              },
              dependencies: {
                exclusiveMaximum: ["maximum"],
                exclusiveMinimum: ["minimum"],
              },
              default: {},
            },
            "http://json-schema.org/draft-07/schema#": {
              title: $t(
                "schema.json",
                "Describes a JSON file using a schema. See json-schema.org for more info."
              ),
              definitions: {
                schemaArray: {
                  type: "array",
                  minItems: 1,
                  items: { $ref: "#" },
                },
                nonNegativeInteger: { type: "integer", minimum: 0 },
                nonNegativeIntegerDefault0: {
                  allOf: [
                    { $ref: "#/definitions/nonNegativeInteger" },
                    { default: 0 },
                  ],
                },
                simpleTypes: {
                  enum: [
                    "array",
                    "boolean",
                    "integer",
                    "null",
                    "number",
                    "object",
                    "string",
                  ],
                },
                stringArray: {
                  type: "array",
                  items: { type: "string" },
                  uniqueItems: !0,
                  default: [],
                },
              },
              type: ["object", "boolean"],
              properties: {
                $id: { type: "string", format: "uri-reference" },
                $schema: { type: "string", format: "uri" },
                $ref: { type: "string", format: "uri-reference" },
                $comment: { type: "string" },
                title: { type: "string" },
                description: { type: "string" },
                default: !0,
                readOnly: { type: "boolean", default: !1 },
                examples: { type: "array", items: !0 },
                multipleOf: { type: "number", exclusiveMinimum: 0 },
                maximum: { type: "number" },
                exclusiveMaximum: { type: "number" },
                minimum: { type: "number" },
                exclusiveMinimum: { type: "number" },
                maxLength: { $ref: "#/definitions/nonNegativeInteger" },
                minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
                pattern: { type: "string", format: "regex" },
                additionalItems: { $ref: "#" },
                items: {
                  anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
                  default: !0,
                },
                maxItems: { $ref: "#/definitions/nonNegativeInteger" },
                minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
                uniqueItems: { type: "boolean", default: !1 },
                contains: { $ref: "#" },
                maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
                minProperties: {
                  $ref: "#/definitions/nonNegativeIntegerDefault0",
                },
                required: { $ref: "#/definitions/stringArray" },
                additionalProperties: { $ref: "#" },
                definitions: {
                  type: "object",
                  additionalProperties: { $ref: "#" },
                  default: {},
                },
                properties: {
                  type: "object",
                  additionalProperties: { $ref: "#" },
                  default: {},
                },
                patternProperties: {
                  type: "object",
                  additionalProperties: { $ref: "#" },
                  propertyNames: { format: "regex" },
                  default: {},
                },
                dependencies: {
                  type: "object",
                  additionalProperties: {
                    anyOf: [
                      { $ref: "#" },
                      { $ref: "#/definitions/stringArray" },
                    ],
                  },
                },
                propertyNames: { $ref: "#" },
                const: !0,
                enum: {
                  type: "array",
                  items: !0,
                  minItems: 1,
                  uniqueItems: !0,
                },
                type: {
                  anyOf: [
                    { $ref: "#/definitions/simpleTypes" },
                    {
                      type: "array",
                      items: { $ref: "#/definitions/simpleTypes" },
                      minItems: 1,
                      uniqueItems: !0,
                    },
                  ],
                },
                format: { type: "string" },
                contentMediaType: { type: "string" },
                contentEncoding: { type: "string" },
                if: { $ref: "#" },
                then: { $ref: "#" },
                else: { $ref: "#" },
                allOf: { $ref: "#/definitions/schemaArray" },
                anyOf: { $ref: "#/definitions/schemaArray" },
                oneOf: { $ref: "#/definitions/schemaArray" },
                not: { $ref: "#" },
              },
              default: !0,
            },
          },
        },
        Dt = {
          id: $t("schema.json.id", "A unique identifier for the schema."),
          $schema: $t(
            "schema.json.$schema",
            "The schema to verify this document against."
          ),
          title: $t("schema.json.title", "A descriptive title of the element."),
          description: $t(
            "schema.json.description",
            "A long description of the element. Used in hover menus and suggestions."
          ),
          default: $t(
            "schema.json.default",
            "A default value. Used by suggestions."
          ),
          multipleOf: $t(
            "schema.json.multipleOf",
            "A number that should cleanly divide the current value (i.e. have no remainder)."
          ),
          maximum: $t(
            "schema.json.maximum",
            "The maximum numerical value, inclusive by default."
          ),
          exclusiveMaximum: $t(
            "schema.json.exclusiveMaximum",
            "Makes the maximum property exclusive."
          ),
          minimum: $t(
            "schema.json.minimum",
            "The minimum numerical value, inclusive by default."
          ),
          exclusiveMinimum: $t(
            "schema.json.exclusiveMininum",
            "Makes the minimum property exclusive."
          ),
          maxLength: $t(
            "schema.json.maxLength",
            "The maximum length of a string."
          ),
          minLength: $t(
            "schema.json.minLength",
            "The minimum length of a string."
          ),
          pattern: $t(
            "schema.json.pattern",
            "A regular expression to match the string against. It is not implicitly anchored."
          ),
          additionalItems: $t(
            "schema.json.additionalItems",
            "For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."
          ),
          items: $t(
            "schema.json.items",
            "For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."
          ),
          maxItems: $t(
            "schema.json.maxItems",
            "The maximum number of items that can be inside an array. Inclusive."
          ),
          minItems: $t(
            "schema.json.minItems",
            "The minimum number of items that can be inside an array. Inclusive."
          ),
          uniqueItems: $t(
            "schema.json.uniqueItems",
            "If all of the items in the array must be unique. Defaults to false."
          ),
          maxProperties: $t(
            "schema.json.maxProperties",
            "The maximum number of properties an object can have. Inclusive."
          ),
          minProperties: $t(
            "schema.json.minProperties",
            "The minimum number of properties an object can have. Inclusive."
          ),
          required: $t(
            "schema.json.required",
            "An array of strings that lists the names of all properties required on this object."
          ),
          additionalProperties: $t(
            "schema.json.additionalProperties",
            "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."
          ),
          definitions: $t(
            "schema.json.definitions",
            "Not used for validation. Place subschemas here that you wish to reference inline with $ref."
          ),
          properties: $t(
            "schema.json.properties",
            "A map of property names to schemas for each property."
          ),
          patternProperties: $t(
            "schema.json.patternProperties",
            "A map of regular expressions on property names to schemas for matching properties."
          ),
          dependencies: $t(
            "schema.json.dependencies",
            "A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."
          ),
          enum: $t(
            "schema.json.enum",
            "The set of literal values that are valid."
          ),
          type: $t(
            "schema.json.type",
            "Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."
          ),
          format: $t(
            "schema.json.format",
            "Describes the format expected for the value."
          ),
          allOf: $t(
            "schema.json.allOf",
            "An array of schemas, all of which must match."
          ),
          anyOf: $t(
            "schema.json.anyOf",
            "An array of schemas, where at least one must match."
          ),
          oneOf: $t(
            "schema.json.oneOf",
            "An array of schemas, exactly one of which must match."
          ),
          not: $t("schema.json.not", "A schema which must not match."),
          $id: $t("schema.json.$id", "A unique identifier for the schema."),
          $ref: $t(
            "schema.json.$ref",
            "Reference a definition hosted on any location."
          ),
          $comment: $t(
            "schema.json.$comment",
            "Comments from schema authors to readers or maintainers of the schema."
          ),
          readOnly: $t(
            "schema.json.readOnly",
            "Indicates that the value of the instance is managed exclusively by the owning authority."
          ),
          examples: $t(
            "schema.json.examples",
            "Sample JSON values associated with a particular schema, for the purpose of illustrating usage."
          ),
          contains: $t(
            "schema.json.contains",
            'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'
          ),
          propertyNames: $t(
            "schema.json.propertyNames",
            "If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."
          ),
          const: $t(
            "schema.json.const",
            "An instance validates successfully against this keyword if its value is equal to the value of the keyword."
          ),
          contentMediaType: $t(
            "schema.json.contentMediaType",
            "Describes the media type of a string property."
          ),
          contentEncoding: $t(
            "schema.json.contentEncoding",
            "Describes the content encoding of a string property."
          ),
          if: $t(
            "schema.json.if",
            'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'
          ),
          then: $t(
            "schema.json.then",
            'The "if" subschema is used for validation when the "if" subschema succeeds.'
          ),
          else: $t(
            "schema.json.else",
            'The "else" subschema is used for validation when the "if" subschema fails.'
          ),
        };
      for (var Ut in Lt.schemas) {
        var Wt = Lt.schemas[Ut];
        for (var qt in Wt.properties) {
          var Bt = Wt.properties[qt];
          "boolean" === typeof Bt && (Bt = Wt.properties[qt] = {});
          var Kt = Dt[qt];
          Kt
            ? (Bt["description"] = Kt)
            : console.log(qt + ": localize('schema.json." + qt + '\', "")');
        }
      }
      var Jt = (function () {
        function e(e, t, n) {
          var r = this;
          (this._languageId = e),
            (this._worker = t),
            (this._disposables = []),
            (this._listener = Object.create(null));
          var o = function (e) {
              var t,
                n = e.getModeId();
              n === r._languageId &&
                ((r._listener[e.uri.toString()] = e.onDidChangeContent(
                  function () {
                    clearTimeout(t),
                      (t = setTimeout(function () {
                        return r._doValidate(e.uri, n);
                      }, 500));
                  }
                )),
                r._doValidate(e.uri, n));
            },
            a = function (e) {
              i.O0.setModelMarkers(e, r._languageId, []);
              var t = e.uri.toString(),
                n = r._listener[t];
              n && (n.dispose(), delete r._listener[t]);
            };
          this._disposables.push(i.O0.onDidCreateModel(o)),
            this._disposables.push(
              i.O0.onWillDisposeModel(function (e) {
                a(e), r._resetSchema(e.uri);
              })
            ),
            this._disposables.push(
              i.O0.onDidChangeModelLanguage(function (e) {
                a(e.model), o(e.model), r._resetSchema(e.model.uri);
              })
            ),
            this._disposables.push(
              n.onDidChange(function (e) {
                i.O0.getModels().forEach(function (e) {
                  e.getModeId() === r._languageId && (a(e), o(e));
                });
              })
            ),
            this._disposables.push({
              dispose: function () {
                for (var e in (i.O0.getModels().forEach(a), r._listener))
                  r._listener[e].dispose();
              },
            }),
            i.O0.getModels().forEach(o);
        }
        return (
          (e.prototype.dispose = function () {
            this._disposables.forEach(function (e) {
              return e && e.dispose();
            }),
              (this._disposables = []);
          }),
          (e.prototype._resetSchema = function (e) {
            this._worker().then(function (t) {
              t.resetSchema(e.toString());
            });
          }),
          (e.prototype._doValidate = function (e, t) {
            this._worker(e)
              .then(function (n) {
                return n.doValidation(e.toString()).then(function (n) {
                  var r = n.map(function (t) {
                      return zt(e, t);
                    }),
                    o = i.O0.getModel(e);
                  o && o.getModeId() === t && i.O0.setModelMarkers(o, t, r);
                });
              })
              .then(void 0, function (e) {
                console.error(e);
              });
          }),
          e
        );
      })();
      function Ht(e) {
        switch (e) {
          case O.Error:
            return i.Wk.Error;
          case O.Warning:
            return i.Wk.Warning;
          case O.Information:
            return i.Wk.Info;
          case O.Hint:
            return i.Wk.Hint;
          default:
            return i.Wk.Info;
        }
      }
      function zt(e, t) {
        var n = "number" === typeof t.code ? String(t.code) : t.code;
        return {
          severity: Ht(t.severity),
          startLineNumber: t.range.start.line + 1,
          startColumn: t.range.start.character + 1,
          endLineNumber: t.range.end.line + 1,
          endColumn: t.range.end.character + 1,
          message: t.message,
          code: n,
          source: t.source,
        };
      }
      function Gt(e) {
        if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
      }
      function Xt(e) {
        if (e)
          return {
            start: {
              line: e.startLineNumber - 1,
              character: e.startColumn - 1,
            },
            end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
          };
      }
      function Zt(e) {
        if (e)
          return new i.EH(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1
          );
      }
      function Qt(e) {
        return (
          "undefined" !== typeof e.insert && "undefined" !== typeof e.replace
        );
      }
      function Yt(e) {
        var t = i.C8.CompletionItemKind;
        switch (e) {
          case oe.Text:
            return t.Text;
          case oe.Method:
            return t.Method;
          case oe.Function:
            return t.Function;
          case oe.Constructor:
            return t.Constructor;
          case oe.Field:
            return t.Field;
          case oe.Variable:
            return t.Variable;
          case oe.Class:
            return t.Class;
          case oe.Interface:
            return t.Interface;
          case oe.Module:
            return t.Module;
          case oe.Property:
            return t.Property;
          case oe.Unit:
            return t.Unit;
          case oe.Value:
            return t.Value;
          case oe.Enum:
            return t.Enum;
          case oe.Keyword:
            return t.Keyword;
          case oe.Snippet:
            return t.Snippet;
          case oe.Color:
            return t.Color;
          case oe.File:
            return t.File;
          case oe.Reference:
            return t.Reference;
        }
        return t.Property;
      }
      function en(e) {
        if (e) return { range: Zt(e.range), text: e.newText };
      }
      var tn = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          Object.defineProperty(e.prototype, "triggerCharacters", {
            get: function () {
              return [" ", ":"];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.provideCompletionItems = function (e, t, n, r) {
            var o = e.uri;
            return this._worker(o)
              .then(function (e) {
                return e.doComplete(o.toString(), Gt(t));
              })
              .then(function (n) {
                if (n) {
                  var r = e.getWordUntilPosition(t),
                    o = new i.EH(
                      t.lineNumber,
                      r.startColumn,
                      t.lineNumber,
                      r.endColumn
                    ),
                    a = n.items.map(function (e) {
                      var t = {
                        label: e.label,
                        insertText: e.insertText || e.label,
                        sortText: e.sortText,
                        filterText: e.filterText,
                        documentation: e.documentation,
                        detail: e.detail,
                        range: o,
                        kind: Yt(e.kind),
                      };
                      return (
                        e.textEdit &&
                          (Qt(e.textEdit)
                            ? (t.range = {
                                insert: Zt(e.textEdit.insert),
                                replace: Zt(e.textEdit.replace),
                              })
                            : (t.range = Zt(e.textEdit.range)),
                          (t.insertText = e.textEdit.newText)),
                        e.additionalTextEdits &&
                          (t.additionalTextEdits =
                            e.additionalTextEdits.map(en)),
                        e.insertTextFormat === ae.Snippet &&
                          (t.insertTextRules =
                            i.C8.CompletionItemInsertTextRule.InsertAsSnippet),
                        t
                      );
                    });
                  return { isIncomplete: n.isIncomplete, suggestions: a };
                }
              });
          }),
          e
        );
      })();
      function nn(e) {
        return e && "object" === typeof e && "string" === typeof e.kind;
      }
      function rn(e) {
        return "string" === typeof e
          ? { value: e }
          : nn(e)
          ? "plaintext" === e.kind
            ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&") }
            : { value: e.value }
          : { value: "```" + e.language + "\n" + e.value + "\n```\n" };
      }
      function on(e) {
        if (e) return Array.isArray(e) ? e.map(rn) : [rn(e)];
      }
      var an = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideHover = function (e, t, n) {
            var r = e.uri;
            return this._worker(r)
              .then(function (e) {
                return e.doHover(r.toString(), Gt(t));
              })
              .then(function (e) {
                if (e) return { range: Zt(e.range), contents: on(e.contents) };
              });
          }),
          e
        );
      })();
      function sn(e) {
        var t = i.C8.SymbolKind;
        switch (e) {
          case ye.File:
            return t.Array;
          case ye.Module:
            return t.Module;
          case ye.Namespace:
            return t.Namespace;
          case ye.Package:
            return t.Package;
          case ye.Class:
            return t.Class;
          case ye.Method:
            return t.Method;
          case ye.Property:
            return t.Property;
          case ye.Field:
            return t.Field;
          case ye.Constructor:
            return t.Constructor;
          case ye.Enum:
            return t.Enum;
          case ye.Interface:
            return t.Interface;
          case ye.Function:
            return t.Function;
          case ye.Variable:
            return t.Variable;
          case ye.Constant:
            return t.Constant;
          case ye.String:
            return t.String;
          case ye.Number:
            return t.Number;
          case ye.Boolean:
            return t.Boolean;
          case ye.Array:
            return t.Array;
        }
        return t.Function;
      }
      var un = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentSymbols = function (e, t) {
            var n = e.uri;
            return this._worker(n)
              .then(function (e) {
                return e.findDocumentSymbols(n.toString());
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    return {
                      name: e.name,
                      detail: "",
                      containerName: e.containerName,
                      kind: sn(e.kind),
                      range: Zt(e.location.range),
                      selectionRange: Zt(e.location.range),
                      tags: [],
                    };
                  });
              });
          }),
          e
        );
      })();
      function cn(e) {
        return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
      }
      var ln = (function () {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideDocumentFormattingEdits = function (e, t, n) {
              var r = e.uri;
              return this._worker(r).then(function (e) {
                return e.format(r.toString(), null, cn(t)).then(function (e) {
                  if (e && 0 !== e.length) return e.map(en);
                });
              });
            }),
            e
          );
        })(),
        fn = (function () {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideDocumentRangeFormattingEdits = function (
              e,
              t,
              n,
              r
            ) {
              var i = e.uri;
              return this._worker(i).then(function (e) {
                return e.format(i.toString(), Xt(t), cn(n)).then(function (e) {
                  if (e && 0 !== e.length) return e.map(en);
                });
              });
            }),
            e
          );
        })(),
        hn = (function () {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideDocumentColors = function (e, t) {
              var n = e.uri;
              return this._worker(n)
                .then(function (e) {
                  return e.findDocumentColors(n.toString());
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      return { color: e.color, range: Zt(e.range) };
                    });
                });
            }),
            (e.prototype.provideColorPresentations = function (e, t, n) {
              var r = e.uri;
              return this._worker(r)
                .then(function (e) {
                  return e.getColorPresentations(
                    r.toString(),
                    t.color,
                    Xt(t.range)
                  );
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      var t = { label: e.label };
                      return (
                        e.textEdit && (t.textEdit = en(e.textEdit)),
                        e.additionalTextEdits &&
                          (t.additionalTextEdits =
                            e.additionalTextEdits.map(en)),
                        t
                      );
                    });
                });
            }),
            e
          );
        })(),
        pn = (function () {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideFoldingRanges = function (e, t, n) {
              var r = e.uri;
              return this._worker(r)
                .then(function (e) {
                  return e.getFoldingRanges(r.toString(), t);
                })
                .then(function (e) {
                  if (e)
                    return e.map(function (e) {
                      var t = { start: e.startLine + 1, end: e.endLine + 1 };
                      return (
                        "undefined" !== typeof e.kind && (t.kind = dn(e.kind)),
                        t
                      );
                    });
                });
            }),
            e
          );
        })();
      function dn(e) {
        switch (e) {
          case I.Comment:
            return i.C8.FoldingRangeKind.Comment;
          case I.Imports:
            return i.C8.FoldingRangeKind.Imports;
          case I.Region:
            return i.C8.FoldingRangeKind.Region;
        }
      }
      var mn = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideSelectionRanges = function (e, t, n) {
            var r = e.uri;
            return this._worker(r)
              .then(function (e) {
                return e.getSelectionRanges(r.toString(), t.map(Gt));
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    var t = [];
                    while (e) t.push({ range: Zt(e.range) }), (e = e.parent);
                    return t;
                  });
              });
          }),
          e
        );
      })();
      function gn(e) {
        return {
          getInitialState: function () {
            return new On(null, null, !1, null);
          },
          tokenize: function (t, n, r, i) {
            return jn(e, t, n, r, i);
          },
        };
      }
      var vn = "delimiter.bracket.json",
        yn = "delimiter.array.json",
        bn = "delimiter.colon.json",
        xn = "delimiter.comma.json",
        Cn = "keyword.json",
        wn = "keyword.json",
        An = "string.value.json",
        kn = "number.json",
        Sn = "string.key.json",
        In = "comment.block.json",
        En = "comment.line.json",
        Tn = (function () {
          function e(e, t) {
            (this.parent = e), (this.type = t);
          }
          return (
            (e.pop = function (e) {
              return e ? e.parent : null;
            }),
            (e.push = function (t, n) {
              return new e(t, n);
            }),
            (e.equals = function (e, t) {
              if (!e && !t) return !0;
              if (!e || !t) return !1;
              while (e && t) {
                if (e === t) return !0;
                if (e.type !== t.type) return !1;
                (e = e.parent), (t = t.parent);
              }
              return !0;
            }),
            e
          );
        })(),
        On = (function () {
          function e(e, t, n, r) {
            (this._state = e),
              (this.scanError = t),
              (this.lastWasColon = n),
              (this.parents = r);
          }
          return (
            (e.prototype.clone = function () {
              return new e(
                this._state,
                this.scanError,
                this.lastWasColon,
                this.parents
              );
            }),
            (e.prototype.equals = function (t) {
              return (
                t === this ||
                (!!(t && t instanceof e) &&
                  this.scanError === t.scanError &&
                  this.lastWasColon === t.lastWasColon &&
                  Tn.equals(this.parents, t.parents))
              );
            }),
            (e.prototype.getStateData = function () {
              return this._state;
            }),
            (e.prototype.setStateData = function (e) {
              this._state = e;
            }),
            e
          );
        })();
      function jn(e, t, n, r, i) {
        void 0 === r && (r = 0);
        var o = 0,
          a = !1;
        switch (n.scanError) {
          case 2:
            (t = '"' + t), (o = 1);
            break;
          case 1:
            (t = "/*" + t), (o = 2);
            break;
        }
        var s = q(t),
          u = n.lastWasColon,
          c = n.parents,
          l = { tokens: [], endState: n.clone() };
        while (1) {
          var f = r + s.getPosition(),
            h = "",
            p = s.scan();
          if (17 === p) break;
          if (f === r + s.getPosition())
            throw new Error(
              "Scanner did not advance, next 3 characters are: " +
                t.substr(s.getPosition(), 3)
            );
          switch ((a && (f -= o), (a = o > 0), p)) {
            case 1:
              (c = Tn.push(c, 0)), (h = vn), (u = !1);
              break;
            case 2:
              (c = Tn.pop(c)), (h = vn), (u = !1);
              break;
            case 3:
              (c = Tn.push(c, 1)), (h = yn), (u = !1);
              break;
            case 4:
              (c = Tn.pop(c)), (h = yn), (u = !1);
              break;
            case 6:
              (h = bn), (u = !0);
              break;
            case 5:
              (h = xn), (u = !1);
              break;
            case 8:
            case 9:
              (h = Cn), (u = !1);
              break;
            case 7:
              (h = wn), (u = !1);
              break;
            case 10:
              var d = c ? c.type : 0,
                m = 1 === d;
              (h = u || m ? An : Sn), (u = !1);
              break;
            case 11:
              (h = kn), (u = !1);
              break;
          }
          if (e)
            switch (p) {
              case 12:
                h = En;
                break;
              case 13:
                h = In;
                break;
            }
          (l.endState = new On(n.getStateData(), s.getTokenError(), u, c)),
            l.tokens.push({ startIndex: f, scopes: h });
        }
        return l;
      }
      function _n(e) {
        var t = [],
          n = [],
          r = new a(e);
        t.push(r);
        var o = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return r.getLanguageServiceWorker.apply(r, e);
        };
        function s() {
          var t = e.languageId,
            r = e.modeConfiguration;
          Mn(n),
            r.documentFormattingEdits &&
              n.push(i.C8.registerDocumentFormattingEditProvider(t, new ln(o))),
            r.documentRangeFormattingEdits &&
              n.push(
                i.C8.registerDocumentRangeFormattingEditProvider(t, new fn(o))
              ),
            r.completionItems &&
              n.push(i.C8.registerCompletionItemProvider(t, new tn(o))),
            r.hovers && n.push(i.C8.registerHoverProvider(t, new an(o))),
            r.documentSymbols &&
              n.push(i.C8.registerDocumentSymbolProvider(t, new un(o))),
            r.tokens && n.push(i.C8.setTokensProvider(t, gn(!0))),
            r.colors && n.push(i.C8.registerColorProvider(t, new hn(o))),
            r.foldingRanges &&
              n.push(i.C8.registerFoldingRangeProvider(t, new pn(o))),
            r.diagnostics && n.push(new Jt(t, o, e)),
            r.selectionRanges &&
              n.push(i.C8.registerSelectionRangeProvider(t, new mn(o)));
        }
        s(), t.push(i.C8.setLanguageConfiguration(e.languageId, Vn));
        var u = e.modeConfiguration;
        return (
          e.onDidChange(function (e) {
            e.modeConfiguration !== u && ((u = e.modeConfiguration), s());
          }),
          t.push(Pn(n)),
          Pn(t)
        );
      }
      function Pn(e) {
        return {
          dispose: function () {
            return Mn(e);
          },
        };
      }
      function Mn(e) {
        while (e.length) e.pop().dispose();
      }
      var Vn = {
        wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
        comments: { lineComment: "//", blockComment: ["/*", "*/"] },
        brackets: [
          ["{", "}"],
          ["[", "]"],
        ],
        autoClosingPairs: [
          { open: "{", close: "}", notIn: ["string"] },
          { open: "[", close: "]", notIn: ["string"] },
          { open: '"', close: '"', notIn: ["string"] },
        ],
      };
    },
  },
]);
