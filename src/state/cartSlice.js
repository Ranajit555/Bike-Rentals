import { createSlice } from "@reduxjs/toolkit";


const cartInitialState={
    cartItem:[],
}

const cartSlice=createSlice({
    name:'cartproduct',
    initialState:cartInitialState,
    reducers:{
      addItemcart:(state,action)=>{
        const cartid=state.cartItem.find((Item)=>Item.id===action.payload.id)
        if(cartid === undefined) {
          state.cartItem.push(action.payload);
        }
      },  
      removeItemcart:(state,action)=>{
         state.cartItem=state.cartItem.filter((Item)=>Item.id!==action.payload);
      },
      goTocart:()=>{
         
      },
    },
});
export const {addItemcart,removeItemcart,goTocart} =cartSlice.actions;
export default cartSlice.reducer;
