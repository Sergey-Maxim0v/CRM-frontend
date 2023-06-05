import styles from "./styles.module.scss";
import { forwardRef } from "react";
import classNames from "classnames";
import { IInputModal } from "./types";

const InputModal = forwardRef<HTMLInputElement, IInputModal>(
  ({ isError, ...props }, ref) => {
    return (
      <label
        className={classNames(props.className, styles.label, {
          [styles.error]: isError,
        })}
      >
        <input
          ref={ref}
          {...props}
          className={styles.input}
          type={props.type ?? "text"}
        />

        <span className={styles.placeholder}>{props.placeholder}</span>
      </label>
    );
  }
);

export default InputModal;
