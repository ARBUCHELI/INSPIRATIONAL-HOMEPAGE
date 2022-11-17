import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getQuote = createAsyncThunk(
  "quote/getQuote", 
  async () => {
    const response = await fetch(`https://quotes.rest/qod?language=en`);
    const json = await response.json();
    const quote = json.contents.quotes[0];
  
    return {
      quote: quote.quote,
      author: quote.author
    };
  }
);

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    author: ""
  },
  extraReducers: {
    [getQuote.fulfilled]: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    }
  }
});

export default quoteSlice.reducer;
