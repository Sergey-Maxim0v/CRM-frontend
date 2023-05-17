import {useEffect, useState} from "react";
import getContacts from "../../api/getContacts";
import FETCH_STATUS from "../../enums/fetch-status";
import {IContact} from "../../api/types";

export interface IUseGetContacts {
    status: FETCH_STATUS
    data?: IContact[]
}

const useGetContacts = (): IUseGetContacts => {
    const [status, setStatus] = useState<FETCH_STATUS>(FETCH_STATUS.load)
    const [data, setData] = useState<IContact[]>()

    useEffect(() => {
        getContacts().then(response => {
            if (response.data) {
                setData(response.data)
                setStatus(FETCH_STATUS.success)
            } else {
                setStatus(FETCH_STATUS.error)
                console.error('ERROR GET CONTACTS: no data')
            }
        }).catch(error => {
            setStatus(FETCH_STATUS.error)
            console.error('ERROR GET CONTACTS:::', error)
        })
    }, [])

    return {status, data}
}

export default useGetContacts