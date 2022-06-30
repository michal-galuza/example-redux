import { IAction } from "../../action";
import { CounterActionsNamesEnum } from "./counter-actions-names.enum";

export interface ICounterDivideActionPayload {
  value: number;
}

export interface ICounterDivideAction
  extends IAction<
    typeof CounterActionsNamesEnum.DIVIDE,
    ICounterDivideActionPayload
  > {}

export const counterDivideAction = (
  payload: ICounterDivideActionPayload
): ICounterDivideAction => ({
  type: CounterActionsNamesEnum.DIVIDE,
  payload,
});
