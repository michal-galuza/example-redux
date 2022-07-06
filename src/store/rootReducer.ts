import { combineReducers } from "redux";
import { counterReducerToolkit } from "./counter-toolkit/counter.reducer";
import { counterReducer } from "./counter/counter-reducer";
import { toDoReducer } from "./todo/todo.reducer";
import basketReducer from "./basket/basket.slice";
import basketAsyncSliceReducer from "./basket-async/basket-async.slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: toDoReducer,
  counterToolkit: counterReducerToolkit,
  basket: basketReducer,
  basketAsync: basketAsyncSliceReducer,
});
