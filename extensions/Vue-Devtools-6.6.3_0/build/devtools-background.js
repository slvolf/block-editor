(() => {
  let e = !1,
    n = 0;
  chrome.devtools.network.onNavigated.addListener(t);
  const o = setInterval(t, 1e3);
  function t() {
    e || n++ > 10
      ? clearInterval(o)
      : chrome.devtools.inspectedWindow.eval(
          "!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && (window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue || window.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.length))",
          (n) => {
            n &&
              !e &&
              (clearInterval(o),
              (e = !0),
              chrome.devtools.panels.create(
                "Vue",
                "icons/128.png",
                "devtools.html",
                (e) => {
                  e.onShown.addListener(d), e.onHidden.addListener(_);
                }
              ));
          }
        );
  }
  function d() {
    chrome.runtime.sendMessage("vue-panel-shown");
  }
  function _() {
    chrome.runtime.sendMessage("vue-panel-hidden");
  }
  t();
})();
