import { IClient } from "../../../../api/types";

export interface ICellDate {
  client: IClient;
  type: CELL_DATE_ENUM;
}

export enum CELL_DATE_ENUM {
  create = "cell-create",
  update = "cell-update",
}
