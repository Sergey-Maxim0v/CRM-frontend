import { FC } from "react";
import { ICellCreate } from "./types";
import styles from "./styles.module.scss";
import getDateTimeStrings from "../../../../utils/getDateTimeStrings";

const CellCreate: FC<ICellCreate> = ({ client }) => {
  const { date, time } = getDateTimeStrings(new Date(client.createdAt));

  return (
    <>
      <span className={styles.date}>{date}</span>
      <span className={styles.time}>{time}</span>
    </>
  );
};

export default CellCreate;
