export interface IGetDateTimeStrings {
  date: string;
  time: string;
}

const getDateTimeStrings = (date: Date): IGetDateTimeStrings => {
  const dateObj = new Date(date);

  const month =
    dateObj.getMonth() > 9 ? dateObj.getMonth() : `0${dateObj.getMonth()}`;

  const day = `${dateObj.getDate()}.${month}.${dateObj.getFullYear()}`;
  const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;

  return {
    date: day,
    time: time,
  };
};

export default getDateTimeStrings;
