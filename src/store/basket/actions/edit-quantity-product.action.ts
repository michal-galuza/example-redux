import { PayloadAction } from "@reduxjs/toolkit";

interface IEditQuantityProductPayload {
  id: string;
  quantity: number;
}

export type IEditQuantityProduct = PayloadAction<IEditQuantityProductPayload>;
