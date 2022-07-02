import { IAction } from "../../action";
import { createAction } from "../../action-creator";
import { ToDoSortTypesEnum } from "../todo";
import { ToDoActionsNamesEnum } from "./todo-actions-names.enum";

export interface IToDoSortActionPayload {
  value: ToDoSortTypesEnum;
}

export interface IToDoSortAction
  extends IAction<typeof ToDoActionsNamesEnum.SORT, IToDoSortActionPayload> {}

export const todoSortAction = (
  payload: IToDoSortActionPayload
): IToDoSortAction => createAction(ToDoActionsNamesEnum.SORT, payload);
