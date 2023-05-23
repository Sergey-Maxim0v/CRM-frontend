export interface IHeadCell {
  sorted: boolean;
  arrow?: ARROW_ENUM.up;
}

export enum ARROW_ENUM {
  up = "arrowUp",
  down = "arrowDown",
}
