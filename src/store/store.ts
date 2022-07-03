import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./rootReducer";

const composeEnhancers = composeWithDevTools();

export const store = createStore(rootReducer, composeEnhancers);

export type AppDispatch = typeof store.dispatch;
export type RootStoreType = ReturnType<typeof rootReducer>;
