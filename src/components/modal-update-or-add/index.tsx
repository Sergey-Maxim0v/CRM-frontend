import { ChangeEvent, FC, MouseEvent, useEffect, useRef } from "react";
import { IModalUpdateOrAdd, MODAL_UPDATE_OR_ADD_TYPE } from "./types";
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
  type,
  isLoad,
}) => {
  // eslint-disable-next-line
  // @ts-ignore
  const firstInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const getModalTitle = () => {
    switch (type) {
      case MODAL_UPDATE_OR_ADD_TYPE.add:
        return "Новый клиент";

      case MODAL_UPDATE_OR_ADD_TYPE.update:
        return "Изменить данные";

      default:
        return "";
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <form className={styles.row}>
        <div className={styles.modalHead}>
          <h3 className={styles.modalTitle}>{getModalTitle()}</h3>

          {type === MODAL_UPDATE_OR_ADD_TYPE.update && (
            <div className={styles.modalId}>ID: {client.id}</div>
          )}
        </div>

        <InputModal
          ref={firstInputRef}
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
          loader={isLoad}
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
