import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk - step-1
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  }
);

// Slice - step 2

const categoriesSlice = createSlice({
  name: "categpries",
  initialState: {
    categories: [],
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = [
          ...new Set(
            action.payload.products.map((product) => product.category)
          ),
        ];
        state.products = [...action.payload.products];
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
