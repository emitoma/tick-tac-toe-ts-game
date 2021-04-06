import React, {FC, useEffect} from "react";
//
import Square from "./Square";
//
import css from '../styles/board.module.scss'


interface Props {
    gameSize: number;
}

const Board: FC<Props> = ({gameSize}) => {
    console.log("board", gameSize)
    const [boardArray, setBoarArray] = React.useState<string[][]>([]);

    useEffect(() => {
            const tempArray: string[][] = [];
            for (let i = 0; i < gameSize; i++) {
                const innerArray: string[] = []
                for (let j = 0; j < gameSize; j++) {
                    innerArray.push("");
                }
                tempArray.push(innerArray)
            }
            setBoarArray(tempArray);
        }, []
    )


    return <div className={css["board"]}>
        {boardArray.map((item, index) => {

            return <div className={css['column']}>

                {item.map((innerItem, innerIndex) =>
                    <Square id={String(index) + String(innerIndex)}/>
                )}
            </div>
        })}
    </div>
}
export default Board;
