import { IToDoEntity } from "../todo";

export const sortByNameCompareHelper = (
  todoOne: IToDoEntity,
  todoTwo: IToDoEntity
): number => todoOne.title.localeCompare(todoTwo.title);
