import axios from "axios";
import { CONTACTS_GET_URL } from "./api-url";
import { IClient } from "./types";

const getContacts = async (): Promise<IClient[]> => {
  const res = await axios.get<IClient[]>(CONTACTS_GET_URL);

  if (res.data) {
    return res.data as IClient[];
  }
};

export default getContacts;
