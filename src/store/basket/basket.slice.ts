import { createSlice } from "@reduxjs/toolkit";
import { RootStoreType } from "../types";
import { IAddProduct } from "./actions/add-prodcuct.action";
import { IEditQuantityProduct } from "./actions/edit-quantity-product.action";
import { IRemoveProduct } from "./actions/remove-product.action";
import { basketInitialState, IBasketItem } from "./basket.state";

const basketSlice = createSlice({
  initialState: basketInitialState,
  name: "basket",
  reducers: {
    addProduct: (state, { payload }: IAddProduct) => {
      const totalPrice = payload.quantity * payload.price;
      state.basket.push({ ...payload, totalPrice });
    },
    editQuantityProduct: (state, { payload }: IEditQuantityProduct) => {
      const productIndex = state.basket.findIndex((p) => p.id === payload.id);

      if (productIndex < 0) {
        return;
      }

      const product: IBasketItem = {
        ...state.basket[productIndex],
        quantity: payload.quantity,
      };

      product.totalPrice = product.quantity * product.price;

      state.basket[productIndex] = product;
    },
    removeProduct: (state, { payload: { id } }: IRemoveProduct) => {
      state.basket = state.basket.filter((p) => p.id !== id);
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const { addProduct, editQuantityProduct, removeProduct, clearBasket } =
  basketSlice.actions;

export const baskteStateSelector = (state: RootStoreType) => state.basket;

export default basketSlice.reducer;
