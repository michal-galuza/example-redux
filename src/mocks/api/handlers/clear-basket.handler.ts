import { rest } from "msw";
import { createBasketEndpoint } from "../helpers/create-basket-endpoint.helper";
import { parseParams } from "../helpers/parseParams";
import { LSRepositoryInstance } from "../repositories/ls.repository";


export const clearBasketHandler = rest.delete(
  createBasketEndpoint("/:basketId/clear"),
  (req, res, ctx) => {
    const basketId = parseParams(req.params.basketId);

    if (!basketId) {
      return res(ctx.status(404));
    }
    const basket = LSRepositoryInstance.getBasket(basketId);

    basket.products = [];

    LSRepositoryInstance.updateBasket(basket);
    return res(ctx.status(200), ctx.body(JSON.stringify(basket)));
  }
);
