import React, { FC } from "react";
//
import css from "../styles/select.module.scss";
//
import classNames from "classnames";

interface Props {
  labelText: string;
  name: string;
  changeHandler: React.ChangeEventHandler<HTMLSelectElement>;
  sizes: {
    [key: number]: string;
  };
  className: string;
}

const SizeSelector: FC<Props> = ({
  labelText,
  name,
  sizes,
  changeHandler,
  className,
}) => {
  return (
    <div className={classNames(className, css["select"])}>
      <label htmlFor={name} className={css["select-label"]}>
        {labelText}
      </label>
      <select
        className={css["select-select"]}
        name={name}
        id={name}
        onChange={changeHandler}
      >
        <option value="">Choose!</option>
        {Object.entries(sizes).map(([key, value]) => {
          return (
            <option key={key} value={key}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SizeSelector;
