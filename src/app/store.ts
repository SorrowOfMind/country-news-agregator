import { configureStore } from '@reduxjs/toolkit';
import { layoutReducer, countriesReducer, newsReducer } from '../features';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    news: newsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
