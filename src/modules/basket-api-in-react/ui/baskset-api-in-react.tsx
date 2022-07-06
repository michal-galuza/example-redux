import { apiClient } from "../../../api/api.client";
import { productMocks } from "../../../mocks/products";
import {
  baskteApiInReactStateSelector,
  updateBasket,
} from "../../../store/basket-api-in-react/basket-api-in-react.slice";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { BasketItem } from "../../shared-components/basket-item";
import { ProductItem } from "../../shared-components/product-item";
import { IAddProductHttpResponse } from "../response-types/add-product.response";
import { IChangeQuantityProductHttpResponse } from "../response-types/change-quantity.response";
import { IClearBasketHttpResponse } from "../response-types/clear-basket.response";
import { IRemoveProductHttpResponse } from "../response-types/remove-product.response";

export const BasketInReact = (): JSX.Element => {
  const { basket, id: basketId } = useAppSelector(
    baskteApiInReactStateSelector
  );

  const dispatch = useAppDispatch();

  const handleAddProduct = async (params: {
    productId: string;
    quantity: number;
  }) => {
    const { data } = await apiClient.post<IAddProductHttpResponse>(
      `/basket/${encodeURIComponent(basketId)}`,
      params
    );

    dispatch(updateBasket({ basket: data.products, id: data.id }));
  };

  const handleQuantityChange = async (params: {
    productId: string;
    quantity: number;
  }) => {
    const { data } = await apiClient.patch<IChangeQuantityProductHttpResponse>(
      `/basket/${encodeURIComponent(basketId)}`,
      params
    );
    dispatch(updateBasket({ basket: data.products, id: data.id }));
  };

  const handleRemoveProduct = async (productId: string) => {
    const { data } = await apiClient.delete<IRemoveProductHttpResponse>(
      `/basket/${encodeURIComponent(basketId)}/${encodeURIComponent(productId)}`
    );
    dispatch(updateBasket({ basket: data.products, id: data.id }));
  };

  const handleClearBasket = async () => {
    const { data } = await apiClient.delete<IClearBasketHttpResponse>(
      `/basket/${encodeURIComponent(basketId)}/clear`
    );

    dispatch(updateBasket({ basket: data.products, id: data.id }));
  };

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "20px",
      }}
    >
      <h1>Basket API In REACT</h1>
      <div>
        <h1>Product list</h1>
        {productMocks.map((product) => (
          <ProductItem
            key={product.id}
            price={product.price}
            productId={product.id}
            title={product.title}
            onAddProduct={handleAddProduct}
          />
        ))}
      </div>
      <div>
        <h1>Basket</h1>
        {basket.map((product) => (
          <BasketItem
            onQuantityChange={handleQuantityChange}
            onRemoveProduct={handleRemoveProduct}
            price={product.price}
            productId={product.id}
            totalPrice={product.totalPrice}
            title={product.title}
            quantity={product.quantity}
            key={product.id}
          />
        ))}
        <div>
          Clear basket
          <br />
          <button
            style={{ background: "red" }}
            type="button"
            onClick={handleClearBasket}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
