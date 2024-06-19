import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import authSlice from "./reducer/authReducer"; // Corrected import path

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export const server = "http://localhost:3000";
