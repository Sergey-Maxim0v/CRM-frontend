import { FC, PropsWithChildren } from "react";
import { BUTTON_ACTIVITIES_ENUM, IButtonActivities } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Loader from "../loader";

const ButtonActivities: FC<PropsWithChildren<IButtonActivities>> = ({
  children,
  type,
  className,
  onClick,
  isLoad,
}) => {
  const Icon = type === BUTTON_ACTIVITIES_ENUM.update ? <></> : <></>;

  return (
    <button
      onClick={() => onClick()}
      className={classNames(
        styles.button,
        className,
        {
          [styles.update]: type === BUTTON_ACTIVITIES_ENUM.update,
        },
        {
          [styles.delete]: type === BUTTON_ACTIVITIES_ENUM.delete,
        },
        {
          [styles.load]: isLoad,
        }
      )}
    >
      {isLoad ? (
        <Loader
          className={
            (styles.loader,
            {
              [styles.update]: type === BUTTON_ACTIVITIES_ENUM.update,
            },
            {
              [styles.delete]: type === BUTTON_ACTIVITIES_ENUM.delete,
            })
          }
        />
      ) : (
        Icon
      )}
      {children}
    </button>
  );
};

export default ButtonActivities;
