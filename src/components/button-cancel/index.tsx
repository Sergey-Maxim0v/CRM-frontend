import { FC, PropsWithChildren } from "react";
import { IButtonCancel } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const ButtonCancel: FC<PropsWithChildren<IButtonCancel>> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonCancel;
