import React, {FC, useEffect, useState} from "react";
import Board from "../components/Board";
import GameData from "../types/GameData";
import Player from "../types/Player";
import {Redirect} from "react-router-dom";

interface Props {
    gameData: GameData,
    isGameStarted: boolean
    setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>
}

const Game: FC<Props> = ({gameData, isGameStarted, setIsGameStarted}) => {

    const [starterPlayer, setStarterPlayer] = React.useState<Player | null>(null);
    const [otherPlayer, setOtherPlayer] = React.useState<Player | null>(null);

    const playerPicker = () => {
        setStarterPlayer(null);
        setOtherPlayer(null);

        const randomNumber = Math.floor(Math.random() * 10);
        console.log("randomNumber", randomNumber);

        if (randomNumber % 2 === 0) {
            setStarterPlayer({
                name: gameData.players.player1,
                mark: "X",
            });
            setOtherPlayer({
                name: gameData.players.player2,
                mark: "O"
            })
        } else {
            setStarterPlayer({
                name: gameData.players.player2,
                mark: "X",
            });
            setOtherPlayer({
                name: gameData.players.player1,
                mark: "O"
            })
        }

    }
    useEffect(() => playerPicker(), []);

    useEffect(() => {
        const gameStarted = localStorage.getItem("isGameStarted");
        gameStarted === "true" ? setIsGameStarted(true) : setIsGameStarted(false);
        // const game = JSON.parse(localStorage.getItem("gameData"));
        // console.log(game, "from local storage")
    }, [])

    if (!isGameStarted) {
        return <Redirect to="/"/>
    }

    return (<>
            {starterPlayer && <div>
                <h2>You move first: {starterPlayer.name}</h2>
                <p>Your mark is: {starterPlayer.mark}</p>
            </div>}
            <Board gameSize={gameData.gameSize} starterPlayer={starterPlayer} otherPlayer={otherPlayer}/>
        </>
    )
}

export default Game;