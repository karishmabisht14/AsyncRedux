import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "../redux/showCartSlice";

const store = configureStore({
  reducer: {
    cart: showCartSlice,
  },
});

export default store;
