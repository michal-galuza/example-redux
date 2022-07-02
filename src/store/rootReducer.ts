import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter-reducer";
import { toDoReducer } from "./todo/todo.reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  todo: toDoReducer,
});
