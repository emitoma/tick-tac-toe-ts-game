import {FC} from "react";
//
import Square from "./Square";
//
import css from '../styles/board.module.scss'


interface Props {
    gameSize: number;
}

const Board: FC<Props> = ({gameSize}) => {
    const boardArray = [];

    for (let i = 0; i < gameSize; i++) {
        const innerArray = []
        for (let i = 0; i < gameSize; i++) {
            innerArray.push("");
        }
        boardArray.push(innerArray)
    }
    return <div className={css["board"]}>
        {boardArray.map(item => {
            return <div className={css['row']}>{item.map(innerItem => <Square/>)}</div>
        })}
    </div>
}
export default Board;
