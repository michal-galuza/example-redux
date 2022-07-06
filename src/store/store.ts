import { configureStore } from "@reduxjs/toolkit";
import { createApiProviders } from "./api-providers";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          apiProviders: createApiProviders(),
        },
      },
    }),
});

