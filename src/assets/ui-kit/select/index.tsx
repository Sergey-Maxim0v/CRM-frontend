import { FC, useEffect, useRef, useState } from "react";
import { ISelect } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../../enums/svg-types";

const Select: FC<ISelect> = ({ value, onChange, options, className }) => {
  const selectedOption = options.find(
    (option) => option.value === value?.value
  );
  const initialIndexSelected = selectedOption
    ? options.indexOf(selectedOption)
    : 0;

  const [isOpen, setIsOpen] = useState(false);
  const [indexSelected, setIndexSelected] =
    useState<number>(initialIndexSelected);

  // eslint-disable-next-line
  // @ts-ignore
  const containerRef = useRef<HTMLDivElement>(null); // Argument type null is not assignable to parameter type HTMLDivElement

  const incrementIndexState = () => {
    setIndexSelected((prev) => {
      if (prev === options.length - 1) {
        return prev;
      }
      return ++prev;
    });
  };

  const subtractIndexState = () => {
    setIndexSelected((prev) => {
      if (prev === 0) {
        return 0;
      }
      return --prev;
    });
  };

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
          if (isOpen) {
            setIsOpen(false);
            setIndexSelected(initialIndexSelected);
          }
          break;

        case "Enter":
          if (!isOpen) {
            setIsOpen(true);
          } else {
            onChange(options[indexSelected]);
            setIsOpen(false);
          }
          break;

        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
          } else {
            incrementIndexState();
          }
          break;

        case "ArrowUp":
          if (isOpen) {
            subtractIndexState();
          }
          break;
      }
    };

    current?.addEventListener("keyup", handler);

    return () => {
      current?.removeEventListener("keyup", handler);
    };

    // eslint-disable-next-line
  }, [isOpen, options, incrementIndexState]);

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
              [styles.selected]: options.indexOf(option) === indexSelected,
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
