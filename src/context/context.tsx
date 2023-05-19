import { createContext } from "react";

export interface IContext {
  filter: string | undefined;
  setFilter: (val: string | undefined) => void;
}

export const Context = createContext<IContext>({
  filter: undefined,
  setFilter: () => {
    return;
  },
});
