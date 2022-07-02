import { IAction } from "../../action";
import { createAction } from "../../action-creator";
import { ToDoActionsNamesEnum } from "./todo-actions-names.enum";

export interface IToDoEditActionPayloadToDo {
  title: string;
  description: string;
  value: number;
}

export interface IToDoEditActionPayload {
  todo: IToDoEditActionPayloadToDo;
  index: number;
}

export interface IToDoEditAction
  extends IAction<typeof ToDoActionsNamesEnum.EDIT, IToDoEditActionPayload> {}

export const todoEditAction = (
  payload: IToDoEditActionPayload
): IToDoEditAction => createAction(ToDoActionsNamesEnum.EDIT, payload);
