import { IAction } from "../../action";
import { CounterActionsNamesEnum } from "./counter-actions-names.enum";

export interface ICounterPowAction
  extends IAction<typeof CounterActionsNamesEnum.POW, undefined> {}

export const counterPowAction = (): ICounterPowAction => ({
  type: CounterActionsNamesEnum.POW,
  payload: undefined,
});
