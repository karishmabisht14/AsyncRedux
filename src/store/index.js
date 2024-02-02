import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "../redux/showCartSlice";
import cartSlice from "../redux/cartSlice";
import uiSlice from "../redux/ui-slice";

const store = configureStore({
  reducer: {
    showCart: showCartSlice,
    cart: cartSlice,
    ui: uiSlice,
  },
});

export default store;
