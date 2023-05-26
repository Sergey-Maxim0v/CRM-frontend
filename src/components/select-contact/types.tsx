import { Dispatch, SetStateAction } from "react";
import { IClient, IContact, INewClient } from "../../api/types";

export interface ISelectContact {
  contact: IContact;
  setClientData:
    | Dispatch<SetStateAction<INewClient>>
    | Dispatch<SetStateAction<IClient>>;
}
