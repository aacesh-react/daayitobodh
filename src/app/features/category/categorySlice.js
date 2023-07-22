import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const initialState = {
  categories: [],
  isLoading: false,
  hasError: false,
};

const updateStateCategories = (categories, category) => {
  return categories.map((currCategory) => {
    if (currCategory.id == category.id) {
      currCategory = { ...currCategory, ...category };
    }
    return currCategory;
  });
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

export const getCategories = createAsyncThunk(
  "categories/getAll",
  async ({ limit, page, sub }, thunkAPI) => {
    try {
      return await categoryService.getCategories(limit, page, sub);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/update",
  async (data, thunkAPI) => {
    try {
      return await categoryService.updateCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
        console.log("fullfilled data:", action.payload.data);
        state.isLoading = false;
        state.hasError = false;
        state.categories = [...state.categories, action.payload.data];
      })
      .addCase(addCategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        if (action.payload.message == "Categories") {
          state.categories = action.payload.data;
        }
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.categories = updateStateCategories(
          state.categories,
          action.payload.data
        );
      })
      .addCase(updateCategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.categories = [...state.categories].filter(
          (category) => category.id != action.payload.data.id
        );
      })
      .addCase(deleteCategory.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
