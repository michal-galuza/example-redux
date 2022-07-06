export interface IBasketHttpResponseItem {
    id: string;
    title: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }
  
  export interface IBasketAsyncHttpResponse {
    products: IBasketHttpResponseItem[];
    id: string;
  }