import { IClient, INewClient } from "./types";
import axios from "axios";
import { CONTACTS_SAVE_NEW_URL } from "./api-url";

const saveNewClient = async (client: IClient) => {
  const dataForSend: INewClient = {
    name: client.name,
    lastName: client.lastName,
    surname: client.surname,
    contacts: client.contacts,
  };
  const controller = new AbortController();

  const cancel = () => controller.abort();

  const res = await axios.post<IClient>(CONTACTS_SAVE_NEW_URL, dataForSend, {
    signal: controller.signal,
  });

  return {
    savedClient: res.data,
    cancel,
  };
};

export default saveNewClient;
