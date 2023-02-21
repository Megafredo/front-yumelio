import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  boolean: true,
  mode: "light"
}

//~ Exports 
export const themeSlice = createSlice({
  // Nom de l'état
  name: 'themeSlice',

  // Etat initial
  initialState,

  // Les intéractions entre les états et les actions se trouve dans "reducers"
  reducers: {
    toggleTheme: (state) => {
      state.boolean = !state.boolean;
      state.boolean === false ? state.mode = 'dark' : state.mode = 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;