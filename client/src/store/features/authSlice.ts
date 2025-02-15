import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authClient } from "@/lib/auth-client";

interface User {
  name: string;
  email: string;
  profilePicture?: string | null;
}

interface AuthState {
  isAuthenticated: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  status: "idle",
  user: null,
};

export const fetchUserSession = createAsyncThunk(
  "auth/fetchUserSession",
  async () => {
    const sessionData = authClient.useSession();
    console.log("session thunk called");
    return sessionData.data?.session
      ? {
          name: sessionData.data?.user.name,
          email: sessionData.data?.user.email,
          profilePicture: sessionData.data?.user.image,
        }
      : null;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserSession.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchUserSession.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
