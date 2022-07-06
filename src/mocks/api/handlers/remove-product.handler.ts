import { rest } from "msw";
import { createBasketEndpoint } from "../helpers/create-basket-endpoint.helper";
import { parseParams } from "../helpers/parseParams";
import { LSRepositoryInstance } from "../repositories/ls.repository";


export const removeProductHandler = rest.delete(
  createBasketEndpoint("/:basketId/:productId"),
  (req, res, ctx) => {
    const basketId = parseParams(req.params.basketId);
    const productId = parseParams(req.params.productId);
    if (!basketId || !productId) {
      return res(ctx.status(404));
    }
    const basket = LSRepositoryInstance.getBasket(basketId);

    basket.products = basket.products.filter(
      (product) => product.id !== productId
    );

    LSRepositoryInstance.updateBasket(basket);
    return res(ctx.status(200), ctx.body(JSON.stringify(basket)));
  }
);
