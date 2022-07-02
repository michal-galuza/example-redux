import { IAction } from "../../action";
import { createAction } from "../../action-creator";
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
): ICounterPowByValueAction =>
  createAction(CounterActionsNamesEnum.POW_BY_VALUE, payload);
