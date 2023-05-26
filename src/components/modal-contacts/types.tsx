import { IClient, INewClient } from "../../api/types";
import { Dispatch, SetStateAction } from "react";

export interface IModalContacts {
  clientData: INewClient | IClient;
  setClientData:
    | Dispatch<SetStateAction<INewClient>>
    | Dispatch<SetStateAction<IClient>>;
  className?: string;
}
