import { FC } from "react";
import styles from "./styles.module.scss";
import ComponentsSVG from "../../../components-svg";
import SVG_TYPES from "../../../../enums/svg-types";
import classNames from "classnames";
import { ARROW_ENUM, IHeadCell } from "../../types";
import getHeadCellText from "../../utils/getHeadCellText";

const HeadCell: FC<IHeadCell> = ({ sorted, type, arrow }) => {
  return (
    <p className={classNames(styles.cell, { [styles.sort]: sorted })}>
      <span className={styles.text}>{getHeadCellText(type)}</span>
      <ComponentsSVG
        type={SVG_TYPES.arrowUp}
        className={classNames(
          styles.icon,
          { [styles.visible]: arrow },
          { [styles.arrowUp]: arrow === ARROW_ENUM.up }
        )}
      />
    </p>
  );
};

export default HeadCell;
