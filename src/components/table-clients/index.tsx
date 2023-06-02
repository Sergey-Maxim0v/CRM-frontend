import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../context/context";
import Table from "../table";
import { IColumn, IRow } from "../table/types";
import styles from "./styles.module.scss";
import getColumns, { IIGetColumn } from "./utils/getColumns";
import getRows from "./utils/getRows";
import filterRowsByHeader from "./utils/filterRowsByHeader";
import { ISort, SORT_ENUM } from "./types";

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
  const [sortedBy, setSortedBy] = useState<ISort>({
    type: SORT_ENUM.id,
    direction: true,
  });

  console.log(sortedBy);

  const onSort = (type: SORT_ENUM) => {
    if (sortedBy.type === type) {
      setSortedBy((prev) => ({ ...prev, direction: !prev.direction }));
    } else {
      setSortedBy({ type, direction: true });
    }
  };

  const columnsProps: IIGetColumn = {
    sortedBy,
    sortById: () => onSort(SORT_ENUM.id),
    sortByName: () => onSort(SORT_ENUM.name),
    sortByCreate: () => onSort(SORT_ENUM.create),
    sortByUpdate: () => onSort(SORT_ENUM.update),
  };

  const columns: IColumn[] = useMemo(
    () => getColumns(columnsProps),
    [sortedBy]
  );

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

    // TODO: sort effect
  }, [filteredRows, sortedBy]);

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
