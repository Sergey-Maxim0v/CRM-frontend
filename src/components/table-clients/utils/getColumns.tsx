import { IColumn } from "../../../ui-kit/table/types";
import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";
import styles from "../styles.module.scss";
import HeadCell from "../components/head-cell";
import { ARROW_ENUM, ISort, SORT_ENUM } from "../types";
import classNames from "classnames";

export interface IIGetColumn {
  sortedBy: ISort;
  sortById: () => void;
  sortByName: () => void;
  sortByCreate: () => void;
  sortByUpdate: () => void;
}

const getColumns = ({
  sortedBy,
  sortById,
  sortByName,
  sortByCreate,
  sortByUpdate,
}: IIGetColumn): IColumn[] => {
  const getArrowEnum = (type: SORT_ENUM): ARROW_ENUM | undefined => {
    if (type === sortedBy.type && sortedBy.direction) {
      return ARROW_ENUM.up;
    }
    if (type === sortedBy.type && !sortedBy.direction) {
      return ARROW_ENUM.down;
    }
    return undefined;
  };

  return [
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.id}
          sorted={true}
          arrow={getArrowEnum(SORT_ENUM.id)}
        />
      ),
      width: 130,
      rowKey: TABLE_COLUMNS_ENUM.id,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__id),
      cellStyle: classNames(styles.columnRowCell, styles.cell__id),
      onClickHead: sortById,
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.name}
          sorted={true}
          arrow={getArrowEnum(SORT_ENUM.name)}
        />
      ),
      rowKey: TABLE_COLUMNS_ENUM.name,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__name),
      cellStyle: classNames(styles.columnRowCell, styles.cell__name),
      onClickHead: sortByName,
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.create}
          sorted={true}
          arrow={getArrowEnum(SORT_ENUM.create)}
        />
      ),
      width: 196,
      rowKey: TABLE_COLUMNS_ENUM.create,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__create),
      cellStyle: classNames(styles.columnRowCell, styles.cell__create),
      onClickHead: sortByCreate,
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.update}
          sorted={true}
          arrow={getArrowEnum(SORT_ENUM.update)}
        />
      ),
      width: 192,
      rowKey: TABLE_COLUMNS_ENUM.update,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__update),
      cellStyle: classNames(styles.columnRowCell, styles.cell__update),
      onClickHead: sortByUpdate,
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.contacts}
          sorted={false}
          arrow={undefined}
        />
      ),
      width: 160,
      rowKey: TABLE_COLUMNS_ENUM.contacts,
      headCellStyle: classNames(styles.columnHeadCell, styles.cell__contacts),
      cellStyle: classNames(styles.columnRowCell, styles.cell__contacts),
    },
    {
      headChildren: (
        <HeadCell
          type={TABLE_COLUMNS_ENUM.actions}
          sorted={false}
          arrow={undefined}
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
