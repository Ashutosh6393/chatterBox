import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  profilePicture: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  user: null,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  

});

export const {} = authSlice.actions;
export default authSlice.reducer;

