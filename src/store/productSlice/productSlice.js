import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async () => {
    const response = await fetch(`https://ecom-backend-3e89.onrender.com/api/v2/products`);
    const data = await response.json();
    return data;
  }
);

// Define the slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selected: [],
    status: 'idle',
    error: null,
    extraData: null
  },
  reducers: {
    addProduct: (state, action) => {
      state.selected.push(action.payload);
    },
    removeProduct: (state, action) => {
      const selectedItem = action.payload
      state.selected = state.selected.filter(item => item._id !== selectedItem)
      console.log(selectedItem)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.extraData = action.payload.extraData;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;