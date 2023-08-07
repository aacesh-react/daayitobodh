import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  news: [],
  homepageNews: [],
  isLoading: false,
  hasError: false,
};

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

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

const newsReducer = newsSlice.reducer;
export default newsReducer;
