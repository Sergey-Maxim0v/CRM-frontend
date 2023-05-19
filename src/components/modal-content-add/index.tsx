import { FC, useCallback, useState } from "react";
import styles from "./styles.module.scss";
import InputModal from "../input-modal";
import { INewClient } from "../../api/types";
import ModalContacts from "../modal-contacts";

const initialContactData: INewClient = {
  name: "",
  surname: "",
  lastName: "",
  contacts: [],
};

const ModalContentAdd: FC = () => {
  const [clientData, setClientData] = useState<INewClient>(initialContactData);

  const onChangeSurname = useCallback(
    (e) =>
      setClientData({
        ...clientData,
        surname: e.target.value,
      }),
    [clientData]
  );

  const onChangeName = useCallback(
    (e) =>
      setClientData({
        ...clientData,
        name: e.target.value,
      }),
    [clientData]
  );

  const onChangeLastName = useCallback(
    (e) =>
      setClientData({
        ...clientData,
        lastName: e.target.value,
      }),
    [clientData]
  );

  return (
    <form className={styles.row}>
      <h3 className={styles.modalTitle}>Новый клиент</h3>

      <InputModal
        value={clientData.surname}
        onChange={onChangeSurname}
        placeholder={"Фамилия"}
        type="text"
        required
        className={styles.input}
      />

      <InputModal
        value={clientData.name}
        onChange={onChangeName}
        placeholder={"Имя"}
        type="text"
        required
        className={styles.input}
      />

      <InputModal
        value={clientData.lastName}
        onChange={onChangeLastName}
        placeholder={"Отчество"}
        type="text"
        className={styles.input}
      />

      <ModalContacts clientData={clientData} setClientData={setClientData} />

      <p className="">// TODO: buttons</p>
    </form>
  );
};

export default ModalContentAdd;
