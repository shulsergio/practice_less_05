import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchengeInfo } from './operations';

const initialState = {
  baseCurrency: '',
  exChangeInfo: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
      state.baseCurrency = payload;
      })
      .addCase(fetchExchengeInfo.fulfilled, (state, { payload }) => {
      state.exChangeInfo = payload;
    })
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
