import {FC, useCallback, MouseEvent} from "react";
import {IModalContacts} from "./types";
import styles from './styles.module.scss'
import classNames from "classnames";
import {IContact} from "../../api/types";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const initialContact: IContact = {
    type: '',
    value: ''
}

const ModalContacts: FC<IModalContacts> = ({clientData, setClientData, className}) => {

    const addNewContact = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setClientData({
            ...clientData,
            contacts: clientData.contacts ? clientData.contacts.concat(initialContact) : [initialContact]
        })
        // eslint-disable-next-line
    }, [clientData])

    return (
        <div className={classNames(styles.row, className)}>
            {clientData.contacts?.map((contact, index) =>
                <div key={index}>// TODO: select contact {contact.type}</div>
            )}

            <button
                className={styles.button}
                onClick={addNewContact}
            >
                <ComponentsSVG type={SVG_TYPES.add} className={styles.buttonIcon}/>
                <span className={styles.buttonText}>Добавить контакт</span>
            </button>
        </div>
    )
}

export default ModalContacts