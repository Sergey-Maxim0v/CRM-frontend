import styles from './styles.module.scss'
import {useContext} from "react";
import {Context} from "../../context/context";

const Header = () => {
    const {filter, setFilter} = useContext(Context)

    return (
        <header className={styles.header}>
            header
        </header>
    )
}

export default Header