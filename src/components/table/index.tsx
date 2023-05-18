import {FC, useContext, useState} from "react";
import {Context} from "../../context/context";
import useGetContacts from "../../hooks/useGetContacts";
import FETCH_STATUS from "../../enums/fetch-status";
import {IContact} from "../../api/types";

const Table:FC = () => {
    const {filter} = useContext(Context)

    const [status, setStatus] = useState<FETCH_STATUS>(FETCH_STATUS.load)
    const [data, setData] = useState<IContact[]>()

    useGetContacts({setStatus, setData})

    return (
        <>
            // TODO: table
        </>
    )
}

export default Table