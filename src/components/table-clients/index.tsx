import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../context/context";
import Table from "../table";
import { IColumn, IRow } from "../table/types";
import styles from "./styles.module.scss";
import getColumns from "./utils/getColumns";
import getRows from "./utils/getRows";

const TableClients: FC = () => {
  const { filter, clientsData, isLoading } = useContext(Context);
  const [rows, setRows] = useState<IRow[]>([]);

  const columns: IColumn[] = useMemo(() => getColumns(), []);

  const filterRows = (id: string) =>
    setRows((pref) => pref.filter((row) => row.client.id !== id));

  useEffect(() => {
    setRows(getRows({ data: clientsData, filterRows }));
  }, [clientsData]);

  useEffect(() => {
    // TODO: filter rows by header
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
