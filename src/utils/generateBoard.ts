const generateBoard = (gameSize: number) => {
  const tempArray: string[][] = [];
  for (let i = 0; i < gameSize; i++) {
    const innerArray: string[] = [];
    for (let j = 0; j < gameSize; j++) {
      innerArray.push("");
    }
    tempArray.push(innerArray);
  }
  return tempArray;
};

export default generateBoard;
