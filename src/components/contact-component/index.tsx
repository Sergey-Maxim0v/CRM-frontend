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

  const getBalloonTextType = () => {
    switch (contact.type) {
      case CONTACT_TYPES.tel:
        return `Телефон: `;
      case CONTACT_TYPES.otherTel:
        return `Другой телефон: `;
      case CONTACT_TYPES.email:
        return `Email: `;
      case CONTACT_TYPES.telegram:
        return `Telegram: `;
      case CONTACT_TYPES.vk:
        return `ВКонтакте: `;
      default:
        return "";
    }
  };

  const onClickBalloon = () => {
    navigator.clipboard
      .writeText(contact.value)
      .then(() => alert("Контакт скопирован в буфер обмена"))
      .catch((error) =>
        console.error("Ошибка копирования контакта в буфер обмена:::", error)
      );
  };

  return (
    <div className={classNames(styles.row, className)}>
      <a
        href={getHref()}
        target={
          contact.type === CONTACT_TYPES.vk ||
          contact.type === CONTACT_TYPES.telegram
            ? "_blank"
            : undefined
        }
        className={styles.link}
      >
        <ComponentsSVGContacts type={contact.type} className={styles.icon} />
      </a>

      <div className={styles.balloon} onClick={() => onClickBalloon()}>
        <span className={styles.balloonType}>{getBalloonTextType()}</span>
        {contact.value}
      </div>
    </div>
  );
};

export default ContactComponent;
