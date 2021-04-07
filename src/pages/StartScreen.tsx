import React, {FC, useState} from "react";
import {Redirect} from "react-router-dom";
import SizeSelector from "../components/SizeSelector";
import GameData from "../types/GameData";

interface Props {
    gameData: GameData,
    setGameData: React.Dispatch<React.SetStateAction<GameData>>;
    isGameStarted: boolean,
    setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>
}

const StartScreen: FC<Props> = ({gameData, setGameData, isGameStarted, setIsGameStarted}
) => {

    const [errorMessage, setErrorMessage] = useState("");

    const possibleGameSize = Object.freeze({
        3: "3x3",
        4: "4x4",
        5: "5x5",
        6: "6x6",
        7: '7x7',
        8: '8x8',
        9: '9x9'
    })


    const handleSizeSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const valueAsNumber = Number(e.target.value)
        setGameData(prevState => ({
                ...prevState,
                gameSize: valueAsNumber,
            })
        );
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const {name, value} = event.currentTarget;


        setGameData({
            ...gameData,
            players: {
                ...gameData.players,
                [name]: value,
            }
        })
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setErrorMessage("")



        if (gameData.players.player1.length === 0 || gameData.players.player2.length === 0) {
            setErrorMessage("Can't leave player name blank!");
            return;
        } else if (gameData.gameSize === 0) {
            setErrorMessage("Choose a game size!");
            return;
        } else {
            setErrorMessage("")
            setIsGameStarted(true);
            localStorage.setItem("gameData", JSON.stringify(gameData));
            localStorage.setItem("isGameStarted", "true")
        }
    }

    if (isGameStarted) {
        return <Redirect to="/game"/>
    }

    return <>
        {errorMessage && <h3>{errorMessage}</h3>}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Player 1</label>
                <input type="text" name="player1" id="name" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="name2">Player 2</label>
                <input type="text" name="player2" id="name2" onChange={handleChange}/>
            </div>
            <SizeSelector sizes={possibleGameSize} name="size" changeHandler={handleSizeSelect}/>
            <button type="submit">Start Game!</button>
        </form>
    </>
}
export default StartScreen;