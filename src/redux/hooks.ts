import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * UseDispatch hook
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * UseSelector hook
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
