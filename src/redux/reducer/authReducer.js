import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAdmin: false,
  loader: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userExists: (state, action) => {
      state.user = action.payload;
      state.isAdmin = action.payload.role === "admin" ? true : false;
      state.loader = false;
    },
    userNotExists: (state) => {
      state.user = null;
      state.isAdmin = false;
      state.loader = false;
    },
  },
});

export default authSlice;
export const { userExists, userNotExists } = authSlice.actions;
