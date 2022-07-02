import { IAction } from "../../action";
import { createAction } from "../../action-creator";
import { IToDoEntity } from "../todo";
import { ToDoActionsNamesEnum } from "./todo-actions-names.enum";

interface IToDoAddActionPayload extends IToDoEntity {}

export interface IToDoAddAction
  extends IAction<typeof ToDoActionsNamesEnum.ADD, IToDoAddActionPayload> {}

export const todoAddAction = (payload: IToDoAddActionPayload): IToDoAddAction =>
  createAction(ToDoActionsNamesEnum.ADD, payload);
