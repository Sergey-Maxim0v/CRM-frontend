import { IColumn } from "../../table/types";
import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";
import styles from "../styles.module.scss";
import HeadCell from "../components/head-cell";
import { ARROW_ENUM } from "../types";
import classNames from "classnames";

const getColumns = (): IColumn[] => {
  // TODO: sort functions
  const TODO_KOSTYL = true;

  return [
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.id}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      width: 82,
      rowKey: TABLE_COLUMNS_ENUM.id,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__id),
      cellStyle: classNames(styles.columnRowCell, styles.cell__id),
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
      width: 370,
      rowKey: TABLE_COLUMNS_ENUM.name,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__name),
      cellStyle: classNames(styles.columnRowCell, styles.cell__name),
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
      width: 196,
      rowKey: TABLE_COLUMNS_ENUM.create,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__create),
      cellStyle: classNames(styles.columnRowCell, styles.cell__create),
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
      width: 192,
      rowKey: TABLE_COLUMNS_ENUM.changed,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__changed),
      cellStyle: classNames(styles.columnRowCell, styles.cell__changed),
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
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__contacts),
      cellStyle: classNames(styles.columnRowCell, styles.cell__contacts),
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.actions}
          sorted={TODO_KOSTYL}
          arrow={TODO_KOSTYL ? undefined : ARROW_ENUM.up}
        />
      ),
      width: 220,
      rowKey: TABLE_COLUMNS_ENUM.actions,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__actions),
      cellStyle: classNames(styles.columnRowCell, styles.cell__actions),
    },
  ];
};

export default getColumns;
