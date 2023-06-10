import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import Table from "../../ui-kit/table";
import { IRow } from "../../ui-kit/table/types";
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
  const [sortedBy, setSortedBy] = useState<ISort>({
    type: SORT_ENUM.id,
    direction: true,
  });

  const { columns } = useGetColumns({ sortedBy, setSortedBy });

  const getFilteredSortedRows = (): IRow[] | undefined => {
    if (!rows.length) {
      return undefined;
    }

    const sortedRows = getSortedRows({ rows, sortedBy });

    return sortedRows.filter((row) => filterRowsByHeader({ row, filter }));
  };

  const filteredSortedRows = getFilteredSortedRows();

  useEffect(() => {
    setRows(getRows({ data }));
  }, [data]);

  const getNoListMessage = () => {
    if (filter && !filteredSortedRows?.length) {
      return "По Вашему запросу ничего не найдено. Попробуйте изменить критерии поиска.";
    }

    if (!filteredSortedRows?.length) {
      return "Список клиентов пуст.";
    }

    return "";
  };

  const getErrorMessage = () => {
    if (isError) {
      return "Ошибка загрузки списка клиентов";
    }
    return "";
  };

  return (
    <Table
      rows={filteredSortedRows ?? []}
      columns={columns}
      tableHeadStyle={styles.head}
      tableRowStyle={styles.row}
      tableStyle={styles.table}
      tableBodyStyle={styles.body}
      isLoading={isLoadingClients}
      errorMessage={getErrorMessage()}
      noListMessage={getNoListMessage()}
    />
  );
};

export default TableClients;
