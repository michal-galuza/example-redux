import { createSlice } from "@reduxjs/toolkit";
import { RootStoreType } from "../types";
import { basketAsyncAxiosInThunkInitialState } from "./basket-async-axios-in-thunk.state";
import { addProductThunk } from "./thunks/add-product.thunk";
import { changeQuantityProductThunk } from "./thunks/change-quantity.thunk";
import { clearBasketThunk } from "./thunks/clear-basket.thunk";
import { removeProductThunk } from "./thunks/remove-product.thunk";

const basketAsyncAxsiosInThunkcSlice = createSlice({
  initialState: basketAsyncAxiosInThunkInitialState,
  name: "basketAsyncAxiosInThunk",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addProductThunk.fulfilled, (state, { payload }) => {
        state.basket = payload.basket;
        state.id = payload.id;
      })
      .addCase(removeProductThunk.fulfilled, (state, { payload }) => {
        state.basket = payload.basket;
        state.id = payload.id;
      })
      .addCase(changeQuantityProductThunk.fulfilled, (state, { payload }) => {
        state.basket = payload.basket;
        state.id = payload.id;
      })
      .addCase(clearBasketThunk.fulfilled, (state, { payload }) => {
        state.basket = payload.basket;
        state.id = payload.id;
      });
  },
});

export const baskteAsyncAxionsInThunkStateSelector = (state: RootStoreType) =>
  state.basketAsyncAxiosInThunk;

export const basketAsyncAxiosnInThunkReducer =
  basketAsyncAxsiosInThunkcSlice.reducer;
