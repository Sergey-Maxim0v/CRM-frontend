import { FC } from "react";
import { ITable } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import TableBodyFilling from "./components/table-body-filling";

const Table: FC<ITable> = ({
  columns,
  rows,
  tableStyle,
  tableRowStyle,
  tableHeadStyle,
  tableBodyStyle,
  isLoading,
  errorMessage,
  noListMessage,
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
        <TableBodyFilling
          rows={rows}
          columns={columns}
          isLoading={isLoading}
          tableRowStyle={tableRowStyle}
          errorMessage={errorMessage}
          noListMessage={noListMessage}
        />
      </div>
    </div>
  );
};

export default Table;
