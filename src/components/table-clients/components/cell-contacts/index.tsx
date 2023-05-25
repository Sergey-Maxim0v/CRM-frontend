import { FC } from "react";
import { ICellContacts } from "./types";
import styles from "./styles.module.scss";
import ContactComponent from "../../../contact-component";

const CellContacts: FC<ICellContacts> = ({ client }) => {
  return (
    <div className={styles.row}>
      {client.contacts?.map((contact, index) => (
        <ContactComponent key={index} contact={contact} />
      ))}
    </div>
  );
};

export default CellContacts;
