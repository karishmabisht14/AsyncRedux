import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsShown: false,
};

const showCartSlice = createSlice({
  name: "cartVisibility",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
  },
});

export default showCartSlice.reducer;

export const showCartActions = showCartSlice.actions;
