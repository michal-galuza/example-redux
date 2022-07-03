import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootStoreType } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector;
