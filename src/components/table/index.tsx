import { FC } from "react";
import { ITable } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Table: FC<ITable> = ({
  columns,
  rows,
  tableStyle,
  tableRowStyle,
  tableHeadStyle,
  tableBodyStyle,
}) => {
  return (
    <table className={classNames(styles.table, tableStyle)}>
      <thead className={classNames(styles.tableHead, tableHeadStyle)}>
        {columns.map((column) => (
          <th
            onClick={() => column.onClickHead}
            className={classNames(column.headStyle)}
          >
            {column.headChildren}
          </th>
        ))}
      </thead>

      <tbody className={classNames(styles.tableBody, tableBodyStyle)}>
        {rows.map((row) => (
          <tr className={tableRowStyle}>
            {columns.map((column) => (
              <td className={classNames(column.rowStyle)}>
                {row[column.rowKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
