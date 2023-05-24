import { IClient } from "../../../api/types";
import { ICell, IRow } from "../../table/types";
import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";
import styles from "../styles.module.scss";
import CellId from "../components/cell-id";
import CellName from "../components/cell-name";
import CellDate from "../components/cell-date";
import { CELL_DATE_ENUM } from "../components/cell-date/types";

const getRows = (data: IClient[]): IRow[] =>
  data.reduce((result: IRow[], client) => {
    const idCell: ICell = {
      id: `cell-id-${client.id}`,
      element: <CellId id={client.id} />,
      className: styles.bodyCell__id,
    };

    const nameCell: ICell = {
      id: `cell-name-${client.id}`,
      element: <CellName client={client} />,
      className: styles.bodyCell__name,
    };

    const createCell: ICell = {
      id: `cell-create-${client.id}`,
      element: <CellDate client={client} type={CELL_DATE_ENUM.create} />,
      className: styles.bodyCell__create,
    };

    const changedCell: ICell = {
      id: `cell-changed-${client.id}`,
      element: <CellDate client={client} type={CELL_DATE_ENUM.create} />,
      className: styles.bodyCell__changed,
    };

    const contactsCell: ICell = {
      id: `cell-contacts-${client.id}`,
      element: <>// TODO: cell-contacts</>,
      className: styles.bodyCell__contacts,
    };

    const actionsCell: ICell = {
      id: `cell-actions-${client.id}`,
      element: <>// TODO: cell-activities</>,
      className: styles.bodyCell__actions,
    };

    const row: IRow = {
      id: `row-${client.id}`,
      cells: {
        [TABLE_COLUMNS_ENUM.id]: idCell,
        [TABLE_COLUMNS_ENUM.name]: nameCell,
        [TABLE_COLUMNS_ENUM.create]: createCell,
        [TABLE_COLUMNS_ENUM.changed]: changedCell,
        [TABLE_COLUMNS_ENUM.contacts]: contactsCell,
        [TABLE_COLUMNS_ENUM.actions]: actionsCell,
      },
    };

    return result.concat(row);
  }, []);

export default getRows;
