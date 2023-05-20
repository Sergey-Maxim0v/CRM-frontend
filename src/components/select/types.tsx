import { CONTACT_TYPES } from "../../api/types";

export interface ISelect {
  type: CONTACT_TYPES;
  onChangeType: (val: CONTACT_TYPES) => void;
  value: string;
  onChangeValue: (val: string) => void;
  className?: string;
  onDelete: () => void;
}
