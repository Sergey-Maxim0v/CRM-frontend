import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../context/context";
import Table from "../table";
import { IColumn, IRow } from "../table/types";
import styles from "./styles.module.scss";
import getColumns from "./utils/getColumns";
import getRows from "./utils/getRows";
import filterRowsByHeader from "./utils/filterRowsByHeader";

const TableClients: FC = () => {
  const {
    filter,
    isLoadingClients,
    clientsData: data,
    isError,
  } = useContext(Context);

  const [rows, setRows] = useState<IRow[]>([]);
  const [filteredRows, setFilteredRows] = useState<IRow[]>();
  const [errorMessage, setErrorMessage] = useState("");
  const [noListMessage, setNoListMessage] = useState("");

  const columns: IColumn[] = useMemo(() => getColumns(), []);

  const filterRows = (id: string) =>
    setRows((prev) => prev.filter((row) => row.client.id !== id));

  useEffect(() => {
    setRows(getRows({ data, filterRows }));
  }, [data]);

  useEffect(() => {
    if (filter && rows.length) {
      setFilteredRows(
        rows.filter((row) => filterRowsByHeader({ row, filter }))
      );
      return;
    }

    if (rows.length) {
      setFilteredRows(rows);
      return;
    }

    setFilteredRows(undefined);
  }, [filter, rows]);

  useEffect(() => {
    if (filteredRows && !filteredRows.length) {
      setNoListMessage("Список клиентов пуст");
    } else {
      setNoListMessage("");
    }
  }, [filteredRows]);

  useEffect(() => {
    if (isError) {
      setErrorMessage("Ошибка загрузки списка клиентов");
    }
  }, [isError]);

  return (
    <Table
      rows={filteredRows ?? []}
      columns={columns}
      tableHeadStyle={styles.head}
      tableRowStyle={styles.row}
      tableStyle={styles.table}
      tableBodyStyle={styles.body}
      isLoading={isLoadingClients}
      errorMessage={errorMessage}
      noListMessage={noListMessage}
    />
  );
};

export default TableClients;
