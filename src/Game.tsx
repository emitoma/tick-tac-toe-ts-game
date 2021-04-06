import React, {useState} from "react";
import SelectSize from "./components/common/SelectSize";
import Board from "./components/Board";

const Game = () => {
    const [gameSize, setGameSize] = useState(0);

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
        console.log(typeof e.target.value)
        const valueAsNumber = Number(e.target.value)
        setGameSize(valueAsNumber);
    }
    return (<>
            <SelectSize sizes={possibleGameSize} name="size" changeHandler={handleSizeSelect}/>
            <Board gameSize={gameSize}/>
        </>
    )
}

export default Game;