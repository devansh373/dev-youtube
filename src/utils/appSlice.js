import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showSearchResults:false,
    country:"India",
    filter:null
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    setShowSearchResults: (state,action) => {
      state.showSearchResults = action.payload;
    },
setCountry:(state,action)=>{
  state.country = action.payload;
}
  },
});
export const { toggleMenu,closeMenu,openMenu,setShowSearchResults,setCountry } = appSlice.actions;
export default appSlice.reducer;
