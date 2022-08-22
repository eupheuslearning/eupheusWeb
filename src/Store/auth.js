import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialAuthState = {
  admin: Cookies.get("admin") || null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.admin = Cookies.get("admin");
    },
    logout(state) {
      // state.admin = false;
      Cookies.remove("admin");
      Cookies.remove("id");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
