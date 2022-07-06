import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface IOnQuantityChangeParams {
  quantity: number;
  productId: string;
}

interface IUseBasketItemProps {
  onQuantityChange: (params: IOnQuantityChangeParams) => void;
  onRemoveProduct: (productId: string) => void;
  productId: string;
  quantity: number;
}

export const useBasketItem = ({
  onQuantityChange,
  onRemoveProduct,
  productId,
  quantity,
}: IUseBasketItemProps) => {
  const [quantityState, setQuantity] = useState<number>(quantity);

  const handleChangeQuantityState = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };

  const handleRemoveProduct = () => {
    onRemoveProduct(productId);
  };

  const handleChangeQuantity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onQuantityChange({ productId, quantity: quantityState });
  };
  /** To jest dlatego że jeśli dodamy w product list produkt
   *  to wartość inputa przypisana do state nie zostanie zakutalizaowana
   *  dzięki temu useEffect przy każdej zmianie ilości produktu w koszyku zostanie zaktualizowany input
   * */
  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  return {
    quantityState,
    handleChangeQuantityState,
    handleRemoveProduct,
    handleChangeQuantity,
  };
};
