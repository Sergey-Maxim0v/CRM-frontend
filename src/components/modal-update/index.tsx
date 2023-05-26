import { ChangeEvent, FC, MouseEvent } from "react";
import { IModalUpdate } from "./types";
import Modal from "../modal";
import styles from "./styles.module.scss";
import InputModal from "../input-modal";
import ModalContacts from "../modal-contacts";
import Button from "../button";
import { BUTTON_TYPES } from "../../enums/button-types";
import ButtonCancel from "../button-cancel";

const ModalUpdate: FC<IModalUpdate> = ({
  updatedClient,
  setUpdatedClient,
  onUpdateClient,
  closeModal,
}) => {
  const onChangeSurname = (event: ChangeEvent<HTMLInputElement>) => event;
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => event;
  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => event;

  const sendClientData = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await onUpdateClient();
  };

  return (
    <Modal closeModal={closeModal}>
      <form className={styles.row}>
        <h3 className={styles.modalTitle}>Новый клиент</h3>

        <InputModal
          value={updatedClient.surname}
          onChange={onChangeSurname}
          placeholder={"Фамилия"}
          type="text"
          required
          className={styles.input}
        />

        <InputModal
          value={updatedClient.name}
          onChange={onChangeName}
          placeholder={"Имя"}
          type="text"
          required
          className={styles.input}
        />

        <InputModal
          value={updatedClient.lastName ?? ""}
          onChange={onChangeLastName}
          placeholder={"Отчество"}
          type="text"
          className={styles.input}
          required={false}
        />

        <ModalContacts
          clientData={updatedClient}
          setClientData={setUpdatedClient}
        />

        <Button
          type={BUTTON_TYPES.primary}
          onClick={sendClientData}
          className={styles.buttonSend}
        >
          Сохранить
        </Button>

        <ButtonCancel
          className={styles.buttonClose}
          onClick={() => closeModal()}
        >
          Отмена
        </ButtonCancel>
      </form>
    </Modal>
  );
};

export default ModalUpdate;
