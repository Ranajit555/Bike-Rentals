import { createSlice } from '@reduxjs/toolkit';

const initialState={
    searchQuery: '',
    filteredProducts: [],
}
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterProducts: (state, action) => {
      const { products } = action.payload;
      const { searchQuery } = state;
      state.filteredProducts = products.filter((product) =>
        product.type.toLowerCase().includes(searchQuery.toLowerCase())
      );  
      // state.filteredProducts=action.payload;
    },
  },
});

export const { setSearchQuery, filterProducts} = productSlice.actions;
export default productSlice.reducer;
