import { IClient } from "./types";
import axios from "axios";
import { CONTACTS_UPDATE_URL } from "./api-url";

const updateClient = async (client: IClient) => {
  return await axios.patch<IClient>(CONTACTS_UPDATE_URL + client.id, client);
};

export default updateClient;
