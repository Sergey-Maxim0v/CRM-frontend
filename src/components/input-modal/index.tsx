import styles from './styles.module.scss'
import {FC} from "react";
import classNames from "classnames";

const InputModal: FC<HTMLInputElement> = ({...props}) => {
    return (
        <label className={classNames(props.className, styles.label)}>
            <input
                {...props}
                className={styles.input}
                type={props.type ?? 'text'}
            />

            <span className={styles.placeholder}>
                    {props.placeholder}
            </span>
        </label>
    )
}

export default InputModal