export interface IBasketItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface IBasketState {
  basket: IBasketItem[];
  id: string;
}

export const basketInitialState: IBasketState = {
  basket: [],
  id: "MY_BASKET_ID",
};
