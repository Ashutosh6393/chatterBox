import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authClient } from "@/lib/auth-client"; 

// Define the user type
export interface UserType {
  name: string;
  email: string;
  profilePicture?: string | null;
}

// Define the authentication state type
export interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// export const fetchUserSession = createAsyncThunk(
//   "auth/fetchUserSession",
//   async (_, { rejectWithValue }) => {
//     const { data, error } = await authClient.getSession();

//     if (error) {
//       return rejectWithValue(error);
//     }

//     return {
//       name: data.user.name,
//       email: data.user.email,
//       profilePicture: data.user.image,
//     };
//   }
// );

// Create authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, actions) =>{
      state.isAuthenticated = true;
      state.user = actions.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
 
});

// Export actions & reducer
export const { logout, login } = authSlice.actions;
export default authSlice.reducer;






// extraReducers: (builder) => {
//   builder
//     .addCase(fetchUserSession.pending, (state) => {
//       state.status = "loading";
//       state.isLoading = true;
//     })
//     .addCase(fetchUserSession.fulfilled, (state, action) => {
//       state.isAuthenticated = !!action.payload;
//       state.user = action.payload;
//       state.status = "succeeded";
//       state.isLoading = false;
//     })
//     .addCase(fetchUserSession.rejected, (state) => {
//       state.status = "failed";
//       state.isLoading = false;
//     });
// },