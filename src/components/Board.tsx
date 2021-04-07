import React, { FC, useEffect } from "react";
//
import Square from "./Square";
//
import css from "../styles/board.module.scss";
import { playerConfig } from "../playerConfig";

interface Props {
  gameSize: number;
  activePlayer: number;
  switchPlayer: () => void;
}

const Board: FC<Props> = ({ gameSize, activePlayer, switchPlayer }) => {
  const [boardArray, setBoarArray] = React.useState<string[][]>([]);

  useEffect(() => {
    const tempArray: string[][] = [];
    for (let i = 0; i < gameSize; i++) {
      const innerArray: string[] = [];
      for (let j = 0; j < gameSize; j++) {
        innerArray.push("");
      }
      tempArray.push(innerArray);
    }
    setBoarArray(tempArray);
  }, []);

  const setSquare = (rowIndex: number, colIndex: number): void => {
    console.log(activePlayer);

    setBoarArray((board) => {
      const boardCopy = board.map((row) => [...row]);

      boardCopy[rowIndex][colIndex] = playerConfig[activePlayer];

      return boardCopy;
    });
  };

  return (
    <div className={css["board"]}>
      {boardArray.map((row, rowIndex) => {
        return (
          <div className={css["column"]}>
            {row.map((col, colIndex) => {
              return (
                <Square
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
