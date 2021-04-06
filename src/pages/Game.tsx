import React, {FC, useState} from "react";
import Board from "../components/Board";
import GameData from "../types/GameData";

interface Props {
    gameData: GameData,
    setGameData: React.Dispatch<React.SetStateAction<GameData>>;
}

const Game: FC<Props> = ({gameData, setGameData}) => {
    console.log("board", gameData)

    return (<>
            <Board gameSize={gameData.gameSize}/>
        </>
    )
}

export default Game;