import { createSlice } from "@reduxjs/toolkit";
import { authEmployee, currentLogin } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload;
      })
      .addCase(authEmployee.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(currentLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload;
      })
      .addCase(currentLogin.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
