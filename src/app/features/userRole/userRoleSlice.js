import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../../pkg/universalCookies";
import userRoleService from "./userRoleService";

const initialState = {
  userRoles: [],
  isLoading: false,
  hasError: false,
};

export const addUserRole = createAsyncThunk(
  "user/roles/add",
  async (data, thunkAPI) => {
    try {
      return await userRoleService.addUserRole(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const getRoles = createAsyncThunk(
//   "roles/getAll",
//   async (accessToken, thunkAPI) => {
//     try {
//       return await userRoleService.getRoles(accessToken);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const deleteByUserAndRole = createAsyncThunk(
  "user/roles/delete",
  async (data, thunkAPI) => {
    try {
      return await userRoleService.deleteByUserAndRole(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const deleteUserRole = createAsyncThunk(
  "user/roles/delete/:id",
  async ({ accessToken, id }, thunkAPI) => {
    try {
      return await userRoleService.deleteUserRole(accessToken, id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const userRoleSlice = createSlice({
  name: "userRoles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserRole.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addUserRole.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      // .addCase(getRoles.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getRoles.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.hasError = false;
      //   state.roles = action.payload.data;
      // })
      // .addCase(getRoles.rejected, (state) => {
      //   state.isLoading = false;
      //   state.roles = [];
      //   state.hasError = true;
      // })
      .addCase(deleteByUserAndRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteByUserAndRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(deleteByUserAndRole.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(deleteUserRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(deleteUserRole.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const userRoleReducer = userRoleSlice.reducer;
export default userRoleReducer;
