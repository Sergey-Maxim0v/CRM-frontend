import {useContext} from "react";
import {Context} from "../../context/context";
import useGetContacts from "../../assets/hooks/useGetContacts";

const Table = () => {
    const {filter} = useContext(Context)
    const {status, data} = useGetContacts()

    console.log('table data',status, data)

    return (
        <>
            table
        </>
    )
}

export default Table