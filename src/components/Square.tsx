import React, { FC } from "react";
//
import css from "../styles/square.module.scss";
import classNames from "classnames";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  squareValue: string;
  className: string;
}

const Square: FC<Props> = ({ handleClick, squareValue, className }) => {
  return (
    <div className={classNames(css["square"], className)} onClick={handleClick}>
      {squareValue}
    </div>
  );
};

export default Square;
