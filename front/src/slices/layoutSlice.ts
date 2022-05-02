import { createSlice } from '@reduxjs/toolkit';
import layoutScheme from './layoutScheme.json';

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    data: layoutScheme,
  },
  reducers: {
    setupLayout: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const layout = (state: any) => state.layout.data;

export const { setupLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
