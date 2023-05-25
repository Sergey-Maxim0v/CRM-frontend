import { FC, useState } from "react";
import { ICellContacts } from "./types";
import styles from "./styles.module.scss";
import ContactComponent from "../../../contact-component";
import { IContact } from "../../../../api/types";

const MAX_VISIBLE_CONTACTS = 4;

const CellContacts: FC<ICellContacts> = ({ client }) => {
  const contactsArr = client.contacts ?? [];
  const shortArr = contactsArr.slice(0, MAX_VISIBLE_CONTACTS);

  const [isOpen, setIsOpen] = useState(false);

  const mapper = (arr: IContact[]) =>
    arr.map((contact, index) => (
      <ContactComponent key={index} contact={contact} className={styles.link} />
    ));

  return (
    <div className={styles.row}>
      {contactsArr.length > 5 ? (
        <>
          {isOpen ? mapper(contactsArr) : mapper(shortArr)}
          {!isOpen && (
            <button
              className={styles.button}
              onClick={() => setIsOpen(true)}
            >{`+${contactsArr.length - MAX_VISIBLE_CONTACTS}`}</button>
          )}
        </>
      ) : (
        mapper(contactsArr)
      )}
    </div>
  );
};

export default CellContacts;
