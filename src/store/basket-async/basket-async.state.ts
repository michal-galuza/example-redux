export interface IBasketAsyncItem {
    id: string;
    title: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }
  
  export interface IBasketAsyncState {
    basket: IBasketAsyncItem[];
    id: string;
  }
  
  export const basketAsyncInitialState: IBasketAsyncState = {
    basket: [],
    id: "MY_BASKET_ID",
  };
  