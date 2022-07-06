import { createSlice } from "@reduxjs/toolkit";
import { RootStoreType } from "../types";
import { basketAsyncInitialState } from "./basket-async.state";
import { addProductThunk } from "./thunks/add-product.thunk";
import { changeQuantityProductThunk } from "./thunks/change-quantity.thunk";
import { clearBasketThunk } from "./thunks/clear-basket.thunk";
import { removeProductThunk } from "./thunks/remove-product.thunk";

const basketAsyncSlice = createSlice({
  initialState: basketAsyncInitialState,
  name: "basket-async",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addProductThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
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

export const baskteStateSelector = (state: RootStoreType) => state.basket;

export default basketAsyncSlice.reducer;
