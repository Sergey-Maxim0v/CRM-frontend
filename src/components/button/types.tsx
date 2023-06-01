import { MouseEvent } from "react";
import { BUTTON_TYPES } from "../../enums/button-types";

export interface IButton {
  type: BUTTON_TYPES;
  onClick?: (val: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  loader?: boolean;
}
