import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import Table from "../../assets/ui-kit/table";
import { IRow } from "../../assets/ui-kit/table/types";
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
    type: SORT_ENUM.id,
    direction: true,
  });

  const { columns } = useGetColumns({ sortedBy, setSortedBy });

  useEffect(() => {
    setRows(getRows({ data }));
  }, [data]);

  useEffect(() => {
    if (!rows.length) {
      setFilteredSortedRows(undefined);
      return;
    }

    const sortedRows = getSortedRows({ rows, sortedBy });

    const filteredRows = sortedRows.filter((row) =>
      filterRowsByHeader({ row, filter })
    );

    setFilteredSortedRows(filteredRows);
  }, [filter, rows, sortedBy]);

  useEffect(() => {
    if (filter && !filteredSortedRows?.length) {
      setNoListMessage(
        "По Вашему запросу ничего не найдено. Попробуйте изменить критерии поиска."
      );
      return;
    }

    if (!filteredSortedRows?.length) {
      setNoListMessage("Список клиентов пуст.");
      return;
    }

    setNoListMessage("");

    // eslint-disable-next-line
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
