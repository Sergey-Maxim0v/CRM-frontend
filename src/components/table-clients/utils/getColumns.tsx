import { IColumn } from "../../table/types";
import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";
import styles from "../styles.module.scss";
import HeadCell from "../components/head-cell";
import { ARROW_ENUM } from "../types";

const getColumns = (): IColumn[] => {
  // TODO: sort functions
  const TODO_KOSTYL = false;

  return [
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.id}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      rowKey: TABLE_COLUMNS_ENUM.id,
      headCellStyle: styles.columnHeadCellId,
      cellStyle: styles.columnRowCellId,
      onClickHead: () => {
        // TODO: sort by id
      },
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.name}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      rowKey: TABLE_COLUMNS_ENUM.name,
      headCellStyle: styles.columnHeadCellId,
      cellStyle: styles.columnRowCellId,
      onClickHead: () => {
        // TODO: sort by name
      },
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.create}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      rowKey: TABLE_COLUMNS_ENUM.create,
      headCellStyle: styles.columnHeadCellId,
      cellStyle: styles.columnRowCellId,
      onClickHead: () => {
        // TODO: sort by date of create
      },
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.changed}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      rowKey: TABLE_COLUMNS_ENUM.changed,
      headCellStyle: styles.columnHeadCellId,
      cellStyle: styles.columnRowCellId,
      onClickHead: () => {
        // TODO: sort by date of change
      },
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.contacts}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      rowKey: TABLE_COLUMNS_ENUM.contacts,
      headCellStyle: styles.columnHeadCellId,
      cellStyle: styles.columnRowCellId,
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.actions}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      rowKey: TABLE_COLUMNS_ENUM.actions,
      headCellStyle: styles.columnHeadCellId,
      cellStyle: styles.columnRowCellId,
    },
  ];
};

export default getColumns;
