export interface IClearBasketHttpResponseItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface IClearBasketHttpResponse {
  products: IClearBasketHttpResponseItem[];
  id: string;
}
