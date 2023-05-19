import axios from "axios";
import { CONTACTS_GET_URL } from "./api-url";
import { IClient } from "./types";

const getContacts = async () => await axios.get<IClient[]>(CONTACTS_GET_URL);

export default getContacts;
