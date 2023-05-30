import { FC } from "react";
import { ISelectContact } from "./types";
import styles from "./styles.module.scss";
import { CONTACT_TYPES } from "../../api/types";
import Select from "../select";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";
import { ISelectTypeOption } from "../select/types";

const CONTACT_TYPE_NAMES = {
  [CONTACT_TYPES.tel]: "Телефон",
  [CONTACT_TYPES.otherTel]: "Доп. телефон",
  [CONTACT_TYPES.email]: "Email",
  [CONTACT_TYPES.vk]: "Vk",
  [CONTACT_TYPES.telegram]: "Telegram",
};

const SELECT_CONTACT_OPTIONS = (
  Object.keys(CONTACT_TYPES) as CONTACT_TYPES[]
).reduce(
  (result: ISelectTypeOption[], contactType) =>
    result.concat({
      value: contactType,
      label: CONTACT_TYPE_NAMES[contactType],
    }),
  []
);

const SelectContact: FC<ISelectContact> = ({
  contact,
  setContact,
  onDelete,
}) => {
  const onChangeType = (type: CONTACT_TYPES) => {
    const updatedContact = { ...contact, type };
    setContact(updatedContact);
  };

  const onChangeValue = (value: string) => {
    const updatedContact = { ...contact, value };
    setContact(updatedContact);
  };

  const currentOption = SELECT_CONTACT_OPTIONS.find(
    (option: ISelectTypeOption) => option.value === contact.type
  );

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Select
          onChange={(option) => onChangeType(option?.value as CONTACT_TYPES)}
          options={SELECT_CONTACT_OPTIONS}
          className={styles.select}
          value={currentOption}
        />

        <input
          type="text"
          className={styles.input}
          value={contact.value}
          onChange={(event) => onChangeValue(event.target.value)}
          placeholder="Введите данные контакта"
        />

        <div onClick={() => onDelete()} className={styles.deleteButton}>
          <ComponentsSVG
            type={SVG_TYPES.delete}
            className={styles.deleteButtonIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectContact;
