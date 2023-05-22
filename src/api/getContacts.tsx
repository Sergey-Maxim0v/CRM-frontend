import axios from "axios";
import { CONTACTS_GET_URL } from "./api-url";
import { IClient } from "./types";

const getContacts = async (): Promise<{
  data: IClient[];
  cancel: () => void;
}> => {
  const controller = new AbortController();

  const cancel = () => controller.abort();

  const res = await axios.get<IClient[]>(CONTACTS_GET_URL, {
    signal: controller.signal,
  });

  return {
    data: res.data as IClient[],
    cancel,
  };
};

export default getContacts;
