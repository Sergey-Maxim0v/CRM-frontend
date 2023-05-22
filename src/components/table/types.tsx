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
  rowCellStyle: string;
  cellStyle: string;
  onClickHead?: () => void;
}

export interface IRow {
  [key: string]: { element: ReactElement; className?: string };
}
