import {FC, useState} from "react";
import styles from './styles.module.scss'
import InputModal from "../input-modal";

const ModalContentAdd: FC = () => {
    const [contactData, setContactData] = useState()

    return (
        <form className={styles.row}>
                <h3 className={styles.modalTitle}>
                    Новый клиент
                </h3>

            <InputModal placeholder={'Фамилия'} type="text" required className={styles.input}/>

            <p className="">// TODO: contacts</p>

            <p className="">// TODO: buttons</p>
        </form>
    )
}

export default ModalContentAdd