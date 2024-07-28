// commonDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

import languageStrings from '../Screen/languageStrings';

const initialState = {
    theme: 'light',
    language: 'en',
    strings: languageStrings.en,
  };
  
  const commonDataSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
      setTheme: (state, action) => {
        state.theme = action.payload;
      },
      setLanguage: (state, action) => {
        state.language = action.payload;
        state.strings = languageStrings[action.payload];
      },
    },
  });
  
  export const { setTheme, setLanguage } = commonDataSlice.actions;
  export default commonDataSlice.reducer;