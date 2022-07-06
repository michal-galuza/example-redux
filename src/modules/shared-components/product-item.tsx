import { useProductItem } from "./use-product-item";

interface IOnAddProductParams {
  productId: string;
  quantity: number;
}
interface IProductItemProps {
  title: string;
  productId: string;
  price: number;
  onAddProduct: (params: IOnAddProductParams) => Promise<void>;
}

export const ProductItem = ({
  title,
  productId,
  onAddProduct,
  price,
}: IProductItemProps): JSX.Element => {
  const { handleAddProduct, handleChangeQuantity, quantity } = useProductItem({
    onAddProduct,
    productId,
  });

  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <form onSubmit={handleAddProduct}>
        <input value={quantity} onChange={handleChangeQuantity} type="number" />
        <button type="submit">Add product</button>
      </form>
    </div>
  );
};
