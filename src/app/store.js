import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../app/features/auth/state/auth/authSlice";
import  themeSlice  from "../shared/state/themeSlice";
import documentSlice from './features/admin module/documents/state/documentSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme:themeSlice,
    document:documentSlice
  },
});
