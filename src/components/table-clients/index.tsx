import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../context/context";
import Table from "../table";
import { IColumn, IRow } from "../table/types";
import styles from "./styles.module.scss";
import getColumns from "./utils/getColumns";
import getRows from "./utils/getRows";
import filterRowsByHeader from "./utils/filterRowsByHeader";

const TableClients: FC = () => {
  const { filter, clientsData, isLoading, isError } = useContext(Context);
  const [rows, setRows] = useState<IRow[]>([]);
  const [filteredRows, setFilteredRows] = useState<IRow[]>([]);

  const columns: IColumn[] = useMemo(() => getColumns(), []);

  const filterRows = (id: string) =>
    setRows((pref) => pref.filter((row) => row.client.id !== id));

  useEffect(() => {
    setRows(getRows({ data: clientsData, filterRows }));
  }, [clientsData]);

  useEffect(() => {
    if (filter) {
      setFilteredRows(
        rows.filter((row) => filterRowsByHeader({ row, filter }))
      );
    } else {
      setFilteredRows(rows);
    }
  }, [filter, rows]);

  return (
    <Table
      rows={filteredRows}
      columns={columns}
      tableHeadStyle={styles.head}
      tableRowStyle={styles.row}
      tableStyle={styles.table}
      tableBodyStyle={styles.body}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default TableClients;
