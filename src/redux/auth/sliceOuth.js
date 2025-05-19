import { createSlice } from "@reduxjs/toolkit";
import { login, register, refreshUser } from "./operation.js";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  isRefresh: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefresh = false;
      });
  },
});

export const authReducer = slice.reducer;
