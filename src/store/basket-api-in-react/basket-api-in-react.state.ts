export interface IBasketApiInReactcItem {
    id: string;
    title: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }
  
  export interface IBasketApiInReactState {
    basket: IBasketApiInReactcItem[];
    id: string;
  }
  
  export const basketApiInReactInitialState: IBasketApiInReactState = {
    basket: [],
    id: "MY_BASKET_ID",
  };
  