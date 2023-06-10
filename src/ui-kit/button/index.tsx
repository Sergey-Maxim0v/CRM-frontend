import { FC, PropsWithChildren } from "react";
import { IButton } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Loader from "../loader";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const Button: FC<PropsWithChildren<IButton>> = ({
  type,
  className,
  onClick,
  children,
  loader,
  icon,
}) => {
  console.log(type);
  return (
    <button
      onClick={(event) => onClick?.(event)}
      className={classNames(className, styles.button, styles[type])}
    >
      {icon && (
        <ComponentsSVG type={SVG_TYPES.addClient} className={styles.icon} />
      )}

      {loader && <Loader className={styles.icon} />}

      {children}
    </button>
  );
};

export default Button;
