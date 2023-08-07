import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import advertisementService from "./advertisementService";
const initialState = {
  advertisements: [],
  isLoading: false,
  hasError: false,
};

export const getAdvertisements = createAsyncThunk(
  "advertisement/getAll",
  async (_, thunkAPI) => {
    try {
      return await advertisementService.getAllAdvertisements();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const advertisementSlice = createSlice({
  name: "advertisement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertisements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdvertisements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.advertisements = action.payload.data;
      })
      .addCase(getAdvertisements.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

const advertisementReducer = advertisementSlice.reducer;
export default advertisementReducer;
