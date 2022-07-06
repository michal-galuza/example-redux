import { IBasketAsyncState } from "../basket-async.state";

export interface IAddProductParams {
  basketId: string;
  productId: string;
  quantity: number;
}

export interface IRemoveProductParams {
  basketId: string;
  productId: string;
}

export interface IEditProductParams {
  basketId: string;
  productId: string;
  quantity: number;
}

export interface IClearBasketParams {
  basketId: string;
}

export interface IBasketApi {
  addProduct: (params: IAddProductParams) => Promise<IBasketAsyncState>;
  removeProduct: (params: IRemoveProductParams) => Promise<IBasketAsyncState>;
  changeQuantityProduct: (
    params: IEditProductParams
  ) => Promise<IBasketAsyncState>;
  clearBasket: (params: IClearBasketParams) => Promise<IBasketAsyncState>;
}
