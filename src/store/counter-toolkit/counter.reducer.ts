import { createReducer } from "@reduxjs/toolkit";
import { incrementAction } from "./actions/counter-increment.action";
import { counterInitialState } from "./counter-state";

export const counterReducerToolkit = createReducer(
  counterInitialState,
  (builder) => {
    builder.addCase(incrementAction, (state, _payload) => {
      state.value += 1;
    });
  }
);
