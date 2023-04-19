//~ Import Module
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  // mode: window.matchMedia('(prefers-color-scheme: Light)').matches ? "light" : "dark",
  mode: 'light',
};

//~ Exports
export const themeSlice = createSlice({
  name: 'themeSlice',

  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
