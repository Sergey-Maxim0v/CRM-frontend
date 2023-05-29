import { useEffect, useState } from "react";
import Header from "./components/header";
import Content from "./components/content";
import { Context, IContext } from "./context/context";
import useGetContacts from "./hooks/useGetContacts";
import { IClient } from "./api/types";

function App() {
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [clientsData, setClientsData] = useState<IClient[]>([]);

  const {
    data,
    isLoading: isLoadingClients,
    isError,
    refetch,
  } = useGetContacts();

  const contextValue: IContext = {
    filter,
    setFilter,
    clientsData,
    isError,
    isLoadingClients,
    refetch,
    setClientsData,
  };

  useEffect(() => {
    setClientsData(data);
  }, [data]);

  return (
    <Context.Provider value={contextValue}>
      <Header />
      <Content />
    </Context.Provider>
  );
}

export default App;
