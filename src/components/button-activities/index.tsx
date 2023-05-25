import { FC, PropsWithChildren } from "react";
import { BUTTON_ACTIVITIES_ENUM, IButtonActivities } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Loader from "../loader";
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const ButtonActivities: FC<PropsWithChildren<IButtonActivities>> = ({
  children,
  type,
  className,
  onClick,
  isLoad,
}) => {
  const Icon: FC = () =>
    type === BUTTON_ACTIVITIES_ENUM.update ? (
      <ComponentsSVG type={SVG_TYPES.edit} className={styles.icon} />
    ) : (
      <ComponentsSVG type={SVG_TYPES.delete} className={styles.icon} />
    );

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
          className={classNames(
            styles.loader,
            styles.icon,
            {
              [styles.update]: type === BUTTON_ACTIVITIES_ENUM.update,
            },
            {
              [styles.delete]: type === BUTTON_ACTIVITIES_ENUM.delete,
            }
          )}
        />
      ) : (
        <Icon />
      )}

      {children}
    </button>
  );
};

export default ButtonActivities;
