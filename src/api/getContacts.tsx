import axios from "axios";
import {CONTACTS_GET_URL} from "./api-url";
import {IContact} from "./types";

const getContacts = async () => await axios.get<IContact[]>(CONTACTS_GET_URL)

export default getContacts
