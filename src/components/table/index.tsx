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
            onClick={() => column.onClickHead}
            className={classNames(column.headCellStyle)}
          >
            {column.headChildren}
          </div>
        ))}
      </div>

      <div className={classNames(styles.tableBody, tableBodyStyle)}>
        {isLoading && <Loader className={styles.loader} />}

        {!isLoading && !rows.length ? (
          <span>Список клиентов пуст.</span>
        ) : (
          rows.map((row) => (
            <div className={classNames(tableRowStyle, styles.tableRow)}>
              {columns.map((column) => (
                <div
                  className={classNames(
                    column.rowCellStyle,
                    row[column.rowKey].className,
                    styles.tableRowCell
                  )}
                >
                  {row[column.rowKey].element}
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
