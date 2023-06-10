import styles from "./styles.module.scss";
import { FC, PropsWithChildren } from "react";

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={styles.title}>{children} </h1>;
};

export default PageTitle;
