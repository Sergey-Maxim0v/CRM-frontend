import { INewClient } from "../api/types";

const validateNewClient = (client: INewClient): boolean => {
  if (!client.name || !client.surname) {
    return false;
  }

  const noValidContact = client.contacts.find((el) => !el.value || !el.type);

  return !noValidContact;
};

export default validateNewClient;
