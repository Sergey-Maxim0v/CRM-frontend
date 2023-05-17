import {useCallback, useContext, useState} from "react";
import {Context} from "../../context/context";
import styles from './styles.module.scss'
import classNames from "classnames";

const Modal = () => {
    const {modalType, setModalType} = useContext(Context)
    const [isClose, setIsClose] = useState(false)

    const closeModal = useCallback(() => {
        setIsClose(true)

        setTimeout(() => {
            setModalType(false);
        }, 200)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div
                className={classNames(styles.modalOverlay, {[styles.close]: isClose})}
                onClick={() => closeModal()}
            >
            </div>

            <div
                className={classNames(styles.modal, {[styles.close]: isClose})}
            >
                {modalType}
            </div>
        </>
    )
}

export default Modal