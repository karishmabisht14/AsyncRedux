import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "../redux/showCartSlice";
import cartSlice from "../redux/cartSlice";

const store = configureStore({
  reducer: {
    showCart: showCartSlice,
    cart: cartSlice,
  },
});

export default store;
