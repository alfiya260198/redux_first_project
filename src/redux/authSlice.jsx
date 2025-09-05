import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true"); // 👈 save in localStorage
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated"); // 👈 remove from localStorage
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
