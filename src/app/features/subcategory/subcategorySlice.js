import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateState } from "../../../utilities/state";
import subcategoryService from "./subcategoryService";

const initialState = {
  subcategories: [],
  isLoading: false,
  hasError: false,
};

export const addSubcategory = createAsyncThunk(
  "subcategories/add",
  async (data, thunkAPI) => {
    try {
      return await subcategoryService.addSubcategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSubcategories = createAsyncThunk(
  "subcategories/getAll",
  async ({ limit, page }, thunkAPI) => {
    try {
      return await subcategoryService.getSubcategories(limit, page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateSubcategory = createAsyncThunk(
  "subcategories/update",
  async (data, thunkAPI) => {
    try {
      return await subcategoryService.updateSubcategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteSubcategory = createAsyncThunk(
  "subcategories/delete",
  async (id, thunkAPI) => {
    try {
      return await subcategoryService.deleteSubcategory(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const categorySlice = createSlice({
  name: "subcategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSubcategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSubcategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.subcategories = [...state.subcategories, action.payload.data];
      })
      .addCase(addSubcategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getSubcategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubcategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.subcategories = action.payload.data;
      })
      .addCase(getSubcategories.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(updateSubcategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSubcategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.subcategories = updateState(
          state.subcategories,
          action.payload.data
        );
      })
      .addCase(updateSubcategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(deleteSubcategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSubcategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.subcategories = [...state.subcategories].filter(
          (subcategory) => subcategory.id != action.payload.data.id
        );
      })
      .addCase(deleteSubcategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const subcategoryReducer = categorySlice.reducer;
export default subcategoryReducer;
