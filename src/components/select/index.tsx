import { FC, useEffect, useState } from "react";
import { ISelect } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";
import { CONTACT_TYPES } from "../../api/types";
import { CONTACT_TYPE_NAMES } from "./constants";

const Select: FC<ISelect> = ({
  value,
  type,
  onChangeValue,
  onChangeType,
  onDelete,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOption: ISelect["onChangeType"] = (contactType) => {
    onChangeType(contactType);
    setIsOpen(false);
  };

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      event.preventDefault();
      setIsOpen(false);
    };

    document.addEventListener("click", listener);

    return document.removeEventListener("click", listener);
  });

  // TODO: закрытие options при клике снаружи

  return (
    <div className={classNames(className, styles.select)}>
      <div className={styles.body}>
        <div
          className={styles.button}
          onClick={() => setIsOpen((pref) => !pref)}
        >
          <span className={styles.buttonText}>{CONTACT_TYPE_NAMES[type]}</span>

          <ComponentsSVG
            type={SVG_TYPES.down}
            className={classNames(styles.buttonIcon, {
              [styles.openIcon]: isOpen,
            })}
          />
        </div>

        <div
          className={classNames(styles.options, {
            [styles.openOptions]: isOpen,
          })}
        >
          {Object.keys(CONTACT_TYPES).map((contactType) => (
            <div
              key={contactType}
              className={styles.option}
              onClick={() => onClickOption(CONTACT_TYPES[contactType])}
            >
              {CONTACT_TYPE_NAMES[contactType]}
            </div>
          ))}
        </div>

        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(event) => onChangeValue(event.target.value)}
          placeholder="Введите данные контакта"
        />

        <div onClick={() => onDelete()} className={styles.deleteButton}>
          <ComponentsSVG
            type={SVG_TYPES.delete}
            className={styles.deleteButtonIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Select;
