import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateState } from "../../../utilities/state";
import newsService from "./newsService";

const initialState = {
  news: [],
  homepageNews: [],
  isLoading: false,
  hasError: false,
};

export const addNews = createAsyncThunk("news/add", async (data, thunkAPI) => {
  try {
    return await newsService.addNews(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getSubcategoryNews = createAsyncThunk(
  "news/subcategories",
  async ({ limit, page, subcategoryId, content }, thunkAPI) => {
    try {
      return await newsService.getSubcategoryNews(
        limit,
        page,
        subcategoryId,
        content
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getHomepageNews = createAsyncThunk(
  "news/homepage",
  async (limit, thunkAPI) => {
    try {
      return await newsService.getHomepageNews(limit);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


// export const updateNews = createAsyncThunk(
//   "subcategories/update",
//   async (data, thunkAPI) => {
//     try {
//       return await newsService.updateNews(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

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

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.news = [...state.news, action.payload.data];
      })
      .addCase(addNews.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getSubcategoryNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubcategoryNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getSubcategoryNews.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getHomepageNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHomepageNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.homepageNews = action.payload.data;
      })
      .addCase(getHomepageNews.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      // .addCase(updateNews.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(updateNews.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.hasError = false;
      //   state.subcategories = updateState(
      //     state.subcategories,
      //     action.payload.data
      //   );
      // })
      // .addCase(updateNews.rejected, (state) => {
      //   state.isLoading = false;
      //   state.hasError = true;
      // })
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

const newsReducer = newsSlice.reducer;
export default newsReducer;
