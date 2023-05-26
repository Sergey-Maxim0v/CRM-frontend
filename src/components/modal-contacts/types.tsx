import { IClient } from "../../api/types";
import { Dispatch, SetStateAction } from "react";

export interface IModalContacts {
  clientData: IClient;
  setClientData: Dispatch<SetStateAction<IClient>>;
  className?: string;
}
