import { BasketAsyncApiProvider } from "./basket-async/api/providers/basket-async-api.provider";

export const apiProviders = {
  basketApi: new BasketAsyncApiProvider(),
};

export type IApiProviders = typeof apiProviders;

export const createApiProviders = (
  customApiProviders?: IApiProviders
): IApiProviders => ({ ...apiProviders, ...customApiProviders });
