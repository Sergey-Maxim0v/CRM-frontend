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
    <div className={classNames(styles.table, tableStyle)}>
      <div className={classNames(styles.tableHead, tableHeadStyle)}>
        {columns.map((column) => (
          <div
            key={`head-cell-${column.rowKey}`}
            onClick={() => column.onClickHead}
            className={classNames(column.headCellStyle, styles.tableHeadCell)}
            style={
              column.width
                ? {
                    width: `${column.width}px`,
                    minWidth: `${column.width}px`,
                    maxWidth: `${column.width}px`,
                  }
                : {}
            }
          >
            {column.headChildren}
          </div>
        ))}
      </div>

      <div className={classNames(styles.tableBody, tableBodyStyle)}>
        {isLoading && <Loader className={styles.loader} />}

        {!isLoading && !rows.length ? (
          <div className={styles.noRowMessage}>Список клиентов пуст.</div>
        ) : (
          rows.map((row) => (
            <div
              key={`row-${row.id}`}
              className={classNames(tableRowStyle, styles.tableRow)}
            >
              {columns.map((column) => (
                <div
                  key={`${row.cells[column.rowKey].id}-${column.rowKey}`}
                  className={classNames(
                    column.cellStyle,
                    row.cells[column.rowKey].className,
                    styles.tableRowCell
                  )}
                  style={
                    column.width
                      ? {
                          width: `${column.width}px`,
                          minWidth: `${column.width}px`,
                          maxWidth: `${column.width}px`,
                        }
                      : {}
                  }
                >
                  {row.cells[column.rowKey]?.element}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Table;
