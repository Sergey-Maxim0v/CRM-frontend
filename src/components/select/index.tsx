import { FC } from "react";
import { ISelect } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Select: FC<ISelect> = ({ value, onChange, options, className }) => {
  return <div className={classNames(styles.selectContainer, className)}></div>;
};

export default Select;
