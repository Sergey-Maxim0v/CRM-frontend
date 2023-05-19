import { FC, PropsWithChildren, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";
import { IModal } from "./types";

const Modal: FC<PropsWithChildren<IModal>> = ({ children, closeModal }) => {
  const [isClose, setIsClose] = useState(false);

  const onClose = () => {
    setIsClose(true);

    setTimeout(() => {
      closeModal();
    }, 200);
  };

  return (
    <>
      <div
        className={classNames(styles.modalOverlay, { [styles.close]: isClose })}
        onClick={() => onClose()}
      ></div>

      <div className={classNames(styles.modal, { [styles.close]: isClose })}>
        <button onClick={() => onClose()} className={styles.modalCloseBtn}>
          <ComponentsSVG type={SVG_TYPES.close} className={styles.icon} />
        </button>

        {children}
      </div>
    </>
  );
};

export default Modal;
