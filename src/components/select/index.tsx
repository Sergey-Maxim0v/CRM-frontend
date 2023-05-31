import { FC, useEffect, useRef, useState } from "react";
import { ISelect } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const Select: FC<ISelect> = ({ value, onChange, options, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line
  // @ts-ignore
  const containerRef = useRef<HTMLDivElement>(null); // Argument type null is not assignable to parameter type HTMLDivElement

  useEffect(() => {
    const current = containerRef.current;

    const handler = (event: KeyboardEvent) => {
      if (event.target !== containerRef.current) {
        return;
      }

      if (isOpen) {
        event.stopPropagation();
      }

      switch (event.code) {
        case "Space":
          setIsOpen((prev) => !prev);
          break;

        case "Escape":
          setIsOpen(false);
          break;

        case "Enter":
          if (!isOpen) {
            setIsOpen(true);
          }
          break;

        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
          } else {
            // TODO: focus option
          }
          break;

        case "ArrowUp":
          if (isOpen) {
            // TODO: focus option
          }
          break;
      }
    };

    current?.addEventListener("keyup", handler);

    return () => current?.removeEventListener("keyup", handler);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
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
