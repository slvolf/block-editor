import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

declare global {
  interface Window {
    __VUE_PROD_DEVTOOLS__?: boolean;
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__?: boolean;
  }
}

// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

createApp(App).use(store).use(router).mount("#app");
