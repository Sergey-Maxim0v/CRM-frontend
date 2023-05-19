import { FC, useCallback } from "react";
import { ISelectContact } from "./types";
import styles from "./styles.module.scss";

const SelectContact: FC<ISelectContact> = ({ contact, setClientData }) => {
  const onChangeType = useCallback(() => {
    // TODO
  }, [contact, setClientData]);

  const onChangeValue = useCallback(() => {
    // TODO
  }, [contact, setClientData]);

  return <div className={styles.row}>// TODO: SelectContact</div>;
};

export default SelectContact;
