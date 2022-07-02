import { IAction } from "../../action";
import { createAction } from "../../action-creator";
import { CounterActionsNamesEnum } from "./counter-actions-names.enum";

export interface ICounterIncrementAction
  extends IAction<typeof CounterActionsNamesEnum.INCREMENT, undefined> {}

export const counterIncrementAction = (): ICounterIncrementAction =>
  createAction(CounterActionsNamesEnum.INCREMENT, undefined);
