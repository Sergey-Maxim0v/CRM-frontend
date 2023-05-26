import { IClient } from "../../api/types";
import { Dispatch, SetStateAction } from "react";

export interface IModalUpdate {
  updatedClient: IClient;
  setUpdatedClient: Dispatch<SetStateAction<IClient>>;
  onUpdateClient: () => void;
  closeModal: () => void;
}
