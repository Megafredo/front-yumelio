import { createSlice } from '@reduxjs/toolkit';

// Size
/* 
  - Extra large screens, TV (XL): >= 1201px
  - Desktops, large screens (desktop): 1025px -  1200px
  - Small screens, laptops (laptop): 769px  - 1024px
  - iPads, Tablets (tablet): 481px - 768px
  - Mobile devices (mobile): 320px  -  480px
*/

//* Default Variables
const DESKTOP_MIN_SIZE = 769;
const MOBILE_MAX_SIZE = 480;

//* Initial state
const initialMediaScreen = window.innerWidth >= DESKTOP_MIN_SIZE ? 'desktop' : window.innerWidth <= MOBILE_MAX_SIZE ? 'mobile' : 'tablet';

//~ Exports
export const mediaSlice = createSlice({
  name: 'mediaSlice',

  initialState: { mediaScreen: initialMediaScreen },

  reducers: {
    setTargetScreen: (state) => {
      const isDesktopMedia = window.innerWidth >= DESKTOP_MIN_SIZE;
      const isTabletMedia = window.innerWidth > MOBILE_MAX_SIZE && window.innerWidth < DESKTOP_MIN_SIZE;
      const isMobileMedia = window.innerWidth <= MOBILE_MAX_SIZE;

      if (isDesktopMedia) state.mediaScreen = 'desktop';
      if (isTabletMedia) state.mediaScreen = 'tablet';
      if (isMobileMedia) state.mediaScreen = 'mobile';
    },
  },
});

export const { setTargetScreen } = mediaSlice.actions;
export default mediaSlice.reducer;
