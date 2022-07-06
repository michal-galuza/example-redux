import { createSlice } from "@reduxjs/toolkit";
import { RootStoreType } from "../types";
import { IUpdateBasketAction } from "./actions/update-basket.action";
import { basketApiInReactInitialState } from "./basket-api-in-react.state";

const basketApiInReactSlice = createSlice({
  initialState: basketApiInReactInitialState,
  name: "basketApiInReact",
  reducers: {
    updateBasket: (state, { payload }: IUpdateBasketAction) => {
      state.basket = payload.basket;
      state.id = payload.id;
    },
  },
});

export const { updateBasket } = basketApiInReactSlice.actions;

export const baskteApiInReactStateSelector = (state: RootStoreType) =>
  state.basketApiInReact;

export const basketApiInReactReducer = basketApiInReactSlice.reducer;
