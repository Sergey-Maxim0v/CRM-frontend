import { TABLE_COLUMNS_ENUM } from "../../../enums/row-keys";

const getHeadCellText = (type: TABLE_COLUMNS_ENUM) => {
  switch (type) {
    case TABLE_COLUMNS_ENUM.id:
      return "ID";
    case TABLE_COLUMNS_ENUM.name:
      return "Фамилия Имя Отчество";
    case TABLE_COLUMNS_ENUM.create:
      return "Дата и время создания";
    case TABLE_COLUMNS_ENUM.update:
      return "Последние изменения";
    case TABLE_COLUMNS_ENUM.contacts:
      return "Контакты";
    case TABLE_COLUMNS_ENUM.actions:
      return "Действия";
    default:
      return "";
  }
};

export default getHeadCellText;
