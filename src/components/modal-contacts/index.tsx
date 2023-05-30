import { FC, MouseEvent } from "react";
import { IModalContacts } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { CONTACT_TYPES, IContact } from "../../api/types";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";
import SelectContact from "../select-contact";

const initialContact: IContact = {
  type: CONTACT_TYPES.tel,
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
        ? clientData.contacts.concat({ ...initialContact })
        : [initialContact],
    });
  };

  const setContact = (index: number, updatedContact: IContact) => {
    setClientData((pref) => {
      const contacts = pref.contacts ?? [];
      const resultContacts = [];

      for (let i = 0; i < contacts.length; i++) {
        if (i === index) {
          resultContacts.push(updatedContact);
        } else {
          resultContacts.push(contacts[i]);
        }
      }

      return {
        ...pref,
        contacts: resultContacts,
      };
    });
  };

  const onDeleteContact = (contact: IContact) => {
    setClientData((pref) => {
      const contacts = pref.contacts ?? [];
      const filteredContacts = contacts.filter(
        (el: IContact) => el !== contact
      );

      return {
        ...pref,
        contacts: filteredContacts,
      };
    });
  };

  return (
    <div className={classNames(styles.row, className)}>
      {clientData.contacts?.map((contact, index) => (
        <SelectContact
          key={index}
          contact={contact}
          setContact={(updatedContact) => setContact(index, updatedContact)}
          onDelete={() => onDeleteContact(contact)}
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
