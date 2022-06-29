import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counter/counter-reducer";

export const store = createStore(counterReducer);

export type RootStoreType = ReturnType<typeof store.getState>;
