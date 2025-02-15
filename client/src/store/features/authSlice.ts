import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authClient } from "@/lib/auth-client"; // Import the auth client

// Define the user type
interface User {
  name: string;
  email: string;
  profilePicture?: string | null;
}

// Define the authentication state type
interface AuthState {
  isAuthenticated: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  isLoading: boolean;
  user: User | null;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  status: "idle",
  isLoading: false,
  user: null,
};

export const fetchUserSession = createAsyncThunk(
  "auth/fetchUserSession",
  async (_, { rejectWithValue }) => {
    const { data, error } = await authClient.getSession();

    if (error) {
      return rejectWithValue(error);
    }

    return {
      name: data.user.name,
      email: data.user.email,
      profilePicture: data.user.image,
    };
  }
);

// Create authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserSession.pending, (state) => {
        state.isLoading = true;
        state.status = "loading";
      })
      .addCase(fetchUserSession.fulfilled, (state, action) => {
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
        state.isLoading = false;
        state.status = "succeeded";
      })
      .addCase(fetchUserSession.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        console.error("Session fetch failed:", action.payload);
      });
  },
});

// Export actions & reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
