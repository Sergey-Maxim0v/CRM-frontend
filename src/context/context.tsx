import { createContext, Dispatch, SetStateAction } from "react";
import { IClient } from "../api/types";

export interface IContext {
  filter: string | undefined;
  setFilter: (val: string | undefined) => void;
  isLoadingClients: boolean;
  clientsData: IClient[];
  isError: boolean;
  refetch: () => Promise<void>;
  setClientsData: Dispatch<SetStateAction<IClient[]>>;
}

export const Context = createContext<IContext>({
  filter: undefined,
  setFilter: () => {
    return;
  },
  isLoadingClients: false,
  clientsData: [],
  isError: false,
  refetch: async () => {
    return;
  },
  setClientsData: () => {
    return;
  },
});
