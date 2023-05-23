import { FC } from "react";
import ComponentsSVG from "../../../components-svg";
import SVG_TYPES from "../../../../enums/svg-types";
import classNames from "classnames";
import { ARROW_ENUM, IHeadCell } from "../../types";
import styles from "./styles.module.scss";

const HeadCellName: FC<IHeadCell> = ({ sorted, arrow }) => {
  return (
    <p className={styles.cell}>
      <span className={styles.text}>Фамилия Имя Отчество</span>
      <ComponentsSVG
        type={SVG_TYPES.arrowUp}
        className={classNames(
          styles.icon,
          { [styles.sorted]: sorted },
          { [styles.arrowUp]: arrow === ARROW_ENUM.up }
        )}
      />
      <span
        className={classNames(styles.description, {
          [styles.sorted]: sorted,
        })}
      >
        {arrow === ARROW_ENUM.up ? "Я-А" : "А-Я"}
      </span>
    </p>
  );
};

export default HeadCellName;
