import {createContext} from "react";
import MODAL_TYPES from "../enums/modal-types";

export interface IContext {
    modalType: MODAL_TYPES | false,
    setModalType: (val: MODAL_TYPES | false) => void,
    filter: string | undefined,
    setFilter: (val: string | undefined) => void
}

export const Context = createContext<IContext>({
    modalType: false,
    setModalType: () => {
        return
    },
    filter: undefined,
    setFilter: () => {
        return
    }
})