interface GameData {
  players: { [playerNumber: number]: string };
  gameSize: number;
  winnerNum: number;
}

export default GameData;
