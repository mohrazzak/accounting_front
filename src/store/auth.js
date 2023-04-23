import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const counterSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    login: (state, action) => {
      state = true;
      return true;
    },
    logout: (state, action) => {
      state = false;
      return false;
    },
  },
});

// // Action creators are generated for each case reducer function
export const { login,logout } = counterSlice.actions;

export default counterSlice.reducer;
