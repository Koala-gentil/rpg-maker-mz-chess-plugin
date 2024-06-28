import "./jquery";
import "@chrisoakman/chessboardjs/dist/chessboard-1.0.0";
import { Chess } from "chess.js";
import { loadCss, createDialog } from "./utils";

(() => {
  const pluginName = "Chess";

  PluginManager.registerCommand(pluginName, "StartChessGame", (args) => {
    const variableId = Number(args.variableId);

    const game = new Chess();
    console.log("game", game);
    const { dialog, removeDialog } = createDialog();

    function checkGameOver() {
      if (!game.isGameOver()) return;
      const result = game.isDraw() ? 0 : game.turn() === "b" ? 1 : -1;
      $gameVariables.setValue(variableId, result);
      removeDialog();
      board.destroy();
    }

    function onDragStart(source, piece, position, orientation) {
      // do not pick up pieces if the game is over
      if (game.isGameOver()) return false;

      // only pick up pieces for White
      if (piece.search(/^b/) !== -1) return false;
    }

    function makeRandomMove() {
      var possibleMoves = game.moves();
      if (possibleMoves.length === 0) return;

      var randomIdx = Math.floor(Math.random() * possibleMoves.length);
      game.move(possibleMoves[randomIdx]);
      board.position(game.fen());
      checkGameOver();
    }

    function onDrop(source, target) {
      // see if the move is legal
      var move = game.move({
        from: source,
        to: target,
        promotion: "q", // NOTE: always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) return "snapback";

      checkGameOver();

      // make random legal move for black
      window.setTimeout(makeRandomMove, 250);
    }

    function onSnapEnd() {
      board.position(game.fen());
      checkGameOver();
    }

    const board = Chessboard(dialog, {
      draggable: true,
      position: "start",
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd,
    });
  });

  loadCss();
})();
