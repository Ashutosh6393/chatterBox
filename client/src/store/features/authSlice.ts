import { createSlice } from "@reduxjs/toolkit";

export interface UserType {
  name: string;
  email: string;
  profilePicture?: string | null;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, actions) => {
      state.isAuthenticated = true;
      state.user = actions.payload;
    },

    LOGOUT: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { LOGOUT, LOGIN } = authSlice.actions;
export default authSlice.reducer;
