import { FC } from "react";
import { CELL_DATE_ENUM, ICellDate } from "./types";
import styles from "./styles.module.scss";
import getDateTimeStrings from "../../../../utils/getDateTimeStrings";

const CellDate: FC<ICellDate> = ({ client, type }) => {
  const currentDateObj =
    type === CELL_DATE_ENUM.create
      ? new Date(client.createdAt)
      : new Date(client.updatedAt);

  const { date, time } = getDateTimeStrings(currentDateObj);

  return (
    <>
      <span className={styles.date}>{date}</span>
      <span className={styles.time}>{time}</span>
    </>
  );
};

export default CellDate;
