import {FC} from "react";
import {IModal} from "./types";

const Modal: FC<IModal> = ({modalType}) => {

    return (
        <>
            {modalType}
        </>
    )
}

export default Modal