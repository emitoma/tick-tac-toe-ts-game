import { useEffect, useState } from "react";
//
import css from "../styles/scoreboard.module.scss";

const Scoreboard = () => {
  /* const [scoreboard, setScoreboard] = useState({
    name: {
      numberOfWins: 1,
    },
  });

  useEffect(() => {
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
  }, [scoreboard]);

  if ()*/
  const winnerFromLocalStorage = localStorage.getItem("winner") || "";

  return (
    <>
      <h1 className={css["title"]}>Scoreboard</h1>
      <table className={css["scoreboard"]}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/*<td>{scoreboard.name}</td>*/}
            {/*<td>{scoreboard.name.numberOfWins}</td>*/}
            <td>{winnerFromLocalStorage}</td>
            <td>1</td>
          </tr>
          <tr>
            {/*<td>{scoreboard.name}</td>*/}
            {/*<td>{scoreboard.name.numberOfWins}</td>*/}
            <td>{winnerFromLocalStorage}</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Scoreboard;
