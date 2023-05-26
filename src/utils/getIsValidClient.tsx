import { IClient, IContact } from "../api/types";

const getIsValidClient = (client: IClient): boolean => {
  if (!client.name || !client.surname) {
    return false;
  }

  if (client.contacts && client.contacts.length) {
    const noValidContact = client.contacts?.find(
      (contact: IContact) => !contact.value || !contact.type
    );
    return !noValidContact;
  }

  return true;
};

export default getIsValidClient;
