import { IRow } from "../../../assets/ui-kit/table/types";

const filterRowsByHeader = ({
  row,
  filter,
}: {
  row: IRow;
  filter: string | undefined;
}): boolean => {
  const client = row.client;
  const contacts = client.contacts;

  if (!filter) {
    return true;
  }

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
      contact.value.toUpperCase().includes(filter?.toUpperCase())
    )
  );
};

export default filterRowsByHeader;
