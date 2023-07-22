import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../../pkg/universalCookies";
import authService from "./authService";

const accessToken = getCookie("accessToken");
// const user = JSON.parse(localStorage.getItem("user"));
const user = null;

const initialState = {
  loggedIn: false,
  accessToken: accessToken ? accessToken : null,
  user: user ? user : null,
  users: null,
  isLoading: false,
  // isLoginLoading: false,
  hasError: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getMe = createAsyncThunk(
  "auth/me",
  async (accessToken, thunkAPI) => {
    try {
      return await authService.getMe(accessToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getUsers = createAsyncThunk(
  "auth/users/getAll",
  async (accessToken, thunkAPI) => {
    try {
      return await authService.getUsers(accessToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await authService.logout();
  } catch (err) {
    //  console.error(err)
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const forgotPassword = createAsyncThunk(
  "auth/forgot-password",
  async (userData, thunkAPI) => {
    try {
      return await authService.forgotPassword(userData);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (userData, thunkAPI) => {
    try {
      return await authService.resetPassword(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/users/update",
  async ({ userData, type }, thunkAPI) => {
    try {
      return await authService.updateUser(userData, type);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/users/delete",
  async (data, thunkAPI) => {
    try {
      return await authService.deleteUser(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isLoginLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.user = action.payload.data;
        state.loggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isLoginLoading = false;
        state.hasError = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isLoginLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoginLoading = false;
        state.hasError = false;
        state.token = action.payload.token;
        state.user = action.payload.data;
        state.loggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isLoginLoading = false;
        state.hasError = true;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isLoginLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        // state.isLoginLoading = false;
        state.hasError = false;
        state.user = null;
        state.loggedIn = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoginLoading = false;
        state.hasError = false;
        state.user = action.payload.data;
        state.loggedIn = true;
      })
      .addCase(getMe.rejected, (state) => {
        state.isLoading = false;
        state.isLoginLoading = false;
        state.hasError = true;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.users = action.payload.data;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.isLoginLoading = false;
        state.hasError = true;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.user = { ...state.user, ...action.payload.data };
        // state.user = action.payload.data;
        // state.loggedIn = true;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
