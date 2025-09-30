import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./UISlice.jsx";
import CartSlice from "./CartSlice.jsx";

const store = configureStore({
  reducer: { UI: UISlice.reducer, Cart: CartSlice.reducer }
})

export default store;