export interface IProduct {
  id: string;
  title: string;
  price: number;
}

export const productMocks: IProduct[] = [
  {
    id: "random-id-1",
    price: 20.2,
    title: "Pierwszy produkt",
  },
  {
    id: "random-id-2",
    price: 200.2,
    title: "Drugi produkt",
  },
  {
    id: "random-id-3",
    price: 120.2,
    title: "Trzeci produkt",
  },
  {
    id: "random-id-4",
    price: 50.2,
    title: "cZWARTY produkt",
  },
  
];
