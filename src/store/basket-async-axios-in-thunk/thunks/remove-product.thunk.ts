import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/api.client";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

interface IRemoveProductHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface IRemoveProductHttpResponse {
  products: IRemoveProductHttpResponseItem[];
  id: string;
}

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

  const { data } = await apiClient.delete<IRemoveProductHttpResponse>(
    `/basket/${encodeURIComponent(basketId)}/${encodeURIComponent(
      payload.productId
    )}`
  );

  return { basket: data.products, id: data.id };
});
