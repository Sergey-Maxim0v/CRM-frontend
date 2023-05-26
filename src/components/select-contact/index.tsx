import { FC } from "react";
import { ISelectContact } from "./types";
import styles from "./styles.module.scss";
import Select from "../select";
import { CONTACT_TYPES, IContact } from "../../api/types";

const SelectContact: FC<ISelectContact> = ({ contact, setClientData }) => {
  const onChangeType = (type: CONTACT_TYPES) => {
    setClientData((pref) => {
      const contacts = pref.contacts ?? [];
      const currentIndex = contacts.indexOf(contact);
      const resultContacts = [];

      for (let i = 0; i < contacts.length; i++) {
        if (i === currentIndex) {
          const redactedContact: IContact = { ...contacts[i], type };
          resultContacts.push(redactedContact);
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

  const onChangeValue = (value: string) => {
    setClientData((pref) => {
      const contacts = pref.contacts ?? [];
      const currentIndex = contacts.indexOf(contact);
      const resultContacts = [];

      for (let i = 0; i < contacts.length; i++) {
        if (i === currentIndex) {
          const redactedContact: IContact = { ...contacts[i], value };
          resultContacts.push(redactedContact);
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

  const onDelete = () => {
    setClientData((pref) => {
      const contacts = pref.contacts ?? [];
      const filteredContacts = contacts.filter((el) => el !== contact);

      return {
        ...pref,
        contacts: filteredContacts,
      };
    });
  };

  return (
    <Select
      value={contact.value}
      type={contact.type}
      onChangeValue={onChangeValue}
      onChangeType={onChangeType}
      onDelete={onDelete}
      className={styles.selectContact}
    />
  );
};

export default SelectContact;
