import React, { FC, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
//
import Board from "../components/Board";
//
import GameData from "../types/GameData";
import { playerConfig } from "../playerConfig";
import { generateMatrix } from "../utils/statusCalculator";
import { pickPlayer } from "../utils/pickPlayer";
//
import "../styles/button.module.scss";

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
  const [activePlayer, setActivePlayer] = React.useState<number>(pickPlayer);
  const winningMatrix = React.useMemo(() => {
    return generateMatrix(gameData.gameSize);
  }, []);
  const [winner, setWinner] = React.useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

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

  const saveWinner = () => {
    localStorage.setItem("winner", gameData.players[activePlayer]);
  };
  useEffect(() => saveWinner(), [winner]);

  if (!isGameStarted) {
    return <Redirect to="/" />;
  }

  if (!activePlayer || !winningMatrix) {
    return <h3>Loading...</h3>;
  }

  const activePlayerName = gameData.players[activePlayer];
  const activePlayerMark = playerConfig[activePlayer];

  return (
    <>
      {isGameOver ? (
        <div>
          {!!winner ? (
            <h1>
              Winner is: {gameData.players[winner]}({playerConfig[activePlayer]}
              )
            </h1>
          ) : (
            <h1>It's a draw!</h1>
          )}

          <Link to="/scoreboard">
            <button type="button">Go to scoreboard</button>
          </Link>
        </div>
      ) : (
        <>
          <div>
            <h2>You move next: {activePlayerName}</h2>
            <p>Your mark is: {activePlayerMark}</p>
          </div>
          <Board
            gameData={gameData}
            activePlayer={activePlayer}
            switchPlayer={() => {
              if (activePlayer === 1) {
                setActivePlayer(2);
              } else {
                setActivePlayer(1);
              }
            }}
            winningMatrix={winningMatrix}
            setWinner={setWinner}
            setIsGameOver={setIsGameOver}
          />
        </>
      )}
    </>
  );
};

export default Game;
