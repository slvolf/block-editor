(() => {
  window.addEventListener(
    "message",
    (e) => {
      "_vue-devtools-send-message" === e.data.key &&
        chrome.runtime.sendMessage(e.data.message);
    },
    !1
  );
  const e = document.createElement("script");
  (e.src = chrome.runtime.getURL("build/detector-exec.js")),
    (e.onload = () => {
      e.remove();
    }),
    (document.head || document.documentElement).appendChild(e);
})();
