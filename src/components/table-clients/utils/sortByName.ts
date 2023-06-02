import { IRow } from "../../table/types";
import sortStringCallback from "../../../utils/sortStringCallback";

const sortByName = ({
  direction,
  rows,
}: {
  direction: boolean;
  rows: IRow[];
}) => {
  const getName = (row: IRow) =>
    `${row.client.surname}${row.client.name}${row.client.lastName ?? ""}`;

  if (direction) {
    return rows.sort((row1, row2) =>
      sortStringCallback(getName(row1), getName(row2))
    );
  } else {
    return rows.sort((row1, row2) =>
      sortStringCallback(getName(row2), getName(row1))
    );
  }
};

export default sortByName;
