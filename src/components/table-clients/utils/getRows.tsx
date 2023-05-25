import { IClient } from "../../../api/types";
import { ICell, IRow } from "../../table/types";
import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";
import styles from "../styles.module.scss";
import CellId from "../components/cell-id";
import CellName from "../components/cell-name";
import CellDate from "../components/cell-date";
import { CELL_DATE_ENUM } from "../components/cell-date/types";
import CellContacts from "../components/cell-contacts";
import CellActivities from "../components/cell-activities";

export interface IGetRows {
  data: IClient[];
  filterRows: (val: string) => void;
}

const getRows = ({ data, filterRows }: IGetRows): IRow[] =>
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

    const updateCell: ICell = {
      id: `cell-update-${client.id}`,
      element: <CellDate client={client} type={CELL_DATE_ENUM.update} />,
      className: styles.bodyCell__update,
    };

    const contactsCell: ICell = {
      id: `cell-contacts-${client.id}`,
      element: <CellContacts client={client} />,
      className: styles.bodyCell__contacts,
    };

    const actionsCell: ICell = {
      id: `cell-actions-${client.id}`,
      element: <CellActivities client={client} filterRows={filterRows} />,
      className: styles.bodyCell__actions,
    };

    const row: IRow = {
      id: `row-${client.id}`,
      client: client,
      cells: {
        [TABLE_COLUMNS_ENUM.id]: idCell,
        [TABLE_COLUMNS_ENUM.name]: nameCell,
        [TABLE_COLUMNS_ENUM.create]: createCell,
        [TABLE_COLUMNS_ENUM.update]: updateCell,
        [TABLE_COLUMNS_ENUM.contacts]: contactsCell,
        [TABLE_COLUMNS_ENUM.actions]: actionsCell,
      },
    };

    return result.concat(row);
  }, []);

export default getRows;
