import { CardItemType, CartItemType } from "../types/index";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItem: 0,
    cartData: [],
    addCartIsSuccess: false
  },
  reducers: {
    addToCart: (state, action: PayloadAction<CardItemType>) => {
      const itemIndex = state.cartData.findIndex((item: CardItemType) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.cartData[itemIndex].quantity += 1;
      } else {
        state.cartData.push({
          ...action.payload,
          quantity: 1,
        });
        state.addCartIsSuccess = true
        state.totalItem += parseFloat(action.payload.quantity);
      }
    },
    increaseCart: (state, action) => {
      const id = action.payload;
      const itemInCart = state.cartData.find((item: CartItemType) => item.id == id);
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decreaseCart: (state, action) => {
      const id = action.payload;
      const itemInCart = state.cartData.find((item: CartItemType) => item.id === id);
      if (itemInCart) {
        itemInCart.quantity -= 1
      }
    },
    removeItemCart: (state, action) => {
      const removeItem = state.cartData.filter((item: CartItemType) => item.id !== action.payload);
      state.cartData = removeItem;
    },
  },
});

export const { addToCart, increaseCart, decreaseCart , removeItemCart} = cartSlice.actions;
export default cartSlice.reducer;