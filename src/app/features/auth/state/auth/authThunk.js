import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/axios";

export const authEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkapi) => {
    try {
      const res = await api.post("/auth/login", credentials);
     
      return res.data.data;
    } catch (error) {
      return thunkapi.rejectWithValue(error);
    }
  },
);

export const currentLogin = createAsyncThunk("user/me", async (_, thunkapi) => {
  try {
    let res = await api.get("/auth/me");
   
    return res.data.user;
  } catch (error) {
   return thunkapi.rejectWithValue({
     message: error.response?.data?.message || error.message,
     status: error.response?.status,
   });
  }
});
