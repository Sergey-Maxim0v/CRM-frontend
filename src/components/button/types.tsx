import { BUTTON_TYPES } from "../../enums/button-types";

export interface IButton {
  type: BUTTON_TYPES;
  onClick?: () => void;
  className?: string;
}
