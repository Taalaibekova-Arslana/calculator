import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./tools/colSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: dataReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type UseDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
