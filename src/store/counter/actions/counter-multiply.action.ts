import { IAction } from "../../action";
import { CounterActionsNamesEnum } from "./counter-actions-names.enum";

export interface ICounterMultiplyActionPayload {
  value: number;
}

export interface ICounterMultiplyAction
  extends IAction<
    typeof CounterActionsNamesEnum.MULTIPLY,
    ICounterMultiplyActionPayload
  > {}

export const counterMultiplyAction = (
  payload: ICounterMultiplyActionPayload
): ICounterMultiplyAction => ({
  type: CounterActionsNamesEnum.MULTIPLY,
  payload,
});
