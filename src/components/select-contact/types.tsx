import { IContact } from "../../api/types";

export interface ISelectContact {
  contact: IContact;
  setContact: (val: IContact) => void;
  onDelete: () => void;
}
