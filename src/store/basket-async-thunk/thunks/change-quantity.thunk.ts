import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

export interface IChangeQuantityProductThunkPayload {
  productId: string;
  quantity: number;
}

export const changeQuantityProductThunk = createAsyncThunk<
  IBasketState,
  IChangeQuantityProductThunkPayload,
  ThunkOptions
>(BasketAsyncThunkNameEnum.CHANGE_QUANTITY, async (payload, thunkAPI) => {
  const {
    basketAsyncThunk: { id: basketId },
  } = thunkAPI.getState();
  
  const data =
    await thunkAPI.extra.apiProviders.basketApi.changeQuantityProduct({
      basketId,
      ...payload,
    });

  return data;
});
