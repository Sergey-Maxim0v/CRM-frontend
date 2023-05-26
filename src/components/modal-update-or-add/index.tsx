import { ChangeEvent, FC, MouseEvent } from "react";
import { IModalUpdateOrAdd } from "./types";
import Modal from "../modal";
import styles from "./styles.module.scss";
import InputModal from "../input-modal";
import ModalContacts from "../modal-contacts";
import Button from "../button";
import { BUTTON_TYPES } from "../../enums/button-types";
import ButtonCancel from "../button-cancel";

const ModalUpdateOrAdd: FC<IModalUpdateOrAdd> = ({
  client,
  setClient,
  onSubmit,
  closeModal,
}) => {
  const onChangeSurname = (event: ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, surname: event.target.value });
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) =>
    setClient({ ...client, name: event.target.value });

  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) =>
    setClient({ ...client, lastName: event.target.value });

  const sendClientData = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await onSubmit();
  };

  return (
    <Modal closeModal={closeModal}>
      <form className={styles.row}>
        <h3 className={styles.modalTitle}>Новый клиент</h3>

        <InputModal
          value={client.surname}
          onChange={onChangeSurname}
          placeholder={"Фамилия"}
          type="text"
          required
          className={styles.input}
        />

        <InputModal
          value={client.name}
          onChange={onChangeName}
          placeholder={"Имя"}
          type="text"
          required
          className={styles.input}
        />

        <InputModal
          value={client.lastName ?? ""}
          onChange={onChangeLastName}
          placeholder={"Отчество"}
          type="text"
          className={styles.input}
          required={false}
        />

        <ModalContacts clientData={client} setClientData={setClient} />

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

export default ModalUpdateOrAdd;
