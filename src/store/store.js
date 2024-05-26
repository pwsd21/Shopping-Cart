import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categorySlice";
import searchReducer from "../features/categories/search/searchSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
