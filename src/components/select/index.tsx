import { FC, useState } from "react";
import { ISelect } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const Select: FC<ISelect> = ({ value, onChange, options, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        styles.selectContainer,
        { [styles.open]: isOpen },
        className
      )}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0} // for onBlur
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.selectText}>
        {value ? value.label : "Выберете"}
      </span>

      <ComponentsSVG type={SVG_TYPES.down} className={styles.selectIcon} />

      <ul className={styles.selectOptions}>
        {options.map((option) => (
          <li
            key={option.value}
            className={classNames(styles.selectOption, {
              [styles.selected]: option.value === value?.value,
            })}
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
