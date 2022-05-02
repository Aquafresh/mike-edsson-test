import { createSlice } from '@reduxjs/toolkit';
import schemeForm from './scheme.json';

export const schemeFormSlice = createSlice({
  name: 'form',
  initialState: {
    formScheme: schemeForm,
  },
  reducers: {
    setupSchemeForm: (state, action) => {
      state.formScheme = action.payload;
    },
  },
});

export const scheme = (state: any) => state.schemeForm.formScheme;

export const { setupSchemeForm } = schemeFormSlice.actions;

export default schemeFormSlice.reducer;
