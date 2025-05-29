import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchResults: [] },
  reducers: {
    cacheResults: (state, action) => {
      //   state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
    setSearchResults:(state,action)=>{
      state.searchResults=action.payload;
    },
    clearSearchResults:(state)=>{
      state.searchResults=[];
    }
  },
});

export const { cacheResults,setSearchResults,clearSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
