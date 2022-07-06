import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../api/api.client";
import { IBasketState } from "../../basket/basket.state";
import { ThunkOptions } from "../../types";
import { BasketAsyncThunkNameEnum } from "./basket-async-thunk-names.enum";

interface IAddProductHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface IAddProductHttpResponse {
  products: IAddProductHttpResponseItem[];
  id: string;
}

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
    basketAsyncThunk: { id: basketId },
  } = thunkAPI.getState();

  // Polecam używanie minimum apiClient w takim przypadku, leszpe to niż przezpośrednio axios
  const { data } = await apiClient.post<IAddProductHttpResponse>(
    `/basket/${encodeURIComponent(basketId)}`,
    payload
  );

  return { basket: data.products, id: data.id };
});
