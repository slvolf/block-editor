export let ipcRenderer: typeof import("electron")["ipcRenderer"] | undefined;

try {
  const w = window as unknown as { require?: (module: string) => unknown };
  ipcRenderer = w.require
    ? (
        w.require("electron") as {
          ipcRenderer: typeof import("electron")["ipcRenderer"];
        }
      ).ipcRenderer
    : undefined;
} catch {
  ipcRenderer = undefined;
}
