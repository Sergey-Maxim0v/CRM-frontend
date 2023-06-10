import { IClient } from "./types";
import axios from "axios";
import { CONTACTS_UPDATE_URL } from "./api-url";

const updateClient = async (client: IClient) => {
  const controller = new AbortController();

  const cancel = () => controller.abort();

  const res = await axios.patch<IClient>(
    CONTACTS_UPDATE_URL + client.id,
    client,
    {
      signal: controller.signal,
    }
  );

  return {
    updatedClient: res.data,
    cancel,
  };
};

export default updateClient;
