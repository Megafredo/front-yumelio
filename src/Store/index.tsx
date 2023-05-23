//~ Import
import rootReducer from './Reducers';
// import rootMiddleware from './Middlewares';
import { configureStore } from '@reduxjs/toolkit';

//recent way to configure store
export const store = configureStore({
  reducer: rootReducer,
  // middleware: rootMiddleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>