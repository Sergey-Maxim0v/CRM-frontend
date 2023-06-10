import { FC, useContext, useState } from "react";
import { ICellActivities } from "./types";
import styles from "./styles.module.scss";
import ButtonActivities from "../../../button-activities";
import { BUTTON_ACTIVITIES_ENUM } from "../../../button-activities/types";
import ModalDelete from "../../../modal-delete";
import deleteClient from "../../../../api/deleteClient";
import ModalUpdateOrAdd from "../../../modal-update-or-add";
import { IClient } from "../../../../api/types";
import updateClient from "../../../../api/updateClient";
import { Context } from "../../../../context/context";
import { MODAL_UPDATE_OR_ADD_TYPE } from "../../../modal-update-or-add/types";
import getIsValidClient from "../../../../utils/getIsValidClient";

const CellActivities: FC<ICellActivities> = ({ client }) => {
  const { setClientsData } = useContext(Context);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const [isLoadUpdate, setIsLoadUpdate] = useState(false);
  const [isLoadDelete, setIsLoadDelete] = useState(false);
  const [updatedClient, setUpdatedClient] = useState<IClient>({ ...client });

  const onSubmitDeleteModal = async () => {
    setIsLoadDelete(true);

    const filterRowsOnDelete = (id: string) =>
      setClientsData((prev) => prev.filter((client) => client.id !== id));

    deleteClient(client)
      .then(() => {
        filterRowsOnDelete(client.id);
      })
      .catch((error) => {
        console.error("error delete client:::", error);
      })
      .finally(() => {
        setIsLoadDelete(false);
        setIsDeleteModal(false);
      });
  };

  const onSubmitUpdateModal = async () => {
    const isValidClient = getIsValidClient(updatedClient);

    if (!isValidClient) {
      console.error("Client object no valid");
      return;
    }

    setIsLoadUpdate(true);

    await updateClient(updatedClient)
      .then((res) => {
        if (res?.updatedClient) {
          setClientsData((prev) => {
            const currentElement = prev.find(
              (el) => el.id === res.updatedClient.id
            );
            const currentIndex = currentElement && prev.indexOf(currentElement);
            const result: IClient[] = [];

            for (let i = 0; i < prev.length; i++) {
              if (i !== currentIndex) {
                result.push(prev[i]);
              } else {
                result.push(res.updatedClient);
              }
            }

            return result;
          });
        }
      })
      .catch((error) => {
        console.error("error update client:::", error);
      })
      .finally(() => {
        setIsLoadUpdate(false);
        setIsUpdateModal(false);
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
          onDeleteModal={onSubmitDeleteModal}
          closeModal={() => setIsDeleteModal(false)}
          isLoad={isLoadDelete}
        />
      )}

      {isUpdateModal && (
        <ModalUpdateOrAdd
          onSubmit={() => onSubmitUpdateModal()}
          setClient={setUpdatedClient}
          client={updatedClient}
          closeModal={() => setIsUpdateModal(false)}
          type={MODAL_UPDATE_OR_ADD_TYPE.update}
          isLoad={isLoadUpdate}
        />
      )}
    </div>
  );
};

export default CellActivities;
