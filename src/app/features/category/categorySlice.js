import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const initialState = {
  categories: [],
  isLoading: false,
  hasError: false,
};

export const addCategory = createAsyncThunk(
  "categories/add",
  async (data, thunkAPI) => {
    try {
      return await categoryService.addCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// export const getRoles = createAsyncThunk(
//   "roles/getAll",
//   async (accessToken, thunkAPI) => {
//     try {
//       return await categoryService.getRoles(accessToken);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteByUserAndRole = createAsyncThunk(
//   "user/roles/delete",
//   async (data, thunkAPI) => {
//     try {
//       return await categoryService.deleteByUserAndRole(data);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data);
//     }
//   }
// );

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id, thunkAPI) => {
    try {
      return await categoryService.deleteCategory(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.categories = [...state.categories].push(action.payload.data);
      })
      .addCase(addCategory.rejected, (state) => {
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
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(deleteCategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
