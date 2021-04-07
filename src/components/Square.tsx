import React, {FC} from "react";
//
import css from "../styles/square.module.scss"
import GameData from "../types/GameData";
import Player from "../types/Player";

interface Props {
    id: string;
    activePlayer: Player | null;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
    squareValue: string
}

const Square: FC<Props> = ({id, activePlayer, handleClick,squareValue}) => {



    return <div id={id} className={css["square"]} onClick={handleClick}>{squareValue}</div>
}
export default Square;