export const generateMatrix = (array:string[], numToWin:number =3) => {
    const arrayLength = array.length;

    const winnerMatrix = [];
    for (let i = 0; i < arrayLength; i++) {
        const winnerCases = [];
        const numberOfCases = arrayLength - numToWin;

        for (let j = 0; j <= numberOfCases; j++) {
            const winnerCase = [];
            for (let k = j; k < numToWin + j; k++) {
                winnerCase.push(k);
            }
            winnerCases.push(winnerCase);
        }
        winnerMatrix.push(winnerCases);
    }

    return winnerMatrix;
};


export const calculateStatus = (winnerMatrix:string[][], board:string[][]) => {
    //draw, x wins, O wins, continue
    let status = 'draw';

    for (let i = 0; i < winnerMatrix.length; i++) {
        const winnerCases = winnerMatrix[i];

        for (let j = 0; j < winnerCases.length; j++) {
            const currentCase = winnerCases[j];

            let player = null;
            let canContinue = true;
            let canWin = true;

            for (let k = 0; k < currentCase.length; k++) {
                const currentBoardChar = board[i][k + j];

                if (currentBoardChar === '') {
                    canWin = false;
                    continue;
                }

                if (!player) {
                    player = currentBoardChar;
                }

                canContinue = currentBoardChar === player;

                if (canWin && !canContinue) {
                    canWin = false;
                }
            }

            if (canWin) {
                status = player as string;
                return status;
            }

            if (canContinue) {
                status = 'continue';
            }
        }
    }

    return status;
};


