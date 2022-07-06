import { productMocks } from "../../../mocks/products";
import { baskteAsyncAxionsInThunkStateSelector } from "../../../store/basket-async-axios-in-thunk/basket-async-axios-in-thunk.slice";
import { addProductThunk } from "../../../store/basket-async-axios-in-thunk/thunks/add-product.thunk";
import { changeQuantityProductThunk } from "../../../store/basket-async-axios-in-thunk/thunks/change-quantity.thunk";
import { clearBasketThunk } from "../../../store/basket-async-axios-in-thunk/thunks/clear-basket.thunk";
import { removeProductThunk } from "../../../store/basket-async-axios-in-thunk/thunks/remove-product.thunk";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { BasketItem } from "../../shared-components/basket-item";
import { ProductItem } from "../../shared-components/product-item";

export const BasketAsyncAxiosInThunkThunk = () => {
  const { basket } = useAppSelector(baskteAsyncAxionsInThunkStateSelector);

  const dispatch = useAppDispatch();

  const handleAddProduct = async (params: {
    productId: string;
    quantity: number;
  }) => {
    await dispatch(addProductThunk(params));
  };

  const handleQuantityChange = async (params: {
    productId: string;
    quantity: number;
  }) => {
    await dispatch(changeQuantityProductThunk(params));
  };

  const handleRemoveProduct = async (productId: string) => {
    await dispatch(removeProductThunk({ productId }));
  };

  const handleClearBasket = async () => {
    await dispatch(clearBasketThunk());
  };

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "20px",
      }}
    >
      <h1>BasketAsyncThunk (AXIOS IN THUNK)</h1>
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
