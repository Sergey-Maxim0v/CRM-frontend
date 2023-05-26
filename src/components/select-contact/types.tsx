import { Dispatch, SetStateAction } from "react";
import { IClient, IContact } from "../../api/types";

export interface ISelectContact {
  contact: IContact;
  setClientData: Dispatch<SetStateAction<IClient>>;
}
