export interface IChangeQuantityProductHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface IChangeQuantityProductHttpResponse {
  products: IChangeQuantityProductHttpResponseItem[];
  id: string;
}
