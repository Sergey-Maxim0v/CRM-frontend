import { Dispatch, SetStateAction } from "react";
import { IRow } from "../../table/types";
import sortCallbackByDate from "../../../utils/sortCallbackByDate";

const sortByUpdatedAt = ({
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
      time1: row1.client.updatedAt,
      time2: row2.client.updatedAt,
      direction,
    })
  );

  setRows(sortedRows);
};

export default sortByUpdatedAt;
