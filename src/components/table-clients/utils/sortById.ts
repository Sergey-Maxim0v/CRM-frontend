import { Dispatch, SetStateAction } from "react";
import { IRow } from "../../table/types";
import sortStringCallback from "../../../utils/sortStringCallback";

const sortById = ({
  direction,
  rows,
  setRows,
}: {
  direction: boolean;
  rows: IRow[];
  setRows: Dispatch<SetStateAction<IRow[] | undefined>>;
}) => {
  if (direction) {
    const sortedRows = rows.sort((row1, row2) =>
      sortStringCallback(row1.client.id, row2.client.id)
    );
    setRows(sortedRows);
  } else {
    const sortedRows = rows.sort((row1, row2) =>
      sortStringCallback(row2.client.id, row1.client.id)
    );
    setRows(sortedRows);
  }
};

export default sortById;
