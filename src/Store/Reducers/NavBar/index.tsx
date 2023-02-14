import { createSlice } from '@reduxjs/toolkit';


//~ Exports 
export const navBarSlice = createSlice({
  // Nom de l'état
  name: 'navBarSlice',

  // Etat initial
  initialState: {
    boolean: false,
    mode: "inactive"
  },

  // Les intéractions entre les états et les actions se trouve dans "reducers"
  reducers: {
    toggleMenuBurger: (state) => {
      state.boolean = !state.boolean;
      state.boolean === true ? state.mode = 'active' : state.mode = 'inactive';
    },
  },
});

export const { toggleMenuBurger } = navBarSlice.actions;
export default navBarSlice.reducer;