export interface IAddProductHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface IAddProductHttpResponse {
  products: IAddProductHttpResponseItem[];
  id: string;
}

