import { FC } from "react";
import { IContactComponent } from "./types";
import styles from "./styles.module.scss";

const ContactComponent: FC<IContactComponent> = ({ contact }) => {
  const href = "/";
  return (
    <a href={href} className={styles.link}>
      q
    </a>
  );
};

export default ContactComponent;
