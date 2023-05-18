import {FC, useCallback, useState} from "react";
import styles from './styles.module.scss'
import InputModal from "../input-modal";
import {INewContact} from "../../api/types";

const initialContactData: INewContact = {
    name: '',
    surname: '',
    lastName: '',
    contacts: []
}

const ModalContentAdd: FC = () => {
    const [contactData, setContactData] = useState(initialContactData)

    const onChangeSurname = useCallback((e) => setContactData({
            ...contactData, surname: e.target.value
        }),
        [contactData])

    const onChangeName = useCallback((e) => setContactData({
            ...contactData, name: e.target.value
        }),
        [contactData])

    const onChangeLastName = useCallback((e) => setContactData({
            ...contactData, lastName: e.target.value
        }),
        [contactData])

    return (
        <form className={styles.row}>
            <h3 className={styles.modalTitle}>
                Новый клиент
            </h3>

            <InputModal
                value={contactData.surname}
                onChange={onChangeSurname}
                placeholder={'Фамилия'}
                type="text"
                required
                className={styles.input}
            />

            <InputModal
                value={contactData.name}
                onChange={onChangeName}
                placeholder={'Имя'}
                type="text"
                required
                className={styles.input}
            />

            <InputModal
                value={contactData.lastName}
                onChange={onChangeLastName}
                placeholder={'Отчество'}
                type="text"
                className={styles.input}
            />

            <p className="">// TODO: contacts</p>

            <p className="">// TODO: buttons</p>
        </form>
    )
}

export default ModalContentAdd