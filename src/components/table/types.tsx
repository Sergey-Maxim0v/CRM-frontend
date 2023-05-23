import { ReactElement } from "react";
import { TABLE_COLUMNS_ENUM } from "../../enums/row-keys";

export interface ITable {
  columns: IColumn[];
  rows: IRow[];
  tableStyle?: string;
  tableHeadStyle?: string;
  tableRowStyle?: string;
  tableBodyStyle?: string;
  isLoading: boolean;
}

export interface IColumn {
  headChildren: ReactElement;
  rowKey: TABLE_COLUMNS_ENUM;
  headCellStyle: string;
  cellStyle: string;
  onClickHead?: () => void;
}

export interface IRow {
  id: string;
  [key: string]: { id: string; element: ReactElement; className?: string }; // key: TABLE_COLUMNS_ENUM
}
