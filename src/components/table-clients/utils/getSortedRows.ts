import { IRow } from "../../../ui-kit/table/types";
import { ISort, SORT_ENUM } from "../types";
import sortById from "./sortById";
import sortByName from "./sortByName";
import sortByCreatedAt from "./sortByCreatedAt";
import sortByUpdatedAt from "./sortByUpdatedAt";

const getSortedRows = ({
  rows,
  sortedBy,
}: {
  rows: IRow[];
  sortedBy: ISort;
}) => {
  const { type, direction } = sortedBy;

  switch (type) {
    case SORT_ENUM.id:
      return sortById({ rows, direction });
    case SORT_ENUM.name:
      return sortByName({ rows, direction });
    case SORT_ENUM.create:
      return sortByCreatedAt({ rows, direction });
    case SORT_ENUM.update:
      return sortByUpdatedAt({ rows, direction });
  }
};

export default getSortedRows;
