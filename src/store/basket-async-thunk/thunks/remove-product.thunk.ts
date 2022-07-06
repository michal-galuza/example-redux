import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

export interface IRemoveProductThunkPayload {
  productId: string;
}

export const removeProductThunk = createAsyncThunk<
  IBasketState,
  IRemoveProductThunkPayload,
  ThunkOptions
>(BasketAsyncThunkNameEnum.REMOVE, async (payload, thunkAPI) => {
  const {
    basketAsyncThunk: { id: basketId },
  } = thunkAPI.getState();

  const data = await thunkAPI.extra.apiProviders.basketApi.removeProduct({
    basketId,
    ...payload,
  });

  return data;
});
