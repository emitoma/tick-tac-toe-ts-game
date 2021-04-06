import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//
import Game from "./pages/Game";
import StartScreen from "./pages/StartScreen";
//
import './App.scss';
import GameData from "./types/GameData";

function App() {
    const [gameData, setGameData] = React.useState<GameData>({
        players: {
            player1: "",
            player2: "",
        },
        gameSize: 0,
    });

    return (
        <Router>
            <Switch>
                <Route path="/game">
                    <Game gameData={gameData} setGameData={setGameData}/>
                </Route>
                <Route path='/'>
                    <StartScreen gameData={gameData} setGameData={setGameData}/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
