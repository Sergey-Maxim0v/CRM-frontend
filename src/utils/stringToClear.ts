const stringToClear = (str: string) =>
  str.replace(/^[^a-zA-Zа-яА-Я0-9]*$/g, "");

export default stringToClear;
