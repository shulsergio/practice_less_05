import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'service/exchangeAPI';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkApi) => {
    const state = thunkApi.getState();
    const { baseCurrency } = state.currency;
    if (baseCurrency) {
      return thunkApi.rejectWithValue('already have current money');
    }
    try {
      const data = await getUserInfo(coords);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchExchengeInfo = createAsyncThunk(
  'currency/fetchExchengeInfo',
  async (value, thunkApi) => {
    try {
      const data = await exchangeCurrency(value);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)