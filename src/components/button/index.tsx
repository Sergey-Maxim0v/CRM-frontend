import { FC, PropsWithChildren } from "react";
import { IButton } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Button: FC<PropsWithChildren<IButton>> = ({
  type,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={classNames(className, styles.button, styles[type])}
    >
      {children}
    </button>
  );
};

export default Button;
