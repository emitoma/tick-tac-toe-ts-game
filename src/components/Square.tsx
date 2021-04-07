import React, { FC } from "react";
//
import css from "../styles/square.module.scss";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  squareValue: string;
}

const Square: FC<Props> = ({ handleClick, squareValue }) => {
  return (
    <div className={css["square"]} onClick={handleClick}>
      {squareValue}
    </div>
  );
};

export default Square;
