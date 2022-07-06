import { PayloadAction } from "@reduxjs/toolkit";

interface IAddProductPayload {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

export type IAddProduct = PayloadAction<IAddProductPayload>;
