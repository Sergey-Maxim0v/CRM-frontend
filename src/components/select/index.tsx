import { FC } from "react";
import { ISelect } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Select: FC<ISelect> = ({
  value,
  type,
  onChangeValue,
  onChangeType,
  onDelete,
  className,
}) => {
  return <div className={classNames(className, styles.select)}>select</div>;
};

export default Select;
