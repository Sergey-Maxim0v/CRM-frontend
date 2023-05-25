import { FC } from "react";
import { ICellContacts } from "./types";
import styles from "./styles.module.scss";
import ContactComponent from "../../../contact-component";

const CellContacts: FC<ICellContacts> = ({ client }) => {
  console.log(client.contacts);
  return (
    <div className={styles.row}>
      {client.contacts?.map((contact) => (
        <ContactComponent contact={contact} />
      ))}
    </div>
  );
};

export default CellContacts;
