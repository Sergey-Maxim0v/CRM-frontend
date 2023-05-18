import {Dispatch, SetStateAction, useEffect} from "react";
import getContacts from "../api/getContacts";
import FETCH_STATUS from "../enums/fetch-status";
import {IClient} from "../api/types";

export interface IUseGetContacts {
    setStatus: Dispatch<SetStateAction<FETCH_STATUS>>
    setData: Dispatch<SetStateAction<IClient[]>>
}

const useGetContacts = ({setStatus, setData}: IUseGetContacts) => {
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
}

export default useGetContacts