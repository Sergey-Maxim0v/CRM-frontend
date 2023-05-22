import { useEffect, useState } from "react";
import getContacts from "../api/getContacts";
import { IClient } from "../api/types";

const useGetContacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<IClient[]>([]);

  const refetch = async () => {
    setIsLoading(true);

    await getContacts()
      .then((response) => {
        if (response) {
          setData(response);
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

    // eslint-disable-next-line
  }, []);

  return { refetch, isLoading, isError, data };
};

export default useGetContacts;
