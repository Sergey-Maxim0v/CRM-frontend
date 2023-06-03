import { IRow } from "../../table/types";
import sortStringCallback from "../../../utils/sortStringCallback";

const sortById = ({
  direction,
  rows,
}: {
  direction: boolean;
  rows: IRow[];
}): IRow[] => {
  if (direction) {
    return rows.sort((row1, row2) =>
      sortStringCallback(row2.client.id, row1.client.id)
    );
  } else {
    return rows.sort((row1, row2) =>
      sortStringCallback(row1.client.id, row2.client.id)
    );
  }
};

export default sortById;
