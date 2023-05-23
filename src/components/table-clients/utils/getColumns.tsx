import { IColumn } from "../../table/types";
import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";
import styles from "../styles.module.scss";
import HeadCellId from "../components/head-cell-id";
import { ARROW_ENUM } from "../types";

const getColumns = (): IColumn[] => {
  // TODO: sort functions

  return [
    {
      headChildren: <HeadCellId sorted={false} arrow={ARROW_ENUM.up} />,
      rowKey: TABLE_COLUMNS_ENUM.id,
      headCellStyle: styles.columnHeadCellId,
      cellStyle: styles.columnRowCellId,
      onClickHead: () => {
        // TODO: sort by id
      },
    },
  ];
};

export default getColumns;
