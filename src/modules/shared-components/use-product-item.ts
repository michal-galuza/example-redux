import { ChangeEvent, FormEvent, useState } from "react";

interface IOnAddProductParams {
  productId: string;
  quantity: number;
}

interface IUseProductItemProps {
  productId: string;
  onAddProduct: (params: IOnAddProductParams) => Promise<void>;
}

export const useProductItem = ({
  onAddProduct,
  productId,
}: IUseProductItemProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };

  const handleAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onAddProduct({ productId, quantity });
    setQuantity(1);
  };

  return { quantity, handleChangeQuantity, handleAddProduct };
};
