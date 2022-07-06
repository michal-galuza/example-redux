import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootStoreType } from "../types";

export const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector;
