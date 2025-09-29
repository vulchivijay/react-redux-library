import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./UISlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: { UI: UISlice.reducer, Cart: CartSlice.reducer }
})

export default store;