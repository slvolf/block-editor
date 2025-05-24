# 遇到的一些提示
> 路由要用哈希模式，因为electron原因

> npm run electron:serve 运行项目
> npm run electron:build 打包项目

# 解决的一些问题
> 下js包时 要两步 第一步下原包（打包时需要）
>> npm install package-name

> 第二步下js转ts提供的类型检查（调试用，打包不需要）
>> npm install --save-dev @types/package-name

>>> 根据这个添加了包 sanitize-html, marked, katex

# 改掉的一些模板内容
> src\background.ts
>> console.error("Vue Devtools failed to install:", e.toString()); 改为 console.error("Vue Devtools failed to install:", (e as Error).toString());

> node_modules\ts-loader模块
>> 从 9.5.2 降到 8.2.x 执行了 npm i -D ts-loader@~8.2.0

> 改为本地加载 Vue Devtools
>> app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", (e as Error).toString());
    }
  }
  createWindow();
});
>
> 注释掉 改为
>> import { session } from "electron"; import path from "path";
>>
>>app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // 加载本地扩展
    try {
      // 替换为本地 Vue Devtools 的路径
      const devtoolsPath = path.join(
        __dirname,
        "../extensions/Vue-Devtools-6.6.3_0"
      );
      // 加载本地扩展
      await session.defaultSession.loadExtension(devtoolsPath, {
        allowFileAccess: true,
      });
      console.log("Vue Devtools 本地加载成功");
    } catch (e) {
      // 类型断言确保类型安全
      const error = e as Error;
      console.error("Vue Devtools 本地加载失败:", error.message);
      // 备选方案：尝试在线安装
      try {
        // 动态导入electron-devtools-installer
        const name: string = await installExtension(VUEJS3_DEVTOOLS);
        console.log(`Vue Devtools 在线安装成功: ${name}`);
      } catch (onlineError) {
        const error = onlineError as Error;
        console.error("Vue Devtools 在线安装失败:", error.message);
      }
    }
  }
  createWindow();
});

> App.vue
>> 为了消除控制台警告
>>
>>> runtime-core.esm-bundler.js?d2dd:4610 Feature flag __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle. For more details, see https://link.vuejs.org/feature-flags.
>>
>> 将 block-editor按照docs-tips里的内容修改，最干净的能运行的压缩包.zip 解压
>> 将 main.ts 改为
>>>import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
>>>
>>>declare global {
  interface Window {
    __VUE_PROD_DEVTOOLS__?: boolean;
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__?: boolean;
  }
}
>>>
>>>// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
>>>
>>>createApp(App).use(store).use(router).mount("#app");
