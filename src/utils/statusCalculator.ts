import GameStatus from "../types/GameStatus";
import { playerConfig } from "../playerConfig";

export const generateMatrix = (size: number, numToWin: number = 3) => {
  const winnerMatrix = [];
  for (let i = 0; i < size; i++) {
    const winnerCases = [];
    const numberOfCases = size - numToWin;

    for (let j = 0; j <= numberOfCases; j++) {
      const winnerCase = [];
      for (let k = j; k < numToWin + j; k++) {
        winnerCase.push(k);
      }
      winnerCases.push(winnerCase);
    }
    winnerMatrix.push(winnerCases);
  }

  return winnerMatrix;
};

export const calculateStatus = (
  winnerMatrix: number[][][],
  board: string[][]
) => {
  //draw, x wins, O wins, continue
  let status: GameStatus = GameStatus.DRAW;

  for (let i = 0; i < winnerMatrix.length; i++) {
    const winnerCases = winnerMatrix[i];

    for (let j = 0; j < winnerCases.length; j++) {
      const currentCase = winnerCases[j];

      let player = null;
      let canContinue = true;
      let canWin = true;

      for (let k = 0; k < currentCase.length; k++) {
        const currentBoardChar = board[i][k + j];

        if (currentBoardChar === "") {
          canWin = false;
          continue;
        }

        if (!player) {
          player = currentBoardChar;
        }

        canContinue = currentBoardChar === player;

        if (canWin && !canContinue) {
          canWin = false;
        }
      }

      if (canWin) {
        return player === playerConfig[1]
          ? GameStatus.X_WINS
          : GameStatus.O_WINS;
      }

      if (canContinue) {
        status = GameStatus.CONTINUE;
      }
    }
  }

  return status;
};
