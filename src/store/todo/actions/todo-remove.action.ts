import { IAction } from "../../action";
import { createAction } from "../../action-creator";
import { ToDoActionsNamesEnum } from "./todo-actions-names.enum";

export interface IToDoRemoveActionPayload {
  value: number;
}

export interface IToDoRemoveAction
  extends IAction<
    typeof ToDoActionsNamesEnum.REMOVE,
    IToDoRemoveActionPayload
  > {}

export const todoRemoveAction = (
  payload: IToDoRemoveActionPayload
): IToDoRemoveAction => createAction(ToDoActionsNamesEnum.REMOVE, payload);
