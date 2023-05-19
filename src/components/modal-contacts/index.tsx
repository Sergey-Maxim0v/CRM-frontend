import { FC, MouseEvent } from "react";
import { IModalContacts } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { IContact } from "../../api/types";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";
import SelectContact from "../select-contact";

const initialContact: IContact = {
  type: "",
  value: "",
};

const ModalContacts: FC<IModalContacts> = ({
  clientData,
  setClientData,
  className,
}) => {
  const addNewContact = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setClientData({
      ...clientData,
      contacts: clientData.contacts
        ? clientData.contacts.concat(initialContact)
        : [initialContact],
    });
  };

  return (
    <div className={classNames(styles.row, className)}>
      {clientData.contacts?.map((contact, index) => (
        <SelectContact
          key={index}
          contact={contact}
          setClientData={setClientData}
        />
      ))}

      <button className={styles.button} onClick={addNewContact}>
        <ComponentsSVG type={SVG_TYPES.add} className={styles.buttonIcon} />
        <span className={styles.buttonText}>Добавить контакт</span>
      </button>
    </div>
  );
};

export default ModalContacts;
