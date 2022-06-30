import { IAction } from "../../action";
import { CounterActionsNamesEnum } from "./counter-actions-names.enum";

export interface ICounterPoweByValueActionPayload {
  value: number;
}

export interface ICounterPowByValueAction
  extends IAction<
    typeof CounterActionsNamesEnum.POW_BY_VALUE,
    ICounterPoweByValueActionPayload
  > {}

export const counterPowByValueAction = (
  payload: ICounterPoweByValueActionPayload
): ICounterPowByValueAction => ({
  type: CounterActionsNamesEnum.POW_BY_VALUE,
  payload,
});
