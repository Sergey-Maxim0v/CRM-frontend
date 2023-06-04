import { IClient } from "../../api/types";
import { Dispatch, SetStateAction } from "react";

export interface IModalUpdateOrAdd {
  client: IClient;
  setClient: Dispatch<SetStateAction<IClient>>;
  onSubmit: () => void;
  closeModal: () => void;
  type: MODAL_UPDATE_OR_ADD_TYPE;
  isLoad: boolean;
}

export enum MODAL_UPDATE_OR_ADD_TYPE {
  add = "modal-add",
  update = "modal-update",
}

export interface IValidateClient {
  name: boolean;
  surname: boolean;
  contacts: boolean;
}
