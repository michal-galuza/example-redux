export interface IAsyncAxiosInThunkItem {
    id: string;
    title: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }
  
  export interface IBasketAsyncAxiosInThunkState {
    basket: IAsyncAxiosInThunkItem[];
    id: string;
  }
  
  export const basketAsyncAxiosInThunkInitialState: IBasketAsyncAxiosInThunkState = {
    basket: [],
    id: "MY_BASKET_ID",
  };
  