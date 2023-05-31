//~ Import Module
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  boolean: false,
  mode: 'inactive',
};

//~ Exports
export const navBarSlice = createSlice({
  name: 'navBarSlice',

  initialState,

  reducers: {
    toggleMenuBurger: (state) => {
      state.boolean = !state.boolean;
      state.boolean === true ? (state.mode = 'active') : (state.mode = 'inactive');
    },
  },
});

export const { toggleMenuBurger } = navBarSlice.actions;
export default navBarSlice.reducer;
