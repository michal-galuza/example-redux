import { apiClient } from "../../../../api/api.client";
import { IBasketAsyncState } from "../../basket-async.state";
import {
  IAddProductParams,
  IBasketApi,
  IClearBasketParams,
  IEditProductParams,
  IRemoveProductParams,
} from "../basket-async.api-inteface";
import { IBasketAsyncHttpResponse } from "../responses/basket-http.response";
import { IChangeQuantityProductHttpResponse } from "../responses/change-quantity.http-response";
import { IClearBasketHttpResponse } from "../responses/clear-basket.http-response";
import { IRemoveProductHttpResponse } from "../responses/remove-product.http-response";
import { BasketAsyncApiProviderMapper } from "./basket-async-api-provider.mapper";

export class BasketAsyncApiProvider implements IBasketApi {
  private readonly apiClient = apiClient;

  public async addProduct(
    params: IAddProductParams
  ): Promise<IBasketAsyncState> {
    const res = await this.apiClient.post<IBasketAsyncHttpResponse>(
      `/basket/${encodeURIComponent(params.basketId)}`,
      params
    );

    return BasketAsyncApiProviderMapper.mapAddProductResponseToBasketState(
      res.data
    );
  }

  public async removeProduct(
    params: IRemoveProductParams
  ): Promise<IBasketAsyncState> {
    const res = await this.apiClient.delete<IRemoveProductHttpResponse>(
      `/basket/${encodeURIComponent(params.basketId)}/${encodeURIComponent(
        params.productId
      )}`
    );

    return BasketAsyncApiProviderMapper.mapRemoveProductResponseToBasketState(
      res.data
    );
  }

  public async changeQuantityProduct(
    params: IEditProductParams
  ): Promise<IBasketAsyncState> {
    const res = await this.apiClient.patch<IChangeQuantityProductHttpResponse>(
      `/basket/${encodeURIComponent(params.basketId)}`,
      params
    );

    return BasketAsyncApiProviderMapper.mapChangeQuantityProductResponseToBasketState(
      res.data
    );
  }

  public async clearBasket(
    params: IClearBasketParams
  ): Promise<IBasketAsyncState> {
    const res = await this.apiClient.delete<IClearBasketHttpResponse>(
      `/basket/${encodeURIComponent(params.basketId)}/clear`
    );
    return BasketAsyncApiProviderMapper.mapClearBasketResponseToBasketState(
      res.data
    );
  }
}
