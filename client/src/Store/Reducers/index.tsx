//~ Import modules
import themeSlice from './Theme';
import navBarSlice from './NavBar';
import mediaSlice from './Media';
import cursorSlice from './Cursor';
import scrollSlice from './Scroll';
// import apiRentagence from '../Api';

const reducers = {
  // apiRentagence,
  themeSlice,
  navBarSlice,
  mediaSlice,
  cursorSlice,
  scrollSlice,
};

//export all combined reducers to use in the store
export default reducers;