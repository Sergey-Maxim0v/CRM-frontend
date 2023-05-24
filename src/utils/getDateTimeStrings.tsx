export interface IGetDateTimeStrings {
  date: string;
  time: string;
}

const getDateTimeStrings = (date: Date): IGetDateTimeStrings => {
  if (
    isNaN(date.getDate()) ||
    isNaN(date.getMonth()) ||
    isNaN(date.getFullYear()) ||
    isNaN(date.getHours()) ||
    isNaN(date.getMinutes())
  ) {
    console.warn("invalid date:::", date.toString());
    return { date: "", time: "" };
  }

  const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;

  const day = `${date.getDate()}.${month}.${date.getFullYear()}`;
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return { date: day, time: time };
};

export default getDateTimeStrings;
