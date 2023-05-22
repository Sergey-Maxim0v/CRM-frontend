import { FC, useContext, useState } from "react";
import { Context } from "../../context/context";
import useGetContacts from "../../hooks/useGetContacts";
import FETCH_STATUS from "../../enums/fetch-status";
import { IClient } from "../../api/types";

const TableClients: FC = () => {
  const { filter } = useContext(Context);

  const [status, setStatus] = useState<FETCH_STATUS>(FETCH_STATUS.load);
  const [data, setData] = useState<IClient[]>();

  useGetContacts({ setStatus, setData });

  console.log(data);

  return <>// TODO: TableClients</>;
};

export default TableClients;
