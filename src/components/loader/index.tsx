import { FC } from "react";
import { ILoader } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const Loader: FC<ILoader> = ({ className }) => {
  return (
    <div className={classNames(className, styles.loader)}>
      <ComponentsSVG type={SVG_TYPES.loader} className={styles.icon} />
    </div>
  );
};

export default Loader;
