import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//
import css from "../styles/scoreboard.module.scss";
import "../styles/button.module.scss";
import Score from "../types/Score";

const Scoreboard = () => {
  const [scoreboard, setScoreBoard] = React.useState<Score>({
    winners: [
      {
        name: "",
        wins: 0,
      },
    ],
    steps: [],
  });

  useEffect(() => {
    const winnerFromLocalStorage = localStorage.getItem("winner") || "";
    const [winner, winnerNum] = winnerFromLocalStorage.split("_");

    const steps = JSON.parse(localStorage.getItem("stepCounter") || "");
    const tempWinner = {
      name: winner,
      steps: steps[winnerNum],
    };

    setScoreBoard((scoreboard) => ({
      ...scoreboard,

      steps: [...scoreboard.steps, tempWinner],
    }));
  }, []);

  useEffect(() => {
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
  }, [scoreboard]);

  const clearStorage = () => {
    localStorage.setItem("winner", "");
    localStorage.setItem("activePlayer", "");
    localStorage.setItem("stepCounter", "");
    localStorage.setItem("isGameStarted", "");
    localStorage.setItem("gameData", "");
  };

  return (
    <main className={css["score-page"]}>
      <h1 className={css["title"]}>Scoreboard</h1>
      <table className={css["scoreboard"]}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of steps</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.steps.map((step) => (
            <tr>
              <td>{step.name}</td>
              <td>{step.steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={css["button-container"]}>
        <Link to="/start">
          <button type="button" onClick={clearStorage}>
            New game
          </button>{" "}
        </Link>
      </div>
    </main>
  );
};

export default Scoreboard;
