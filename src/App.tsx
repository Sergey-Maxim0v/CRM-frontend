import { useEffect, useState } from "react";
import Header from "./components/header";
import Content from "./components/content";
import { Context, IContext } from "./context/context";
import { IClient } from "./api/types";
import useGetContacts from "./hooks/useGetContacts";

function App() {
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [clientsData, setClientsData] = useState<IClient[]>([]);

  const { refetch, isLoading, isError, data } = useGetContacts();

  const contextValue: IContext = {
    filter,
    setFilter,
    refetch,
    clientsData,
  };

  useEffect(() => setClientsData(data), [data]);

  return (
    <Context.Provider value={contextValue}>
      <Header />
      <Content />
    </Context.Provider>
  );
}

export default App;
