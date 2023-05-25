import { FC } from "react";
import { IContactComponent } from "./types";
import styles from "./styles.module.scss";
import ComponentsSVGContacts from "../components-svg-contacts";
import classNames from "classnames";

const ContactComponent: FC<IContactComponent> = ({ contact, className }) => {
  const href = "/";
  return (
    <a href={href} className={classNames(styles.link, className)}>
      <ComponentsSVGContacts type={contact.type} className={styles.icon} />
    </a>
  );
};

export default ContactComponent;
