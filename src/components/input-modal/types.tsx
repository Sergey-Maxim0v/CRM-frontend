import { ChangeEvent } from "react";

export interface IInputModal
  extends Pick<
    HTMLInputElement,
    "className" | "type" | "placeholder" | "value" | "required"
  > {
  isError?: boolean;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
}
