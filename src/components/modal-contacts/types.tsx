import {INewClient} from "../../api/types";
import {Dispatch, SetStateAction} from "react";

export interface IModalContacts {
    clientData: INewClient
    setClientData: Dispatch<SetStateAction<INewClient>>
    className?: string
}
