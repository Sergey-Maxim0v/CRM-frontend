import { ChangeEvent } from "react";

export interface IHeaderInput {
  className?: string;
  value: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
}
