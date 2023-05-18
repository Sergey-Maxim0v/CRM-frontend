import {FC} from "react";
import {IModalContacts} from "./types";
import styles from './styles.module.scss'
import classNames from "classnames";
import {IContact} from "../../api/types";

const initialContact: IContact = {
    type: '',
    value: ''
}

const ModalContacts: FC<IModalContacts> = ({clientData, setClientData, className}) => {

    return (
        <div className={classNames(styles.row, className)}>
            {clientData.contacts?.map((contact, index) =>
                <div key={index}>// TODO: select contact {contact.type}</div>
            )}

            // TODO: add button
        </div>
    )
}

export default ModalContacts