import {useState} from "react";

import Header from "./components/header";
import Modal from "./components/modal";

import MODAL_TYPES from "./enums/modal-types";
import Content from "./components/content";

function App() {
    const [modalType, setModalType] = useState<MODAL_TYPES | false>(false)
    const [filter, setFilter] = useState<string | undefined>(undefined)

    return (
        <>
            <Header/>

            <Content/>

            {modalType ?? <Modal modalType={modalType}/>}
        </>
    )
}

export default App
