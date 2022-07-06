import { apiClient } from "../../../../api/api.client";
import { IBasketState } from "../../basket.state";
import { IBasketApi } from "../basket.api";
import { IAddProductHttpRequest } from "./types/add-product.http-interface";

export abstract class ApiAbstract {
  protected client = apiClient;
}

export class ApiProvider extends ApiAbstract implements IBasketApi {
  private static instance: ApiProvider;

  public static getInstance(): ApiProvider {
    if (!ApiProvider.instance) {
      ApiProvider.instance = new ApiProvider();
    }

    return ApiProvider.instance;
  }

  async addProduct(request: IAddProductHttpRequest): Promise<IBasketState> {
    return {
      basket: [
        {
          id: "product",
          price: 123,
          quantity: 2,
          title: "das",
          totalPrice: 20,
        },
      ],
      id: request.basketId,
    };
  }
}
export const a = 1;
