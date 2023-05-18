import {FC, useCallback, useState} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const Modal: FC = ({children, closeModal}) => {
    const [isClose, setIsClose] = useState(false)

    const onClose = useCallback(() => {
        setIsClose(true)

        setTimeout(() => {
            closeModal();
        }, 200)
    }, [closeModal])

    return (
        <>
            <div
                className={classNames(styles.modalOverlay, {[styles.close]: isClose})}
                onClick={() => onClose()}
            >
            </div>

            <div
                className={classNames(styles.modal, {[styles.close]: isClose})}
            >
                <button
                    onClick={() => onClose()}
                    className={styles.modalCloseBtn}
                >
                    <ComponentsSVG type={SVG_TYPES.close} className={styles.icon}/>
                </button>

                {children}
            </div>
        </>
    )
}

export default Modal