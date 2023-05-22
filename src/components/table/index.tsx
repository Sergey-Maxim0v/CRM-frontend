import { FC } from "react";
import { ITable } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Loader from "../loader";

const Table: FC<ITable> = ({
  columns,
  rows,
  tableStyle,
  tableRowStyle,
  tableHeadStyle,
  tableBodyStyle,
  isLoading,
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
        {isLoading ? (
          <Loader className={styles.loader} />
        ) : (
          rows.map((row) => (
            <tr className={tableRowStyle}>
              {columns.map((column) => (
                <td className={classNames(column.rowStyle)}>
                  {row[column.rowKey]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
