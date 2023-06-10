import { ReactElement } from "react";
import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";
import { IClient } from "../../../api/types";

export interface ITable {
  columns: IColumn[];
  rows: IRow[];
  tableStyle?: string;
  tableHeadStyle?: string;
  tableRowStyle?: string;
  tableBodyStyle?: string;
  isLoading: boolean;
  errorMessage?: string;
  noListMessage?: string;
}

export interface IColumn {
  headChildren: ReactElement;
  rowKey: TABLE_COLUMNS_ENUM;
  headCellStyle: string;
  cellStyle: string;
  width?: number;
  onClickHead?: () => void;
}

export interface IRow {
  id: string;
  client: IClient;
  cells: {
    [key in TABLE_COLUMNS_ENUM]: ICell;
  };
}

export interface ICell {
  id: string;
  element: ReactElement;
  className?: string;
}
