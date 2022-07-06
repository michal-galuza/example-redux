import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/api.client";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

interface IClearBasketHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface IClearBasketHttpResponse {
  products: IClearBasketHttpResponseItem[];
  id: string;
}

export const clearBasketThunk = createAsyncThunk<
  IBasketState,
  undefined,
  ThunkOptions
>(BasketAsyncThunkNameEnum.CLEAR_BASKET, async (_payload, thunkAPI) => {
  const {
    basketAsyncThunk: { id: basketId },
  } = thunkAPI.getState();

  const { data } = await apiClient.delete<IClearBasketHttpResponse>(
    `/basket/${encodeURIComponent(basketId)}/clear`
  );

  return { basket: data.products, id: data.id };
});
