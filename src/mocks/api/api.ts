import { setupWorker } from "msw";
import { addProductHandler } from "./handlers/add-product.handler";
import { changeQuantityProductHandler } from "./handlers/change-quantity.handler";
import { clearBasketHandler } from "./handlers/clear-basket.handler";
import { removeProductHandler } from "./handlers/remove-product.handler";

export const worker = setupWorker(
  addProductHandler,
  changeQuantityProductHandler,
  removeProductHandler,
  clearBasketHandler
);
