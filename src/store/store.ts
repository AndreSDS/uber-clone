import { configureStore } from "@reduxjs/toolkit";
import { navSlice } from "../slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
