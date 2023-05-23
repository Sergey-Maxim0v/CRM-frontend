import styles from "./styles.module.scss";
import HeaderLogo from "../header-logo";
import HeaderInput from "../header-input";
import { ChangeEvent, useContext } from "react";
import { Context } from "../../context/context";

const Header = () => {
  const { filter, setFilter } = useContext(Context);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <a href="/" className={styles.logo}>
          <HeaderLogo />
        </a>

        <HeaderInput
          className={styles.input}
          value={filter ?? ""}
          onChange={onChange}
        />
      </div>
    </header>
  );
};

export default Header;
