import { useEffect, useState } from "react";
import getContacts from "../api/getContacts";
import { IClient } from "../api/types";

const useGetContacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<IClient[]>([]);
  const [cancel, setCancel] = useState<() => void>();

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
