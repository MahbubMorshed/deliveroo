import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import restauentReducer from "./features/restaurenSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurent: restauentReducer,
  },
});
