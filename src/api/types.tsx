export interface IClient {
    id: string // ID клиента, заполняется сервером автоматически, после создания нельзя изменить
    createdAt: string // дата и время создания клиента, заполняется сервером автоматически, после создания нельзя изменить
    updatedAt: string // дата и время изменения клиента, заполняется сервером автоматически при изменении клиента
    name: string // * обязательное поле, имя клиента
    surname: string // * обязательное поле, фамилия клиента
    lastName?: string // необязательное поле, отчество клиента
    contacts?: IContact[]  // контакты - необязательное поле, массив контактов
}

export interface IContact {
    // должен содержать непустые свойства type и value
    type: string
    value: string
}

export type INewClient = Omit<IClient, 'id' | 'createdAt' | 'updatedAt'>;

export interface IServerErrorMessage {
    field: string // Название поля объекта, в котором произошла ошибка
    message: string // Сообщение об ошибке, которое можно показать пользователю
}