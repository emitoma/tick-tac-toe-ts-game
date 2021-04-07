import React, {FC, useState} from "react";
import Board from "../components/Board";
import GameData from "../types/GameData";
import {Redirect} from "react-router-dom";

interface Props {
    gameData: GameData,
    setGameData: React.Dispatch<React.SetStateAction<GameData>>;
    isGameStarted: boolean
}

const Game: FC<Props> = ({gameData, setGameData, isGameStarted}) => {
    console.log("board", gameData)

    if (!isGameStarted) {
        return <Redirect to="/"/>
    }

    return (<>
            <Board gameSize={gameData.gameSize}/>
        </>
    )
}

export default Game;