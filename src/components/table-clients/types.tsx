import { TABLE_COLUMNS_ENUM } from "../../enums/row-keys";

export interface IHeadCell {
  sorted: boolean;
  type: TABLE_COLUMNS_ENUM;
  arrow: ARROW_ENUM | undefined;
}

export interface ISort {
  type: SORT_ENUM;
  direction: boolean;
}

export enum ARROW_ENUM {
  up = "arrowUp",
  down = "arrowDown",
}

export enum SORT_ENUM {
  id = "sort_by_id",
  name = "sort_by_name",
  create = "sort_by_create",
  update = "sort_by_update",
}
