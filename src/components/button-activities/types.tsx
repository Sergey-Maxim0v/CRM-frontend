export interface IButtonActivities {
  type: BUTTON_ACTIVITIES_ENUM;
  onClick: () => void;
  className?: string;
  isLoad?: boolean;
}

export enum BUTTON_ACTIVITIES_ENUM {
  update = "updateBtn",
  delete = "deleteBtn",
}
