import { createSlice } from '@reduxjs/toolkit';

enum LayoutType {
  TILES,
  LIST,
}

interface LayoutStateInterface {
  value: LayoutType
}

const initialState: LayoutStateInterface = {
  value: LayoutType.TILES,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchLayout: (state) => {
      console.log(state);
    },
  },
});

export const { switchLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
