import { combineReducers } from "redux";
import { counterReducerToolkit } from "./counter-toolkit/counter.reducer";
import { counterReducer } from "./counter/counter-reducer";
import { toDoReducer } from "./todo/todo.reducer";
import basketReducer from "./basket/basket.slice";
import { basketAsyncThunkReducer } from "./basket-async-thunk/basket-async-thunk.slice";
import { basketAsyncAxiosnInThunkReducer } from "./basket-async-axios-in-thunk/basket-async-axios-in-thunk.slice";
import { basketApiInReactReducer } from "./basket-api-in-react/basket-api-in-react.slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: toDoReducer,
  counterToolkit: counterReducerToolkit,
  basket: basketReducer,
  basketAsyncThunk: basketAsyncThunkReducer,
  basketAsyncAxiosInThunk: basketAsyncAxiosnInThunkReducer,
  basketApiInReact: basketApiInReactReducer,
});
