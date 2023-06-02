import { IRow } from "../../table/types";
import { Dispatch, SetStateAction } from "react";
import sortCallbackByDate from "../../../utils/sortCallbackByDate";

const sortByCreatedAt = ({
  direction,
  rows,
  setRows,
}: {
  direction: boolean;
  rows: IRow[];
  setRows: Dispatch<SetStateAction<IRow[] | undefined>>;
}) => {
  const sortedRows = rows.sort((row1, row2) =>
    sortCallbackByDate({
      time1: row1.client.createdAt,
      time2: row2.client.createdAt,
      direction,
    })
  );

  setRows(sortedRows);
};

export default sortByCreatedAt;
