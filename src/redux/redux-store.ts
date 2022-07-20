import {AsyncThunkAction, configureStore} from "@reduxjs/toolkit";

import {useDispatch} from "react-redux";
import LoginSlice from "./Login-Slice";
import catalogSlice from "./catalog-Slice";
import filterSlice from "./filter-slice";
import cartSlice from "./cart-slice";
import searchSlice from "./search-slice";


export const store = configureStore({
    reducer: {
        LoginSlice: LoginSlice,
        catalogSlice: catalogSlice,
        filterSlice: filterSlice,
        cartSlice: cartSlice,
        searchSlice: searchSlice
    }
})

type FuncType = typeof store.getState
export type StateType = ReturnType<FuncType>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

