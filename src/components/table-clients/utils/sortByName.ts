import { IRow } from "../../table/types";
import { Dispatch, SetStateAction } from "react";

const sortByName = ({
  direction,
  rows,
  setRows,
}: {
  direction: boolean;
  rows: IRow[];
  setRows: Dispatch<SetStateAction<IRow[] | undefined>>;
}) => {
  const getName = (row: IRow) =>
    `${row.client.surname}${row.client.name}${row.client.lastName ?? ""}`;

  if (direction) {
    const sortedRows = rows.sort((row1, row2) => getName(row1) - getName(row2));
    setRows(sortedRows);
  } else {
    const sortedRows = rows.sort((row1, row2) => getName(row2) - getName(row1));
    setRows(sortedRows);
  }
};

export default sortByName;
