import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import Table from "../table";
import { IRow } from "../table/types";
import styles from "./styles.module.scss";
import getRows from "./utils/getRows";
import filterRowsByHeader from "./utils/filterRowsByHeader";
import { ISort, SORT_ENUM } from "./types";
import useGetColumns from "../../hooks/useGetColumns";
import getSortedRows from "./utils/getSortedRows";

const TableClients: FC = () => {
  const {
    filter,
    isLoadingClients,
    clientsData: data,
    isError,
  } = useContext(Context);

  const [rows, setRows] = useState<IRow[]>([]);
  const [filteredSortedRows, setFilteredSortedRows] = useState<IRow[]>();
  const [errorMessage, setErrorMessage] = useState("");
  const [noListMessage, setNoListMessage] = useState("");
  const [sortedBy, setSortedBy] = useState<ISort>({
    type: SORT_ENUM.name,
    direction: true,
  });

  const { columns } = useGetColumns({ sortedBy, setSortedBy });

  useEffect(() => {
    const filterRowsOnDelete = (id: string) =>
      setRows((prev) => prev.filter((row) => row.client.id !== id));
    setRows(getRows({ data, filterRowsOnDelete: filterRowsOnDelete }));
  }, [data]);

  useEffect(() => {
    if (filteredSortedRows) {
      console.log(
        1,
        filteredSortedRows?.reduce(
          (res, row) => res.concat(row.client.id.slice(2, 6)),
          []
        )
      );
    }
  }, [filteredSortedRows]);

  useEffect(() => {
    console.log(2, sortedBy);
  }, [sortedBy]);

  useEffect(() => {
    const sortedRows = getSortedRows({ rows, sortedBy });

    if (filter && rows.length) {
      const rowsForRender = sortedRows.filter((row) =>
        filterRowsByHeader({ row, filter })
      );

      setFilteredSortedRows(rowsForRender);
      return;
    }

    if (rows.length) {
      setFilteredSortedRows(sortedRows);
      return;
    }

    setFilteredSortedRows(undefined);
  }, [filter, rows, sortedBy]);

  useEffect(() => {
    if (filteredSortedRows && !filteredSortedRows.length) {
      setNoListMessage("Список клиентов пуст");
    } else {
      setNoListMessage("");
    }
  }, [filteredSortedRows]);

  useEffect(() => {
    if (isError) {
      setErrorMessage("Ошибка загрузки списка клиентов");
    } else {
      setErrorMessage("");
    }
  }, [isError]);

  return (
    <Table
      rows={filteredSortedRows ?? []}
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
