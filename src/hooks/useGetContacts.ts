import { useEffect, useState } from "react";
import getContacts from "../api/getContacts";
import { IClient } from "../api/types";

const useGetContacts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<IClient[]>([]);
  const [cancel, setCancel] = useState<() => void>();

  // TODO: разделить refetch и первую загрузку

  const refetch = async () => {
    setIsLoading(true);

    await getContacts()
      .then((response) => {
        if (response) {
          setData(response.data);
          setCancel(response.cancel);
        } else {
          console.error("ERROR GET CONTACTS: no data");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.error("ERROR GET CONTACTS:::", error);
      });
  };

  useEffect(() => {
    refetch().catch((error) =>
      console.error("Error refetch clients:::", error)
    );

    return () => {
      cancel?.();
    };

    // eslint-disable-next-line
  }, []);

  return { refetch, isLoading, isError, data };
};

export default useGetContacts;
