import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../../pkg/universalCookies";
import roleService from "./roleService";

const initialState = {
  roles: [],
  isLoading: false,
  hasError: false,
};

export const addRole = createAsyncThunk("roles/add", async (name, thunkAPI) => {
  try {
    return await roleService.addRole(name);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getRoles = createAsyncThunk(
  "roles/getAll",
  async (accessToken, thunkAPI) => {
    try {
      return await roleService.getRoles(accessToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteRole = createAsyncThunk(
  "roles/delete",
  async (accessToken, thunkAPI) => {
    try {
      return await roleService.deleteRole(accessToken);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRole.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addRole.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getRoles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.roles = action.payload.data;
      })
      .addCase(getRoles.rejected, (state) => {
        state.isLoading = false;
        state.roles = [];
        state.hasError = true;
      })
      .addCase(deleteRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(deleteRole.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const roleReducer = roleSlice.reducer;
export default roleReducer;
