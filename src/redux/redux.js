import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuItems } = menuSlice.actions;

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartslice.actions;

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuSlice.reducer,
  cart: cartslice.reducer,
});

export default rootReducer;
