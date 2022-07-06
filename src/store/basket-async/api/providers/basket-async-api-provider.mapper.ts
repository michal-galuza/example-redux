import { IBasketAsyncState } from "../../basket-async.state";
import { IAddProductHttpResponse } from "../responses/add-product.http-response";
import { IChangeQuantityProductHttpResponse } from "../responses/change-quantity.http-response";
import { IClearBasketHttpResponse } from "../responses/clear-basket.http-response";
import { IRemoveProductHttpResponse } from "../responses/remove-product.http-response";

export class BasketAsyncApiProviderMapper {
  static mapAddProductResponseToBasketState(
    data: IAddProductHttpResponse
  ): IBasketAsyncState {
    return { basket: data.products, id: data.id };
  }

  static mapRemoveProductResponseToBasketState(
    data: IRemoveProductHttpResponse
  ): IBasketAsyncState {
    return { basket: data.products, id: data.id };
  }

  static mapChangeQuantityProductResponseToBasketState(
    data: IChangeQuantityProductHttpResponse
  ): IBasketAsyncState {
    return { basket: data.products, id: data.id };
  }

  static mapClearBasketResponseToBasketState(
    data: IClearBasketHttpResponse
  ): IBasketAsyncState {
    return { basket: data.products, id: data.id };
  }
}
