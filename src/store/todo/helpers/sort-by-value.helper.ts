import { IToDoEntity } from "../todo";

export const sortByValueCompareHelper = (
  todoOne: IToDoEntity,
  todoTwo: IToDoEntity
): number => todoOne.value - todoTwo.value;
