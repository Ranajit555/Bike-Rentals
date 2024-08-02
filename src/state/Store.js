import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../state/productSlice"
import cartReducer from "../state/cartSlice"
import itemRducer from "../state/itemSlice"

const Store = configureStore({
  reducer: {
    products:productReducer,
    cartproduct:cartReducer,
    items:itemRducer,
  },
});

export default Store;
