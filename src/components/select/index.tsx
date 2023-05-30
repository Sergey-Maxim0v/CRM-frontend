import { FC } from "react";
import { ISelect } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const Select: FC<ISelect> = ({ value, onChange, options, className }) => {
  return (
    <div className={classNames(styles.selectContainer, className)}>
      <span className={styles.selectText}>value</span>

      <ComponentsSVG type={SVG_TYPES.down} className={styles.selectIcon} />

      <ul className={styles.selectOptions}>
        {options.map((option) => (
          <li
            key={option.value}
            className={styles.selectOption}
            onClick={() => onChange(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
