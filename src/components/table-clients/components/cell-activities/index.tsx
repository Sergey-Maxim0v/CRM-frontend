import { FC, useState } from "react";
import { ICellActivities } from "./types";
import styles from "./styles.module.scss";
import ButtonActivities from "../../../button-activities";
import { BUTTON_ACTIVITIES_ENUM } from "../../../button-activities/types";

const CellActivities: FC<ICellActivities> = ({ client }) => {
  const [isLoadUpdate, setIsLoadUpdate] = useState(false);
  const [isLoadDelete, setIsLoadDelete] = useState(false);

  const onUpdate = () => {
    // TODO
  };

  const onDelete = () => {
    // TODO
  };

  return (
    <div className={styles.row}>
      <ButtonActivities
        type={BUTTON_ACTIVITIES_ENUM.update}
        onClick={() => onUpdate()}
        className={styles.button}
        isLoad={isLoadUpdate}
      >
        Изменить
      </ButtonActivities>

      <ButtonActivities
        type={BUTTON_ACTIVITIES_ENUM.delete}
        onClick={() => onDelete()}
        className={styles.button}
        isLoad={isLoadDelete}
      >
        Удалить
      </ButtonActivities>
    </div>
  );
};

export default CellActivities;
