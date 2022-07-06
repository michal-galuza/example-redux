import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

export interface IAddProductThunkPayload {
  productId: string;
  quantity: number;
}

export const addProductThunk = createAsyncThunk<
  IBasketState,
  IAddProductThunkPayload,
  ThunkOptions
>(BasketAsyncThunkNameEnum.ADD, async (payload, thunkAPI) => {
  const {
    basketAsync: { id: basketId },
  } = thunkAPI.getState();

  const data = await thunkAPI.extra.apiProviders.basketApi.addProduct({
    basketId,
    ...payload,
  });

  return data;
});
