import { FC } from "react";
import { ISelectContact } from "./types";
import styles from "./styles.module.scss";
import { CONTACT_TYPES } from "../../api/types";
import Select from "../../ui-kit/select";
import ComponentsSVG from "../../ui-kit/components-svg";
import SVG_TYPES from "../../enums/svg-types";
import { ISelectTypeOption } from "../../ui-kit/select/types";
import classNames from "classnames";

const CONTACT_TYPE_NAMES = {
  [CONTACT_TYPES.tel]: "Телефон",
  [CONTACT_TYPES.otherTel]: "Доп. телефон",
  [CONTACT_TYPES.email]: "Email",
  [CONTACT_TYPES.vk]: "ВКонтакте",
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
  isError,
}) => {
  const currentOption = SELECT_CONTACT_OPTIONS.find(
    (option: ISelectTypeOption) => option.value === contact.type
  );

  const onChangeType = (type: CONTACT_TYPES) => {
    const updatedContact = { ...contact, type };
    setContact(updatedContact);
  };

  const onChangeValue = (value: string) => {
    const updatedContact = { ...contact, value };
    setContact(updatedContact);
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Select
          value={currentOption}
          onChange={(option) => onChangeType(option.value as CONTACT_TYPES)}
          options={SELECT_CONTACT_OPTIONS}
          className={styles.select}
        />

        <input
          type="text"
          className={classNames(styles.input, { [styles.error]: isError })}
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
