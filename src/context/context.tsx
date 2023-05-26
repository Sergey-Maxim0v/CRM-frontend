import { createContext, Dispatch, SetStateAction } from "react";
import { IClient } from "../api/types";

export interface IContext {
  filter: string | undefined;
  setFilter: (val: string | undefined) => void;
  refetch: () => Promise<void>;
  clientsData: IClient[];
  setClientsData: Dispatch<SetStateAction<IClient[]>>;
  isLoading: boolean;
}

export const Context = createContext<IContext>({
  filter: undefined,
  setFilter: () => {
    return;
  },
  refetch: () => new Promise<void>(() => undefined),
  clientsData: [],
  isLoading: false,
  setClientsData: () => [],
});
