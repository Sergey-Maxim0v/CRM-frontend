import { IRow } from "../../table/types";

const filterRowsByHeader = ({
  row,
  filter,
}: {
  row: IRow;
  filter: string;
}): boolean => {
  const client = row.client;
  const contacts = client.contacts;

  if (
    `${client.name} ${client.surname} ${client.lastName}`
      .toUpperCase()
      .includes(filter.toUpperCase())
  ) {
    return true;
  }

  return !!(
    contacts &&
    contacts.find((contact) =>
      contact.value.toUpperCase().includes(filter.toUpperCase())
    )
  );
};

export default filterRowsByHeader;