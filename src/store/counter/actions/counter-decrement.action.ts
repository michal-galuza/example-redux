import { IAction } from "../../action";
import { CounterActionsNamesEnum } from "./counter-actions-names.enum";

export interface ICounterDecrementAction
  extends IAction<typeof CounterActionsNamesEnum.DECREMENT, undefined> {}

export const counterDecrementAction = (): ICounterDecrementAction => ({
  type: CounterActionsNamesEnum.DECREMENT,
  payload: undefined,
});
