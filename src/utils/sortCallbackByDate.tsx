const sortCallbackByDate = ({
  time1,
  time2,
  direction,
}: {
  time1: string;
  time2: string;
  direction: boolean;
}): number => {
  const getTime = (str: string) => {
    const date = new Date(str);
    return date.getTime();
  };

  if (direction) {
    return getTime(time1) - getTime(time2);
  } else {
    return getTime(time2) - getTime(time1);
  }
};

export default sortCallbackByDate;
