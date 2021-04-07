import React, { FC, useEffect, useState } from "react";
import Board from "../components/Board";
import GameData from "../types/GameData";
import Player from "../types/Player";
import { Redirect } from "react-router-dom";
import { playerConfig } from "../playerConfig";

interface Props {
  gameData: GameData;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
  isGameStarted: boolean;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Game: FC<Props> = ({
  gameData,
  setGameData,
  isGameStarted,
  setIsGameStarted,
}) => {
  const [activePlayer, setActivePlayer] = React.useState<number>();

  const playerPicker = () => {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber % 2 === 0) {
      setActivePlayer(1);
    } else {
      setActivePlayer(2);
    }
  };
  useEffect(() => {
    playerPicker();
  }, []);

  useEffect(() => {
    localStorage.setItem("activePlayer", JSON.stringify(activePlayer));
  }, [activePlayer]);

  useEffect(() => {
    const gameStarted = localStorage.getItem("isGameStarted");
    gameStarted === "true" ? setIsGameStarted(true) : setIsGameStarted(false);

    const game = JSON.parse(localStorage.getItem("gameData") || "");

    if (game !== null || game !== "") {
      setGameData(game);
    }
  }, []);

  if (!isGameStarted) {
    return <Redirect to="/" />;
  }

  if (!activePlayer) {
    return <h3>Loading...</h3>;
  }

  const activePlayerName = gameData.players[activePlayer];
  const activePlayerMark = playerConfig[activePlayer];

  return (
    <>
      <div>
        <h2>You move first: {activePlayerName}</h2>
        <p>Your mark is: {activePlayerMark}</p>
      </div>
      <Board
        gameSize={gameData.gameSize}
        activePlayer={activePlayer}
        switchPlayer={() => {
          if (activePlayer === 1) {
            setActivePlayer(2);
          } else {
            setActivePlayer(1);
          }
        }}
      />
    </>
  );
};

export default Game;
