import { IClient } from "../../api/types";
import { Dispatch, SetStateAction } from "react";

export interface IModalUpdateOrAdd {
  client: IClient;
  setClient: Dispatch<SetStateAction<IClient>>;
  onSubmit: () => void;
  closeModal: () => void;
}
