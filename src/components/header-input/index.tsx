import { IHeaderInput } from "./types";
import { FC } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const HeaderInput: FC<IHeaderInput> = ({ className, value, onChange }) => {
  return (
    <label className={classNames(className, styles.label)}>
      <input
        type="text"
        className={classNames(styles.input)}
        onChange={(event) => onChange(event)}
        placeholder="Введите запрос"
        value={value}
      />
    </label>
  );
};

export default HeaderInput;
