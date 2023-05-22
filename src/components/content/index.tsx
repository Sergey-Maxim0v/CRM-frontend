import PageTitle from "../page-title";
import ButtonAdd from "../button-add";
import stiles from "./styles.module.scss";
import { useState } from "react";
import Modal from "../modal";
import ModalContentAdd from "../modal-content-add";
import TableClients from "../table-clients";

const Content = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  return (
    <section className={stiles.row}>
      <PageTitle />
      <TableClients />
      <ButtonAdd openModal={() => setIsOpenAddModal(true)} />

      {isOpenAddModal && (
        <Modal closeModal={() => setIsOpenAddModal(false)}>
          <ModalContentAdd closeModal={() => setIsOpenAddModal(false)} />
        </Modal>
      )}
    </section>
  );
};

export default Content;
