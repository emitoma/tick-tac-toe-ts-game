import React, { FC } from "react";
//
import classNames from "classnames";
import css from "../styles/square.module.scss";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  squareValue: string;
  className: string;
}

const Square: FC<Props> = ({ className, handleClick, squareValue }) => {
  return (
    <div className={classNames(className, css["square"])} onClick={handleClick}>
      {squareValue}
    </div>
  );
};

export default Square;
