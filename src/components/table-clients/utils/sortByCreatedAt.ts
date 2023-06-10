import { IRow } from "../../../assets/ui-kit/table/types";
import sortCallbackByDate from "../../../utils/sortCallbackByDate";

const sortByCreatedAt = ({
  direction,
  rows,
}: {
  direction: boolean;
  rows: IRow[];
}) =>
  rows.sort((row1, row2) =>
    sortCallbackByDate({
      time1: row1.client.createdAt,
      time2: row2.client.createdAt,
      direction,
    })
  );

export default sortByCreatedAt;
