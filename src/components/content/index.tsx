import PageTitle from "../page-title";
import ButtonAdd from "../button-add";
import stiles from "./styles.module.scss";
import { useContext, useState } from "react";
import TableClients from "../table-clients";
import ModalUpdateOrAdd from "../modal-update-or-add";
import { Context } from "../../context/context";
import saveNewClient from "../../api/saveNewClient";
import { IClient } from "../../api/types";
import { MODAL_UPDATE_OR_ADD_TYPE } from "../modal-update-or-add/types";

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
  const { setClientsData, refetch } = useContext(Context);

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [clientData, setClientData] = useState<IClient>(initialContactData);
  const [isLoadSaveClient, setIsLoadSaveClient] = useState(false);

  const onSubmit = () => {
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
        refetch().catch((error) =>
          console.error("Error refetch clients:::", error)
        );
      });
  };

  return (
    <section className={stiles.row}>
      <PageTitle />

      <section className={stiles.tableRow}>
        <TableClients />
      </section>

      <ButtonAdd openModal={() => setIsOpenAddModal(true)} />

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
