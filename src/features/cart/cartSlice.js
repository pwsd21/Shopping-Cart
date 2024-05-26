import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    savedItems: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addSavedItems: (state, action) => {
      state.savedItems.push(action.payload);
    },
    removeSavedItems: (state, action) => {
      state.savedItems = state.savedItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addCartItems,
  removeCartItems,
  addSavedItems,
  removeSavedItems,
} = cartSlice.actions;

export default cartSlice.reducer;
