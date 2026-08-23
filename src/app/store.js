import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../app/features/auth/state/auth/authSlice";
import  themeSlice  from "../shared/state/themeSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme:themeSlice
  },
});
