import { CounterActionsNamesEnum } from "./actions/counter-actions-names.enum";
import { ICounterDecrementAction } from "./actions/counter-decrement.action";
import { ICounterDivideAction } from "./actions/counter-divide.action";
import { ICounterIncrementAction } from "./actions/counter-increment.action";
import { ICounterMultiplyAction } from "./actions/counter-multiply.action";
import { ICounterPowByValueAction } from "./actions/counter-pow-by-value.action";
import { ICounterPowAction } from "./actions/counter-pow.action";

type Action =
  | ICounterIncrementAction
  | ICounterDecrementAction
  | ICounterPowByValueAction
  | ICounterPowAction
  | ICounterDivideAction
  | ICounterMultiplyAction;

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

export const counterReducer = (
  state: ICounterState = initialState,
  action: Action
): ICounterState => {
  switch (action.type) {
    case CounterActionsNamesEnum.INCREMENT:
      return { value: state.value + 1 };
    case CounterActionsNamesEnum.DECREMENT:
      return { value: state.value - 1 };
    case CounterActionsNamesEnum.POW:
      return { value: state.value * state.value };
    case CounterActionsNamesEnum.POW_BY_VALUE:
      return { value: Math.pow(state.value, action.payload.value) };
    case CounterActionsNamesEnum.DIVIDE:
      return { value: state.value / action.payload.value };
    case CounterActionsNamesEnum.MULTIPLY:
      return { value: state.value * action.payload.value };
    default:
      return state;
  }
};
