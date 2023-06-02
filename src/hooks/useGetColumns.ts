import { IColumn } from "../components/table/types";
import { Dispatch, SetStateAction, useMemo } from "react";
import { ISort, SORT_ENUM } from "../components/table-clients/types";
import getColumns, {
  IIGetColumn,
} from "../components/table-clients/utils/getColumns";

export interface IUseGetColumns {
  sortedBy: ISort;
  setSortedBy: Dispatch<SetStateAction<ISort>>;
}

const useGetColumns = ({
  sortedBy,
  setSortedBy,
}: IUseGetColumns): { columns: IColumn[] } => {
  const columns: IColumn[] = useMemo(() => {
    const onSort = (type: SORT_ENUM) => {
      if (sortedBy.type === type) {
        setSortedBy((prev) => ({ ...prev, direction: !prev.direction }));
      } else {
        setSortedBy({ type, direction: true });
      }
    };

    const columnsProps: IIGetColumn = {
      sortedBy,
      sortById: () => onSort(SORT_ENUM.id),
      sortByName: () => onSort(SORT_ENUM.name),
      sortByCreate: () => onSort(SORT_ENUM.create),
      sortByUpdate: () => onSort(SORT_ENUM.update),
    };

    return getColumns(columnsProps);

    // eslint-disable-next-line
  }, [sortedBy]);

  return { columns };
};

export default useGetColumns;
