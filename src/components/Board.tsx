import React, {FC, useEffect, useState} from "react";
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
    const [stepCounter, setStepCounter] = useState(0);

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

    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        const activeElementId = (e.target as Element).id
        const splitId = activeElementId.split("");

        getSquare(splitId);
        setStepCounter(prevState => prevState += 1);

        if (stepCounter % 2 === 0) {
            setActivePlayer(starterPlayer);
        } else {
            setActivePlayer(otherPlayer)
        }
    }

    const getSquare = (squareId: string[]): void => {
        // @ts-ignore
        boardArray[squareId[0]][squareId[1]] = activePlayer.mark;

    }


    return <div className={css["board"]}>
        {boardArray.map((item, index) => {

            return <div className={css['column']}>

                {item.map((innerItem, innerIndex) => {
                        const id = String(index) + String(innerIndex);
                        return <Square key={id} id={id} activePlayer={activePlayer} handleClick={handleClick}
                                       squareValue={innerItem}/>
                    }
                )}
            </div>
        })}
    </div>
}
export default Board;
