export interface IRemoveProductHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface IRemoveProductHttpResponse {
  products: IRemoveProductHttpResponseItem[];
  id: string;
}
