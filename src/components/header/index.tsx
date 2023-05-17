import styles from './styles.module.scss'
import HeaderLogo from "../header-logo";
import HeaderInput from "../header-input";

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <HeaderLogo/>
            </a>

            <HeaderInput className={styles.input}/>
        </header>
    )
}

export default Header