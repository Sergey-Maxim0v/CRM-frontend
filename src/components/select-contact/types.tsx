import {Dispatch, SetStateAction} from "react";
import {IContact, INewClient} from "../../api/types";

export interface ISelectContact {
    contact: IContact
    setClientData: Dispatch<SetStateAction<INewClient>>

}