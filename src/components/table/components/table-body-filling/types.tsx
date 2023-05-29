import { IColumn, IRow } from "../../types";

export interface ITableBodyFilling {
  columns: IColumn[];
  rows: IRow[];
  isLoading: boolean;
  errorMessage: string | undefined;
  noListMessage: string | undefined;
  tableRowStyle: string | undefined;
}
