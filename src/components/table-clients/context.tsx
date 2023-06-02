import { createContext, Dispatch, SetStateAction } from "react";
import { ISort, SORT_ENUM } from "./types";

export interface ITableContext {
  sortedBy: ISort;
  setSortedBy: Dispatch<SetStateAction<ISort>>;
}

export const TableContext = createContext<ITableContext>({
  sortedBy: { type: SORT_ENUM.id, direction: true },
  setSortedBy: () => {
    return;
  },
});
