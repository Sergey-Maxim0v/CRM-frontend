import { IRow } from "../../table/types";
import sortCallbackByDate from "../../../utils/sortCallbackByDate";

const sortByUpdatedAt = ({
  direction,
  rows,
}: {
  direction: boolean;
  rows: IRow[];
}) =>
  rows.sort((row1, row2) =>
    sortCallbackByDate({
      time1: row1.client.updatedAt,
      time2: row2.client.updatedAt,
      direction,
    })
  );

export default sortByUpdatedAt;
