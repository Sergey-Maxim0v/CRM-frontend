import { FC } from "react";
import { IModalDelete } from "./types";
import Modal from "../../ui-kit/modal";
import Button from "../../ui-kit/button";
import { BUTTON_TYPES } from "../../enums/button-types";
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

        <Button onClick={() => closeModal()} type={BUTTON_TYPES.ghost}>
          Отмена
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
