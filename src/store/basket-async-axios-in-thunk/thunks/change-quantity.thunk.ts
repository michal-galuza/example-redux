import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/api.client";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

interface IChangeQuantityProductHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface IChangeQuantityProductHttpResponse {
  products: IChangeQuantityProductHttpResponseItem[];
  id: string;
}
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

  const { data } = await apiClient.patch<IChangeQuantityProductHttpResponse>(
    `/basket/${encodeURIComponent(basketId)}`,
    payload
  );
  return { basket: data.products, id: data.id };
});
