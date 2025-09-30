import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmomunt: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      }
      else {
        existingItems.quantity = existingItems.quantity + 1;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload.id;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem?.totalQuantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      }
      else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const CartActions = CartSlice.actions;

export default CartSlice;