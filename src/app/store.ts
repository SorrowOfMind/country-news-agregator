import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../features/layoutSlice';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

export default store;
