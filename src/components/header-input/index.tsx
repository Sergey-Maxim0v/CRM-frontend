import {IHeaderInput} from "./types";
import {ChangeEvent, FC, useCallback, useContext} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";
import {Context} from "../../context/context";

const HeaderInput: FC<IHeaderInput> = ({className}) => {
    const {setFilter} = useContext(Context)

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
        // eslint-disable-next-line
    }, [])

    return (
        <label className={classNames(className, styles.label)}>
            <input
                type="text"
                className={classNames(styles.input)}
                onChange={event => onChange(event)}
                placeholder="Введите запрос"
            />
        </label>
    )
}

export default HeaderInput