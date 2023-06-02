const sortStringCallback = (a: string, b: string): number => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
};

export default sortStringCallback;
