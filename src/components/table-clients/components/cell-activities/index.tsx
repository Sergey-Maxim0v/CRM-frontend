import { FC, useState } from "react";
import { ICellActivities } from "./types";
import styles from "./styles.module.scss";
import ButtonActivities from "../../../button-activities";
import { BUTTON_ACTIVITIES_ENUM } from "../../../button-activities/types";
import ModalDelete from "../../../modal-delete";
import deleteClient from "../../../../api/deleteClient";
import ModalUpdateOrAdd from "../../../modal-update-or-add";
import { IClient } from "../../../../api/types";
import updateClient from "../../../../api/updateClient";

const CellActivities: FC<ICellActivities> = ({ client, filterRows }) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const [isLoadUpdate, setIsLoadUpdate] = useState(false);
  const [isLoadDelete, setIsLoadDelete] = useState(false);
  const [updatedClient, setUpdatedClient] = useState<IClient>({ ...client });

  const onDeleteModal = async () => {
    setIsLoadDelete(true);
    setIsDeleteModal(false);
    deleteClient(client)
      .then(() => {
        setIsLoadDelete(false);
        filterRows(client.id);
      })
      .catch((error) => {
        console.error("error delete client:::", error);
        setIsLoadDelete(false);
        setIsDeleteModal(false);
      });
  };

  const onUpdateModal = async () => {
    setIsLoadUpdate(true);
    setIsUpdateModal(false);

    await updateClient(updatedClient)
      .then((newRow) => {
        console.log(newRow);
        // TODO: update rows
      })
      .catch((error) => {
        console.error("error update client:::", error);
      })
      .finally(() => {
        setIsLoadUpdate(false);
      });
    return;
  };

  return (
    <div className={styles.row}>
      <ButtonActivities
        type={BUTTON_ACTIVITIES_ENUM.update}
        onClick={() => setIsUpdateModal(true)}
        className={styles.button}
        isLoad={isLoadUpdate}
      >
        Изменить
      </ButtonActivities>

      <ButtonActivities
        type={BUTTON_ACTIVITIES_ENUM.delete}
        onClick={() => setIsDeleteModal(true)}
        className={styles.button}
        isLoad={isLoadDelete}
      >
        Удалить
      </ButtonActivities>

      {isDeleteModal && (
        <ModalDelete
          onDeleteModal={onDeleteModal}
          closeModal={() => setIsDeleteModal(false)}
        />
      )}

      {isUpdateModal && (
        <ModalUpdateOrAdd
          onSubmit={() => onUpdateModal()}
          setClient={setUpdatedClient}
          client={updatedClient}
          closeModal={() => setIsUpdateModal(false)}
        />
      )}
    </div>
  );
};

export default CellActivities;
