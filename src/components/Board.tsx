import React, {FC, useEffect} from "react";
//
import Square from "./Square";
//
import css from '../styles/board.module.scss'
import Player from "../types/Player";


interface Props {
    gameSize: number;
    starterPlayer: Player | null,
    otherPlayer: Player | null,
}

const Board: FC<Props> = ({gameSize, starterPlayer, otherPlayer}) => {
    const [boardArray, setBoarArray] = React.useState<string[][]>([]);

    const [activePlayer, setActivePlayer] = React.useState<Player | null>(starterPlayer);




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

                {item.map((innerItem, innerIndex) => {
                        const id = String(index) + String(innerIndex);
                        return <Square key={id} id={id}/>
                    }
                )}
            </div>
        })}
    </div>
}
export default Board;
