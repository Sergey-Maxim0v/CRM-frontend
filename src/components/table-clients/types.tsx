import { TABLE_COLUMNS_ENUM } from "../../enums/row-keys";

export interface IHeadCell {
  sorted: boolean;
  type: TABLE_COLUMNS_ENUM;
  arrow: ARROW_ENUM.up | undefined;
}

export enum ARROW_ENUM {
  up = "arrowUp",
  down = "arrowDown",
}
