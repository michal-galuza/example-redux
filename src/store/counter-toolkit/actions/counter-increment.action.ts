import { createAction } from "@reduxjs/toolkit";
import { CounterActionsNameEnum } from "./counter-actions-name.enum";

export const incrementAction = createAction<undefined>(
  CounterActionsNameEnum.INCREMENT
);
