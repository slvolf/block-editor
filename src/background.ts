"use strict";

import {
  app,
  protocol,
  BrowserWindow,
  Menu,
  MenuItem,
  ipcMain,
} from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Required for Spectron testing
      enableRemoteModule: !!process.env.IS_TEST,

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env
        .ELECTRON_NODE_INTEGRATION as unknown as boolean,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  // 在窗口加载完成后修改菜单
  win.webContents.on("did-finish-load", () => {
    modifyMenu(win);
  });
}

function modifyMenu(win: BrowserWindow) {
  // 获取当前应用菜单
  const menu = Menu.getApplicationMenu();

  if (menu) {
    // 查找 "File" 菜单
    const fileMenu = menu.items.find((item) =>
      item.label.toLowerCase().includes("file")
    );

    if (fileMenu && fileMenu.submenu) {
      // 在 "File" 菜单中添加分隔符和新菜单项
      fileMenu.submenu.append(new MenuItem({ type: "separator" }));

      fileMenu.submenu.append(
        new MenuItem({
          label: "Save File",
          accelerator: "CmdOrCtrl+S",
          click: () => {
            win.webContents.send("save-file");
          },
        })
      );

      fileMenu.submenu.append(
        new MenuItem({
          label: "Open File",
          accelerator: "CmdOrCtrl+O",
          click: () => {
            win.webContents.send("open-file");
          },
        })
      );

      // 设置修改后的菜单
      Menu.setApplicationMenu(menu);
    }
  }
}

// 监听保存文件和打开文件的事件
ipcMain.on("save-file", (event) => {
  event.sender.send("save-file-triggered");
});

ipcMain.on("open-file", (event) => {
  event.sender.send("open-file-triggered");
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on("ready", async () => {
//   if (isDevelopment && !process.env.IS_TEST) {
//     // Install Vue Devtools
//     try {
//       await installExtension(VUEJS3_DEVTOOLS);
//     } catch (e) {
//       console.error("Vue Devtools failed to install:", (e as Error).toString());
//     }
//   }
//   createWindow();
// });
import { session } from "electron";
import path from "path";

app.on("ready", async () => {
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

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
