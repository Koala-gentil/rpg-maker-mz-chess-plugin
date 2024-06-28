/*:
 * @target MZ
 * @plugindesc Chess game
 * @author Koala-Gentil
 *
 * @command StartChessGame
 * @text Start Chess Game
 * @desc Display a dialog to play a chess game.
 *
 * @arg variableId
 * @type variable
 * @text ID de la variable
 * @desc ID de la variable où le résultat de la partie sera stocké (-1 si perdu, 0 si nul, 1 si gagné).
 */

import "@chrisoakman/chessboardjs/dist/chessboard-1.0.0";

(() => {
  const pluginName = "Chess";

  PluginManager.registerCommand(pluginName, "StartChessGame", (args) => {
    const variableId = Number(args.variableId);

    const dialog = document.createElement("div");
    dialog.id = "dialog";

    const board = Chessboard("dialog", {
      draggable: true,
      position: "start",
    });

    window["board"] = board;
  });
})();
