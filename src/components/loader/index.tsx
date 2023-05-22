import { FC } from "react";
import { ILoader } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Loader: FC<ILoader> = ({ className }) => {
  return (
    <div className={classNames(className, styles.loader)}>// TODO: loader</div>
  );
};

export default Loader;
