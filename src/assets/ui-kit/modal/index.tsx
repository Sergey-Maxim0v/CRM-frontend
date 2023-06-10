import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../../enums/svg-types";
import { IModal } from "./types";

const Modal: FC<PropsWithChildren<IModal>> = ({ children, closeModal }) => {
  const [isClose, setIsClose] = useState(false);

  // eslint-disable-next-line
  // @ts-ignore
  const containerRef = useRef<HTMLDivElement>(null);

  const onClose = useCallback(() => {
    setIsClose(true);

    setTimeout(() => {
      closeModal();
    }, 200);
  }, [closeModal]);

  useEffect(() => {
    const current = containerRef.current;

    const handler = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    current?.addEventListener("keyup", handler);

    return () => current?.removeEventListener("keyup", handler);
  }, [onClose]);

  return (
    <>
      <div
        className={classNames(styles.modalOverlay, { [styles.close]: isClose })}
        onClick={() => onClose()}
      ></div>

      <div
        ref={containerRef}
        className={classNames(styles.modal, { [styles.close]: isClose })}
      >
        <button onClick={() => onClose()} className={styles.modalCloseBtn}>
          <ComponentsSVG type={SVG_TYPES.close} className={styles.icon} />
        </button>

        {children}
      </div>
    </>
  );
};

export default Modal;
