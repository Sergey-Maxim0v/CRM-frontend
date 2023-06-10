export interface ISelect {
  onChange: (val: ISelectTypeOption) => void;
  options: ISelectTypeOption[];
  value: ISelectTypeOption | undefined;
  className?: string;
}

export interface ISelectTypeOption {
  label: string;
  value: string;
}
