import {useState} from "react";
import Header from "./components/header";
import Content from "./components/content";
import Modal from "./components/modal";
import MODAL_TYPES from "./enums/modal-types";
import {Context, IContext} from "./context/context";

function App() {
    const [modalType, setModalType] = useState<MODAL_TYPES | false>(false)
    const [filter, setFilter] = useState<string | undefined>(undefined)

    const contextValue: IContext = {
        modalType, setModalType, filter, setFilter
    }

    return (
        <Context.Provider value={contextValue}>
            <Header/>

            <Content/>

            {modalType && <Modal/>}
        </Context.Provider>
    )
}

export default App
