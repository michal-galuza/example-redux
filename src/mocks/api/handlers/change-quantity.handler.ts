import { rest } from "msw";
import { createBasketEndpoint } from "../helpers/create-basket-endpoint.helper";
import { parseParams } from "../helpers/parseParams";
import { LSRepositoryInstance } from "../repositories/ls.repository";
import { ProductsRepositoryInstance } from "../repositories/products.repository";

interface IChangeQuantityProductBody {
  productId: string;
  quantity: number;
}

export const changeQuantityProductHandler =
  rest.patch<IChangeQuantityProductBody>(
    createBasketEndpoint("/:basketId"),
    (req, res, ctx) => {
      const { productId, quantity } = req.body;
      const basketId = parseParams(req.params.basketId);

      if (!basketId) {
        return res(ctx.status(404));
      }

      const basket = LSRepositoryInstance.getBasket(basketId);

      const product = ProductsRepositoryInstance.findProduct(productId);

      if (!product) {
        return res(ctx.status(404));
      }

      const basketProductIndex = basket.products.findIndex(
        (p) => p.id === productId
      );

      if (basketProductIndex < 0) {
        return res(ctx.status(404));
      }
      const basketProduct = basket.products[basketProductIndex];
      const newQuantity =  quantity;

      basket.products[basketProductIndex] = {
        ...basketProduct,
        quantity: newQuantity,
        price: product.price * newQuantity,
      };

      LSRepositoryInstance.updateBasket(basket);
      return res(ctx.status(200), ctx.body(JSON.stringify(basket)));
    }
  );
