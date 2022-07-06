import { IBasketHttp } from "./basket-http.interface";

export interface IAddProductHttpRequest {
  productId: string;
  quantity: number;
  basketId: string;
}

export interface IAddProductHttpResponse extends IBasketHttp {}
