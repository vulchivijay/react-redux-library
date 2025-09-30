import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: 'UI',
  initialState: { cartIsVisible: false, notifications: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotifications(state, action) {
      state.notifications = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    }
  },
});

export const UIActions = UISlice.actions;

export default UISlice;