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
  width?: number;
  onClickHead?: () => void;
}

export interface IRow {
  id: string;
  cells: {
    [key in TABLE_COLUMNS_ENUM]: ICell;
  };
}

export interface ICell {
  id: string;
  element: ReactElement;
  className?: string;
}
