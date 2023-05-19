import { IHeaderInput } from "./types";
import { ChangeEvent, FC, useContext } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Context } from "../../context/context";

const HeaderInput: FC<IHeaderInput> = ({ className }) => {
  const { setFilter } = useContext(Context);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <label className={classNames(className, styles.label)}>
      <input
        type="text"
        className={classNames(styles.input)}
        onChange={(event) => onChange(event)}
        placeholder="Введите запрос"
      />
    </label>
  );
};

export default HeaderInput;
