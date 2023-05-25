import { FC } from "react";
import { IModalDelete } from "./types";
import Modal from "../modal";
import Button from "../button";
import { BUTTON_TYPES } from "../../enums/button-types";
import ButtonCancel from "../button-cancel";

const ModalDelete: FC<IModalDelete> = ({ onDeleteModal, closeModal }) => {
  return (
    <Modal closeModal={() => closeModal()}>
      <h4>Удалить клиента</h4>

      <p>Вы действительно хотите удалить данного клиента?</p>

      <Button type={BUTTON_TYPES.primary} onClick={() => onDeleteModal()}>
        Удалить
      </Button>

      <ButtonCancel onClick={() => closeModal()}>Отмена</ButtonCancel>
    </Modal>
  );
};

export default ModalDelete;
