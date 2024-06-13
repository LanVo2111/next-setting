import { combineReducers } from "@reduxjs/toolkit";
import cartReducers from "./cartReducers";
import { api } from "@/utils/fetch";

export const rootReducer = combineReducers({
  cart: cartReducers,
  [api.reducerPath]: api.reducer,
})