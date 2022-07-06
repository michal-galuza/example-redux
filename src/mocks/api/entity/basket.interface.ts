export interface IProduct {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface IBasket {
  products: IProduct[];
  id: string;
}
