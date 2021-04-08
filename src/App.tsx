import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import Game from "./pages/Game";
import StartScreen from "./pages/StartScreen";
//
import GameData from "./types/GameData";
import Scoreboard from "./pages/Scoreboard";

function App() {
  const [gameData, setGameData] = React.useState<GameData>({
    players: {
      1: "",
      2: "",
    },
    gameSize: 0,
  });
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/scoreboard">
          <Scoreboard />
        </Route>

        <Route path="/game">
          <Game
            gameData={gameData}
            setGameData={setGameData}
            isGameStarted={isGameStarted}
            setIsGameStarted={setIsGameStarted}
          />
        </Route>

        <Route path="/">
          <StartScreen
            gameData={gameData}
            setGameData={setGameData}
            isGameStarted={isGameStarted}
            setIsGameStarted={setIsGameStarted}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
