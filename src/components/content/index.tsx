import PageTitle from "../page-title";
import stiles from "./styles.module.scss";
import { useContext, useState } from "react";
import TableClients from "../table-clients";
import ModalUpdateOrAdd from "../modal-update-or-add";
import { Context } from "../../context/context";
import saveNewClient from "../../api/saveNewClient";
import { IClient } from "../../api/types";
import { MODAL_UPDATE_OR_ADD_TYPE } from "../modal-update-or-add/types";
import Button from "../../ui-kit/button";
import SVG_TYPES from "../../enums/svg-types";
import { BUTTON_TYPES } from "../../enums/button-types";
import getIsValidClient from "../../utils/getIsValidClient";

const initialContactData: IClient = {
  id: "",
  updatedAt: "",
  createdAt: "",
  name: "",
  surname: "",
  lastName: "",
  contacts: [],
};

const Content = () => {
  const { setClientsData } = useContext(Context);

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [clientData, setClientData] = useState<IClient>(initialContactData);
  const [isLoadSaveClient, setIsLoadSaveClient] = useState(false);

  const onSubmit = async () => {
    const isValidClient = getIsValidClient(clientData);

    if (!isValidClient) {
      console.error("Client object no valid");
      return;
    }

    setIsLoadSaveClient(true);
    saveNewClient(clientData)
      .then((res) => {
        setClientData(initialContactData);
        res?.data && setClientsData((prev) => prev.concat(res.data));
      })
      .catch((e) => console.warn("error save new client:::", e))
      .finally(() => {
        setIsLoadSaveClient(false);
        setIsOpenAddModal(false);
      });
  };

  return (
    <section className={stiles.row}>
      <PageTitle>Клиенты</PageTitle>

      <section className={stiles.tableRow}>
        <TableClients />
      </section>

      <Button
        onClick={() => setIsOpenAddModal(true)}
        icon={SVG_TYPES.addClient}
        className={stiles.button}
        type={BUTTON_TYPES.secondary}
      >
        Добавить клиента
      </Button>

      {isOpenAddModal && (
        <ModalUpdateOrAdd
          closeModal={() => setIsOpenAddModal(false)}
          client={clientData}
          setClient={setClientData}
          onSubmit={onSubmit}
          type={MODAL_UPDATE_OR_ADD_TYPE.add}
          isLoad={isLoadSaveClient}
        />
      )}
    </section>
  );
};

export default Content;
