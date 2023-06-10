import styles from "./styles.module.scss";
import HeaderLogo from "../header-logo";
import HeaderInput from "../header-input";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import useDebounce from "../../hooks/useDebounce";

const Header = () => {
  const { filter, setFilter } = useContext(Context);

  const [value, setValue] = useState(filter);

  const debouncedValue = useDebounce(value, 500);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setFilter(debouncedValue);

    // eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <a href="/" className={styles.logo}>
          <HeaderLogo />
        </a>

        <HeaderInput
          className={styles.input}
          value={value ?? ""}
          onChange={onChange}
        />
      </div>
    </header>
  );
};

export default Header;
