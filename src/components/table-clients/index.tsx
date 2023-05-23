import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../context/context";
import Table from "../table";
import { IColumn, IRow } from "../table/types";
import styles from "./styles.module.scss";
import getColumns from "./utils/getColumns";

const TableClients: FC = () => {
  const { filter, clientsData, isLoading } = useContext(Context);
  const [rows, setRows] = useState<IRow[]>([]);

  const columns: IColumn[] = useMemo(() => getColumns(), []);

  useEffect(() => {
    const tableRows: IRow[] = []; // TODO: function create rows
    setRows(tableRows);
  }, []);

  useEffect(() => {
    // TODO: filter rows
    setRows([]);
  }, [filter]);

  return (
    <Table
      rows={rows}
      columns={columns}
      tableHeadStyle={styles.head}
      tableRowStyle={styles.row}
      tableStyle={styles.table}
      tableBodyStyle={styles.body}
      isLoading={isLoading}
    />
  );
};

export default TableClients;