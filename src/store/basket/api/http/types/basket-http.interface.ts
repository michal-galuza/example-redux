export interface IBasketProductHttp {
  title: string;
  id: string;
  quantity: number;
  totalPrice: number;
  price: number;
}

export interface IBasketHttp {
  products: IBasketProductHttp[];
  id: string;
}
