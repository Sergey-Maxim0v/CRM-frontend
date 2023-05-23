import { FC } from "react";
import styles from "./styles.module.scss";
import ComponentsSVG from "../../../components-svg";
import SVG_TYPES from "../../../../enums/svg-types";
import classNames from "classnames";
import { ARROW_ENUM, IHeadCell } from "../../types";

const HeadCellId: FC<IHeadCell> = ({ sorted, arrow }) => {
  return (
    <p className={styles.cell}>
      <span className={styles.text}>ID</span>
      <ComponentsSVG
        type={SVG_TYPES.arrowUp}
        className={classNames(
          styles.icon,
          { [styles.filtered]: sorted },
          { [styles.arrowUp]: arrow === ARROW_ENUM.up }
        )}
      />
    </p>
  );
};

export default HeadCellId;
