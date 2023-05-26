import { IClient } from "./types";
import getIsValidClient from "../utils/getIsValidClient";
import axios from "axios";
import { CONTACTS_UPDATE_URL } from "./api-url";

const updateClient = async (client: IClient) => {
  const isValidClient = getIsValidClient(client);

  if (!isValidClient) {
    console.error("Client object no valid");
    return;
  }

  return await axios.patch<IClient>(CONTACTS_UPDATE_URL + client.id, client);
};

export default updateClient;
