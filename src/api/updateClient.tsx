import { IClient, INewClient } from "./types";
import validateNewClient from "../utils/validateNewClient";
import axios from "axios";
import { CONTACTS_UPDATE_URL } from "./api-url";

const updateClient = async (client: IClient) => {
  const clientForValidate: INewClient = {
    name: client.name,
    lastName: client.lastName,
    surname: client.surname,
    contacts: client.contacts ?? [],
  };
  const isValidClient = validateNewClient(clientForValidate);

  if (!isValidClient) {
    console.error("Client object no valid");
    return;
  }

  return await axios.patch<IClient>(CONTACTS_UPDATE_URL + client.id, client);
};

export default updateClient;
