import { FC } from "react";
import { IContactComponent } from "./types";
import styles from "./styles.module.scss";
import ComponentsSVGContacts from "../components-svg-contacts";

const ContactComponent: FC<IContactComponent> = ({ contact }) => {
  const href = "/";
  return (
    <a href={href} className={styles.link}>
      <ComponentsSVGContacts type={contact.type} className={styles.icon} />
    </a>
  );
};

export default ContactComponent;
