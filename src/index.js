import { loadCss, createDialog, createChessboardContainer } from "./utils";
import { startGame } from "./game";

(() => {
  const pluginName = "Chess";

  PluginManager.registerCommand(pluginName, "StartChessGame", (args) => {
    const variableId = Number(args.variableId);
    const { dialog, removeDialog } = createDialog();
    const chessboardContainer = createChessboardContainer(dialog);
    startGame("w", chessboardContainer).then((result) => {
      console.log(result);
      $gameVariables.setValue(variableId, result);
    });
  });

  loadCss();
})();
