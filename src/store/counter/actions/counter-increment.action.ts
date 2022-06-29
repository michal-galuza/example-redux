import { IAction } from "../../action";
import { CounterActionsNamesEnum } from "./counter-actions-names.enum";

export interface ICounterIncrementAction
  extends IAction<CounterActionsNamesEnum, undefined> {}

export const counterIncrementAction = (): ICounterIncrementAction => ({
  type: CounterActionsNamesEnum.INCREMENT,
  payload: undefined,
});
