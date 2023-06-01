import { FC, PropsWithChildren } from "react";
import { IButton } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Loader from "../loader";

const Button: FC<PropsWithChildren<IButton>> = ({
  type,
  className,
  onClick,
  children,
  loader,
}) => {
  return (
    <button
      onClick={(event) => onClick?.(event)}
      className={classNames(className, styles.button, styles[type])}
    >
      {loader && <Loader className={styles.loader} />}
      {children}
    </button>
  );
};

export default Button;
