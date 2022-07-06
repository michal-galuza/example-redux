import { IBasketState } from "../basket.state";
import { IAddProductHttpRequest } from "./http/types/add-product.http-interface";

export interface IProduct {
  title: string;
  id: string;
  quantity: number;
  totalPrice: number;
  price: number;
}

export interface IBasketApi {
  addProduct: (request: IAddProductHttpRequest) => Promise<IBasketState>;

  //   removeProduct: (productId: string, basketId: string) => Promise<IBasketState>;

  //   editQuantity: (
  //     productId: string,
  //     quantity: number,
  //     basketId: string
  //   ) => Promise<IBasketState>;
}
