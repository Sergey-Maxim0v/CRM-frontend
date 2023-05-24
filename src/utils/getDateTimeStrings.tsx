export interface IGetDateTimeStrings {
  date: string;
  time: string;
}

const getTimeWithZero = (time: number) => (time > 9 ? time : `0${time}`);

const getDateTimeStrings = (date: Date): IGetDateTimeStrings => {
  if (
    isNaN(date.getDate()) ||
    isNaN(date.getMonth()) ||
    isNaN(date.getFullYear()) ||
    isNaN(date.getHours()) ||
    isNaN(date.getMinutes())
  ) {
    console.warn("invalid date:::", date.toString(), date);
    return { date: "", time: "" };
  }

  const month = getTimeWithZero(date.getMonth());
  const dayDate = getTimeWithZero(date.getDate());
  const hour = getTimeWithZero(date.getHours());
  const minute = getTimeWithZero(date.getMinutes());

  const day = `${dayDate}.${month}.${date.getFullYear()}`;
  const time = `${hour}:${minute}`;

  return { date: day, time: time };
};

export default getDateTimeStrings;
