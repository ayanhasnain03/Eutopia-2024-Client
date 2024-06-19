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
      state.isAdmin = action.payload.role === "admin";
      state.loader = false;

      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    userNotExists: (state) => {
      state.user = null;
      state.isAdmin = false;
      state.loader = false;
      // Remove user data from local storage
      localStorage.removeItem("user");
    },
  },
});

export default authSlice;
export const { userExists, userNotExists } = authSlice.actions;
