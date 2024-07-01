export function loadCss() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "/css/chessboard2.css";
  document.head.appendChild(link);
}

export function createDialog() {
  const dialog = document.createElement("div");
  dialog.style.position = "fixed";
  dialog.style.top = "0";
  dialog.style.left = "0";
  dialog.style.width = "100%";
  dialog.style.height = "100%";
  dialog.style.display = "flex";
  dialog.style.justifyContent = "center";
  dialog.style.alignItems = "center";
  dialog.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  dialog.style.zIndex = "10";
  document.body.appendChild(dialog);
  return {
    dialog,
    removeDialog: () => document.body.removeChild(dialog),
  };
}

export function createChessboardContainer(dialog) {
  const container = document.createElement("div");
  container.style.width = "calc(100% - 30px)";
  container.style.height = "calc(100% - 30px)";
  container.style.maxWidth = "calc(100vh - 30px)";
  container.style.maxHeight = "calc(100vh - 30px)";
  container.style.backgroundColor = "white";
  dialog.appendChild(container);
  return container;
}

export function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
