import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showSearchResults:false,
    country:"India",
    filter:"All"
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
},
setFilter:(state,action)=>{
  state.filter = action.payload;
}
  },
});
export const { toggleMenu,closeMenu,openMenu,setShowSearchResults,setCountry,setFilter } = appSlice.actions;
export default appSlice.reducer;
