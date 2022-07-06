import { IBasketApi } from "./basket-async-thunk/api/basket-async.api-inteface";
import { BasketAsyncApiProvider } from "./basket-async-thunk/api/providers/basket-async-api.provider";


export interface IApiProviders {
  basketApi: IBasketApi;
}

export const apiProviders: IApiProviders = {
  basketApi: new BasketAsyncApiProvider(),
};

export const createApiProviders = (
  customApiProviders?: IApiProviders
): IApiProviders => ({ ...apiProviders, ...customApiProviders });
