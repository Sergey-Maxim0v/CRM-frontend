import {FC} from "react";
import styles from './styles.module.scss'

const ModalContentAdd: FC = () => {

    return (
        <div className={styles.row}>
            <div className={styles.modalHead}>
                <h3 className={styles.modalTitle}>
                    Новый клиент
                </h3>
            </div>

            <p className="">// TODO: inputs</p>

            <p className="">// TODO: contacts</p>

            <p className="">// TODO: buttons</p>
        </div>
    )
}

export default ModalContentAdd