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

  return await axios.post<IClient>(CONTACTS_SAVE_NEW_URL, dataForSend);
};

export default saveNewClient;
