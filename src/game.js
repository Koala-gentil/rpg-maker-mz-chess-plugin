import { Chessboard2 } from "@chrisoakman/chessboard2/dist/chessboard2.min.mjs";
import { Chess } from "chess.js";

/**
 * Start the game.
 * @param {'w' | 'b'} color
 * @param {HTMLElement} element
 */
export function startGame(color, element) {
  return new Promise((resolve) => {
    const game = new Chess();
    const boardConfig = {
      draggable: true,
      onDragStart,
      onTouchSquare,
      onDrop,
      onSnapEnd,
      position: game.fen(),
      touchMove: true,
      orientation: color === "w" ? "white" : "black",
    };

    const board = Chessboard2(element, boardConfig);

    checkGameOver();

    let pendingMove = null;
    function onTouchSquare(square, piece, boardInfo) {
      const legalMoves = game.moves({ square, verbose: true });
      // Option 1: start a pending move
      if (!pendingMove && legalMoves.length > 0) {
        pendingMove = square;
        // add circles showing where the legal moves are for this piece
        legalMoves.forEach((move) => {
          board.addCircle(move.to);
        });
        // Option 2: clear a pending move if the user selects the same square twice
      } else if (pendingMove && pendingMove === square) {
        pendingMove = null;
        board.clearCircles();
        // Option 3: clear a pending move and start a new pending move
      } else if (pendingMove) {
        // ask chess.js to make a move
        const moveResult = tryMove({
          from: pendingMove,
          to: square,
          promotion: "q", // always promote to a Queen for example simplicity
        });
        // was this a legal move?
        if (moveResult) {
          board.clearCircles();
          board.position(game.fen()).then(() => {
            updatePGN();
            checkGameOver();
            // wait a smidge, then make a random move for Black
            window.setTimeout(makeRandomMove, 250);
          });
          // if the move was not legal, then start a new pendingMove from this square
        } else if (piece) {
          pendingMove = square;
          board.clearCircles();
          legalMoves.forEach((m) => {
            board.addCircle(m.to);
          });
        } else {
          pendingMove = null;
          board.clearCircles();
        }
      }
    }

    function checkGameOver() {
      if (!game.isGameOver()) return;
      if (game.isDraw()) resolve(0);
      if (game.turn() === color) resolve(-1);
      resolve(1);
    }

    function onDragStart(dragStartEvt) {
      // do not pick up pieces if the game is over
      if (game.isGameOver()) return false;

      // only pick up pieces for White
      if (!isWhitePiece(dragStartEvt.piece)) return false;

      // what moves are available to White from this square?
      const legalMoves = game.moves({
        square: dragStartEvt.square,
        verbose: true,
      });

      // do nothing if there are no legal moves
      if (legalMoves.length === 0) return false;

      // place Circles on the possible target squares
      legalMoves.forEach((move) => {
        board.addCircle(move.to);
      });
    }

    function isWhitePiece(piece) {
      return /^w/.test(piece);
    }

    function makeRandomMove() {
      const possibleMoves = game.moves();

      // game over
      if (possibleMoves.length === 0) return;

      const randomIdx = Math.floor(Math.random() * possibleMoves.length);
      game.move(possibleMoves[randomIdx]);
      board.position(game.fen(), (_positionInfo) => {
        checkGameOver();
      });
    }

    function tryMove(move) {
      try {
        return game.move(move);
      } catch (error) {
        return null;
      }
    }

    function onDrop(dropEvt) {
      const move = tryMove({
        from: dropEvt.source,
        to: dropEvt.target,
        promotion: "q", // NOTE: always promote to a queen for example simplicity
      });

      // remove all Circles from the board
      board.clearCircles();

      // the move was legal
      if (move) {
        // reset the pending move
        pendingMove = null;

        // update the board position
        board.fen(game.fen(), () => {
          checkGameOver();

          // make a random legal move for black
          window.setTimeout(makeRandomMove, 250);
        });
      } else {
        // reset the pending move
        pendingMove = null;

        // return the piece to the source square if the move was illegal
        return "snapback";
      }
    }

    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    function onSnapEnd() {
      board.position(game.fen());
    }
  });
}
