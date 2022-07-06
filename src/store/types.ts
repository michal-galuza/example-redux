import { IApiProviders } from "./api-providers";
import { rootReducer } from "./rootReducer";
import { store } from "./store";

export type AppDispatch = typeof store.dispatch;
export type RootStoreType = ReturnType<typeof rootReducer>;

interface IExtra {
  apiProviders: IApiProviders;
}

export interface ThunkOptions {
  state: RootStoreType;
  dispatch: AppDispatch;
  extra: IExtra;
}
