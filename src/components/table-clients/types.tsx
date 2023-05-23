export interface IHeadCell {
  sorted: boolean;
  arrow: ARROW_ENUM.up | undefined;
}

export enum ARROW_ENUM {
  up = "arrowUp",
  down = "arrowDown",
}
