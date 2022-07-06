import { PayloadAction } from "@reduxjs/toolkit";

interface IRemoveProductPayload {
  id: string;
}

export type IRemoveProduct = PayloadAction<IRemoveProductPayload>;
