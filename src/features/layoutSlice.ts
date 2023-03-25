/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface LayoutStateInterface {
  value: boolean;
}

const initialState: LayoutStateInterface = {
  value: true,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchLayout: (state) => {
      state.value = !state.value;
    },
  },
});

export const { switchLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
