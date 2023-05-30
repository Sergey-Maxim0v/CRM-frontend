import { FC } from "react";
import { IContactComponent } from "./types";
import styles from "./styles.module.scss";
import ComponentsSVGContacts from "../components-svg-contacts";
import classNames from "classnames";
import { CONTACT_TYPES } from "../../api/types";

const ContactComponent: FC<IContactComponent> = ({ contact, className }) => {
  const getHref = () => {
    switch (contact.type) {
      case CONTACT_TYPES.tel:
        return `tel:${contact.value}`;
      case CONTACT_TYPES.otherTel:
        return `tel:${contact.value}`;
      case CONTACT_TYPES.email:
        return `mailto:${contact.value}`;
      case CONTACT_TYPES.telegram:
        return `https://telegram.me/${contact.value}`;
      case CONTACT_TYPES.vk:
        return `https://vk.com/${contact.value}`;
      default:
        return "/";
    }
  };

  return (
    <a
      href={getHref()}
      target={
        contact.type === CONTACT_TYPES.vk ||
        contact.type === CONTACT_TYPES.telegram
          ? "_blank"
          : undefined
      }
      className={classNames(styles.link, className)}
    >
      <ComponentsSVGContacts type={contact.type} className={styles.icon} />
    </a>
  );
};

export default ContactComponent;
