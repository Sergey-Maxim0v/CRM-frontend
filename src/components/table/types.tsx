import { ReactElement } from "react";

export interface ITable {
  columns: IColumn[];
  rows: IRow[];
  tableStyle?: string;
  tableHeadStyle?: string;
  tableRowStyle?: string;
}

export interface IColumn {
  headChildren: ReactElement;
  rowKey: string;
  headStyle?: string;
  rowStyle?: string;
  onClickHead?: () => void;
}

export interface IRow {
  data: { [key: string]: ReactElement };
}
