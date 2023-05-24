import { FC } from "react";
import { ICellName } from "./types";
import styles from "./styles.module.scss";

const CellName: FC<ICellName> = ({ client }) => {
  const name = `${client.surname} ${client.name} ${client.lastName}`;

  return <span className={styles.cellName}>{name}</span>;
};

export default CellName;
