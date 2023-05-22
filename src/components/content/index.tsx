import PageTitle from "../page-title";
import Table from "../table";
import ButtonAdd from "../button-add";
import stiles from "./styles.module.scss";
import { useState } from "react";
import Modal from "../modal";
import ModalContentAdd from "../modal-content-add";

const Content = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  return (
    <section className={stiles.row}>
      <PageTitle />
      <Table />
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
