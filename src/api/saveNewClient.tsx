import { IClient, INewClient } from "./types";
import axios from "axios";
import { CONTACTS_SAVE_NEW_URL } from "./api-url";
import validateNewClient from "../utils/validateNewClient";

const saveNewClient = async (client: INewClient) => {
  const isValidClient = validateNewClient(client);

  if (!isValidClient) {
    console.error("Client object no valid");
    return;
  }

  return await axios.post<IClient>(CONTACTS_SAVE_NEW_URL, client);
};

export default saveNewClient;
