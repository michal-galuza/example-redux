import { CounterActionsNamesEnum } from "./actions/counter-actions-names.enum";
import { ICounterIncrementAction } from "./actions/counter-increment.action";

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

export const counterReducer = (
  state: ICounterState = initialState,
  action: ICounterIncrementAction
): ICounterState => {
  switch (action.type) {
    case CounterActionsNamesEnum.INCREMENT:
      return { value: state.value + 1 };
    case CounterActionsNamesEnum.DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
