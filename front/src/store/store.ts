import { configureStore } from '@reduxjs/toolkit';
import schemeFormSlice from '../slices/formSlice';
import layoutSlice from '../slices/layoutSlice';

export default configureStore({
  reducer: {
    schemeForm: schemeFormSlice,
    layout: layoutSlice,
  },
});
