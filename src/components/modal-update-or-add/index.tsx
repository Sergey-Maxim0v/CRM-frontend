import {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  IModalUpdateOrAdd,
  IValidateClient,
  MODAL_UPDATE_OR_ADD_TYPE,
} from "./types";
import Modal from "../../assets/ui-kit/modal";
import styles from "./styles.module.scss";
import InputModal from "../input-modal";
import ModalContacts from "../modal-contacts";
import Button from "../button";
import { BUTTON_TYPES } from "../../enums/button-types";
import ButtonCancel from "../button-cancel";
import stringToClear from "../../utils/stringToClear";

const initialValidate: IValidateClient = {
  name: true,
  surname: true,
  contacts: true,
};

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

  const [valid, setValid] = useState<IValidateClient>(initialValidate);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const onChangeSurname = (event: ChangeEvent<HTMLInputElement>) => {
    setValid({ ...valid, surname: true });
    setClient({ ...client, surname: event.target.value });
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValid({ ...valid, name: true });
    setClient({ ...client, name: event.target.value });
  };

  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, lastName: event.target.value });
  };

  const validateForm = () => {
    const isValidName = !!stringToClear(client.name);
    const isValidSurname = !!stringToClear(client.surname);
    const isValidContacts = !client.contacts?.some(
      (contact) => !stringToClear(contact.value)
    );

    setValid({
      name: isValidName,
      surname: isValidSurname,
      contacts: isValidContacts,
    });

    return isValidName && isValidSurname && isValidContacts;
  };

  const sendClientData = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      await onSubmit().then(() => setErrorMessage(""));
    } else {
      setErrorMessage(
        "Выделенные поля должны быть обязательно заполнены. " +
          "Поле должно содержать как минимум одну букву или цифру"
      );
    }
  };

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

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

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
          isError={!valid.surname}
        />

        <InputModal
          value={client.name}
          onChange={onChangeName}
          placeholder={"Имя"}
          type="text"
          required
          className={styles.input}
          isError={!valid.name}
        />

        <InputModal
          value={client.lastName ?? ""}
          onChange={onChangeLastName}
          placeholder={"Отчество"}
          type="text"
          className={styles.input}
          required={false}
        />

        <ModalContacts
          clientData={client}
          setClientData={setClient}
          isError={!valid.contacts}
        />

        {errorMessage && (
          <div className={styles.errorRow}>
            <p className={styles.error}>{errorMessage}</p>
          </div>
        )}

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
