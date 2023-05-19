import { FC } from "react";
import { ISelectContact } from "./types";
import styles from "./styles.module.scss";

const SelectContact: FC<ISelectContact> = ({ contact, setClientData }) => {
  const onChangeType = () => {
    // TODO
  };

  const onChangeValue = () => {
    // TODO
  };

  return <div className={styles.row}>// TODO: SelectContact</div>;
};

export default SelectContact;
