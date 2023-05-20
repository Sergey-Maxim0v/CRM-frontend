import { FC, useState } from "react";
import styles from "./styles.module.scss";
import InputModal from "../input-modal";
import { INewClient } from "../../api/types";
import ModalContacts from "../modal-contacts";
import { IInputModal } from "../input-modal/types";
import Button from "../button";
import { BUTTON_TYPES } from "../../enums/button-types";

const initialContactData: INewClient = {
  name: "",
  surname: "",
  lastName: "",
  contacts: [],
};

const ModalContentAdd: FC = () => {
  const [clientData, setClientData] = useState<INewClient>(initialContactData);

  const onChangeSurname: IInputModal["onChange"] = (e) =>
    setClientData({
      ...clientData,
      surname: e.target.value,
    });

  const onChangeName: IInputModal["onChange"] = (e) =>
    setClientData({
      ...clientData,
      name: e.target.value,
    });

  const onChangeLastName: IInputModal["onChange"] = (e) =>
    setClientData({
      ...clientData,
      lastName: e.target.value,
    });

  const sendClientData = () => {
    // TODO
  };

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
        value={clientData.lastName ?? ""}
        onChange={onChangeLastName}
        placeholder={"Отчество"}
        type="text"
        className={styles.input}
        required={false}
      />

      <ModalContacts clientData={clientData} setClientData={setClientData} />

      <Button
        type={BUTTON_TYPES.primary}
        onClick={() => sendClientData()}
        className={styles.buttonSend}
      >
        Сохранить
      </Button>

      <p className="">// TODO: отмена </p>
    </form>
  );
};

export default ModalContentAdd;
