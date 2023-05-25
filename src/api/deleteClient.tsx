import { IClient } from "./types";
import axios from "axios";
import { CONTACTS_DELETE_URL } from "./api-url";

const deleteClient = async (client: IClient) =>
  await axios.delete<IClient>(CONTACTS_DELETE_URL + client.id);

export default deleteClient;
