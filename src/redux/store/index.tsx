import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AppReducer from "@/src/redux/slices/appSlice";
import { postApi } from "@/src/redux/services/postApi";

/**
 * Combining all the reducers
 */
const rootReducers = combineReducers({
  app: AppReducer,
  [postApi.reducerPath]: postApi.reducer,
});

/**
 * Store configuration
 */
export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([postApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
