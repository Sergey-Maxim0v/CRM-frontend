import { IClient } from "../../../../api/types";

export interface ICellActivities {
  client: IClient;
  filterRows: (val: string) => void;
}
