import { createSlice } from "@reduxjs/toolkit";

const itemInitialState = {
  selectedItem:null,
};

const itemSlice = createSlice({
  name: "items",
  initialState: itemInitialState,
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { selectItem } = itemSlice.actions;

export default itemSlice.reducer;
