import { FC, useContext } from "react";
import { Context } from "../../context/context";
import Table from "../table";
import { IColumn, IRow } from "../table/types";
import styles from "./styles.module.scss";
import Loader from "../loader";

const TableClients: FC = () => {
  const { filter, clientsData, isLoading } = useContext(Context);

  const rows: IRow[] = [];
  const columns: IColumn[] = [];

  console.log(clientsData);

  return (
    <>
      {isLoading ? (
        <Loader className={styles.loader} />
      ) : (
        <Table
          rows={rows}
          columns={columns}
          tableHeadStyle={styles.head}
          tableRowStyle={styles.row}
          tableStyle={styles.table}
          tableBodyStyle={styles.body}
        />
      )}
    </>
  );
};

export default TableClients;
