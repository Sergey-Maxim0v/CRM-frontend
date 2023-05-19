import { FC, useEffect, useState } from "react";
import { ISelectContact } from "./types";
import styles from "./styles.module.scss";
import Select from "../select";
import { CONTACT_TYPES, IContact } from "../../api/types";

const SelectContact: FC<ISelectContact> = ({ contact, setClientData }) => {
  const [newContactData, setNewContactData] = useState<IContact>(contact);

  useEffect(() => {
    if (newContactData.type && newContactData.value) {
      setClientData((pref) => {
        const contacts = pref.contacts;
        const currentIndex = contacts.indexOf(contact);
        const resultContacts = [];

        for (let i = 0; i < contacts.length; i++) {
          if (i === currentIndex) {
            resultContacts.push(newContactData);
          } else {
            resultContacts.push(contacts[i]);
          }
        }

        return {
          ...pref,
          contacts: resultContacts,
        };
      });
    }
    // eslint-disable-next-line
  }, [newContactData]);

  const onChangeType = (type: CONTACT_TYPES) => {
    setNewContactData({ ...contact, type });
  };

  const onChangeValue = (value: string) => {
    setNewContactData({ ...contact, value });
  };

  const onDelete = () => {
    setClientData((pref) => {
      const filteredContacts = pref.contacts.filter((el) => el !== contact);

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
