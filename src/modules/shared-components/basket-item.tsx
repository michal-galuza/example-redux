import { useBasketItem } from "./use-basket-item";

interface IOnQuantityChangeParams {
  quantity: number;
  productId: string;
}

interface IBasketItemProps {
  title: string;
  price: number;
  productId: string;
  totalPrice: number;
  quantity: number;
  onQuantityChange: (params: IOnQuantityChangeParams) => void;
  onRemoveProduct: (productId: string) => void;
}

export const BasketItem = ({
  productId,
  onQuantityChange,
  onRemoveProduct,
  price,
  quantity,
  title,
  totalPrice,
}: IBasketItemProps): JSX.Element => {
  const {
    handleChangeQuantity,
    handleChangeQuantityState,
    handleRemoveProduct,
    quantityState,
  } = useBasketItem({
    onQuantityChange,
    onRemoveProduct,
    productId,
    quantity,
  });

  return (
    <div>
      <p>Title {title}</p>
      <p>Price {price}</p>
      <p>TotalPrice {totalPrice}</p>
      <p>Quantity {quantity}</p>
      <form onSubmit={handleChangeQuantity}>
        <p>Change quantity </p>
        <input
          value={quantityState}
          type="number"
          onChange={handleChangeQuantityState}
        />
        <button type="submit">Zatwierdź</button>
      </form>
      <button type="button" onClick={handleRemoveProduct}>
        Usuń produkt
      </button>
    </div>
  );
};
