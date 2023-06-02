import { IClient } from "../../../../api/types";

export interface ICellActivities {
  client: IClient;
  filterRowsOnDelete: (val: string) => void;
}
