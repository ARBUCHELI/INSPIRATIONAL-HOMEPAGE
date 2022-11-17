import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBackgroundImage = createAsyncThunk(
  "backgroundImage/getImage",
  async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=mountain&page=1&per_page=5&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
    const json = await response.json();
    return json.results.map((result) => result.urls.full);
  }
);

export const backgroundImageSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    imageUrls: [],
    currentImageUrlIndex: 0
  },
  reducers: {
    switchToNextBackgroundImage: (state) => {
      state.currentImageUrlIndex =
        (state.currentImageUrlIndex + 1) % state.imageUrls.length;
    },
    switchToPreviousBackgroundImage: (state) => {
      let newIndex = state.currentImageUrlIndex - 1;
      if (newIndex < 0) {
        newIndex = state.imageUrls.length - 1;
      }

      state.currentImageUrlIndex = newIndex;
    }
  },
  extraReducers: {
    [getBackgroundImage.fulfilled]: (state, action) => {
      state.imageUrls = action.payload;
      state.currentImageUrlIndex = 0;
    }
  }
});

export const {
  switchToNextBackgroundImage,
  switchToPreviousBackgroundImage
} = backgroundImageSlice.actions;

export default backgroundImageSlice.reducer;
