import { FC } from "react";
import { IModalDelete } from "./types";
import Modal from "../modal";
import Button from "../button";
import { BUTTON_TYPES } from "../../enums/button-types";
import ButtonCancel from "../button-cancel";
import styles from "./styles.module.scss";

const ModalDelete: FC<IModalDelete> = ({
  onDeleteModal,
  closeModal,
  isLoad,
}) => {
  return (
    <Modal closeModal={() => closeModal()}>
      <div className={styles.row}>
        <h4 className={styles.title}>Удалить клиента</h4>

        <p className={styles.description}>
          Вы действительно хотите удалить данного клиента?
        </p>

        <Button
          className={styles.button}
          type={BUTTON_TYPES.primary}
          onClick={() => onDeleteModal()}
          loader={isLoad}
        >
          Удалить
        </Button>

        <ButtonCancel onClick={() => closeModal()}>Отмена</ButtonCancel>
      </div>
    </Modal>
  );
};

export default ModalDelete;
