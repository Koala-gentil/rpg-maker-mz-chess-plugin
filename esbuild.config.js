const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  outfile: "dist/Chess.js",
  banner: {
    js: `/*:
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
 */`,
  },
});
