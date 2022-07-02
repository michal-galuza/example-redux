export enum ToDoSortTypesEnum {
  BY_NAME = "BY_NAME",
  BY_VALUE = "BY_VALUE",
}

export interface IToDoEntity {
  title: string;
  description: string;
  value: number;
}

export interface IToDoState {
  todos: IToDoEntity[];
  sortedBy: ToDoSortTypesEnum;
}
