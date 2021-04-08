import React, { FC, useEffect } from "react";
//
import Square from "./Square";
//
import css from "../styles/board.module.scss";
import { playerConfig } from "../playerConfig";
import { calculateStatus } from "../utils/statusCalculator";
import GameStatus from "../types/GameStatus";
import generateBoard from "../utils/generateBoard";
import GameData from "../types/GameData";

interface Props {
  gameData: GameData;
  activePlayer: number;
  switchPlayer: () => void;
  winningMatrix: number[][][];
  setWinner: React.Dispatch<React.SetStateAction<number | null>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const Board: FC<Props> = ({
  gameData,
  activePlayer,
  switchPlayer,
  winningMatrix,
  setWinner,
  setIsGameOver,
}) => {
  const [boardArray, setBoarArray] = React.useState<string[][]>(() =>
    generateBoard(gameData.gameSize)
  );
  const [stepCounter, setStepCounter] = React.useState<{
    [key: number]: number;
  }>({
    1: 0,
    2: 0,
  });

  const setSquare = (rowIndex: number, colIndex: number): void => {
    console.log(activePlayer);

    setBoarArray((board) => {
      const boardCopy = board.map((row) => [...row]);
      const currentSquare = boardCopy[rowIndex][colIndex];

      if (currentSquare !== "") {
        return boardCopy;
      } else {
        boardCopy[rowIndex][colIndex] = playerConfig[activePlayer];
      }

      return boardCopy;
    });
    setStepCounter((stepCounter) => ({
      ...stepCounter,
      [activePlayer]: stepCounter[activePlayer]++,
    }));
  };

  useEffect(() => {
    localStorage.setItem("stepCounter", JSON.stringify(stepCounter));
  }, [stepCounter]);

  useEffect(() => {
    console.log(winningMatrix, boardArray);
    const status = calculateStatus(winningMatrix, boardArray);
    if (
      [GameStatus.DRAW, GameStatus.X_WINS, GameStatus.O_WINS].includes(status)
    ) {
      if (GameStatus.X_WINS || GameStatus.O_WINS) {
        setWinner(activePlayer);
        setIsGameOver(true);
        return;
      }
      if (GameStatus.DRAW) {
        setIsGameOver(true);
        return;
      }
    } else {
      console.log(status);
      switchPlayer();
    }
    // eslint-disable-next-line
  }, [boardArray]);

  return (
    <div className={css["board"]}>
      {boardArray.map((row, rowIndex) => {
        return (
          <div key={`${rowIndex}_${row}`} className={css["row"]}>
            {row.map((col, colIndex) => {
              return (
                <Square
                  className={css[`squareNum-${gameData.gameSize}`]}
                  key={`${colIndex}_${col}`}
                  handleClick={() => {
                    setSquare(rowIndex, colIndex);
                  }}
                  squareValue={col}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Board;
