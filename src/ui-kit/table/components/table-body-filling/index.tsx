import styles from "../../styles.module.scss";
import Loader from "../../../loader";
import classNames from "classnames";
import { FC } from "react";
import { ITableBodyFilling } from "./types";

const TableBody: FC<ITableBodyFilling> = ({
  errorMessage,
  isLoading,
  noListMessage,
  rows,
  tableRowStyle,
  columns,
}) => {
  if (errorMessage) {
    return <div className={styles.noRowMessage}>{errorMessage}</div>;
  }

  if (isLoading) {
    return <Loader className={styles.loader} />;
  }

  if (noListMessage) {
    return <div className={styles.noRowMessage}>{noListMessage}</div>;
  }

  return (
    <>
      {rows?.map((row) => (
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
      ))}
    </>
  );
};

export default TableBody;
