"use client";

import { Provider } from "react-redux";

import { store } from "./store";

/**
 * Provider component that wraps entire app on redux
 * Using client side only
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
