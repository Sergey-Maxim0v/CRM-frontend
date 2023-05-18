export interface IContact {
    id: string // ID клиента, заполняется сервером автоматически, после создания нельзя изменить
    createdAt: string // дата и время создания клиента, заполняется сервером автоматически, после создания нельзя изменить
    updatedAt: string // дата и время изменения клиента, заполняется сервером автоматически при изменении клиента
    name: string // * обязательное поле, имя клиента
    surname: string // * обязательное поле, фамилия клиента
    lastName?: string // необязательное поле, отчество клиента
    contacts?: ILink[]  // контакты - необязательное поле, массив контактов
}

export interface ILink {
    // должен содержать непустые свойства type и value
    type: string
    value: string
}

export type INewContact = Omit<IContact, 'id' | 'createdAt' | 'updatedAt'>;

export interface IServerErrorMessage {
    field: string // Название поля объекта, в котором произошла ошибка
    message: string // Сообщение об ошибке, которое можно показать пользователю
}