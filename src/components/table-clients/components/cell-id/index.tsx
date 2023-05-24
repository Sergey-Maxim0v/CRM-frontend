import { FC } from "react";
import { ICellId } from "./types";
import styles from "./styles.module.scss";

const CellId: FC<ICellId> = ({ id }) => {
  return <span className={styles.cellId}>{id}</span>;
};

export default CellId;
