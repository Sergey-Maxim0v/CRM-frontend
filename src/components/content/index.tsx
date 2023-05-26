import PageTitle from "../page-title";
import ButtonAdd from "../button-add";
import stiles from "./styles.module.scss";
import { useContext, useState } from "react";
import TableClients from "../table-clients";
import ModalUpdateOrAdd from "../modal-update-or-add";
import { Context } from "../../context/context";
import saveNewClient from "../../api/saveNewClient";
import { IClient } from "../../api/types";

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
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [clientData, setClientData] = useState<IClient>(initialContactData);
  const { setClientsData } = useContext(Context);

  const onSubmit = () => {
    saveNewClient(clientData)
      .then(
        (res) => res?.data && setClientsData((pref) => pref.concat(res.data))
      )
      .catch((e) => console.warn("error save new client:::", e))
      .finally(() => setIsOpenAddModal(false));
  };

  return (
    <section className={stiles.row}>
      <PageTitle />
      <TableClients />
      <ButtonAdd openModal={() => setIsOpenAddModal(true)} />

      {isOpenAddModal && (
        <ModalUpdateOrAdd
          closeModal={() => setIsOpenAddModal(false)}
          client={clientData}
          setClient={setClientData}
          onSubmit={onSubmit}
        />
      )}
    </section>
  );
};

export default Content;
