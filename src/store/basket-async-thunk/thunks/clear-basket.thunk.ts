import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

export const clearBasketThunk = createAsyncThunk<
  IBasketState,
  undefined,
  ThunkOptions
>(BasketAsyncThunkNameEnum.CLEAR_BASKET, async (_payload, thunkAPI) => {
  const {
    basketAsyncThunk: { id: basketId },
  } = thunkAPI.getState();

  const data = await thunkAPI.extra.apiProviders.basketApi.clearBasket({
    basketId,
  });

  return data;
});
