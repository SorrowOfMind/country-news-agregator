/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import AVAILABLE_COUNTRIES from '../assets/coutryCodes';

const config = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_COUNTRIES_API_KEY,
    'X-RapidAPI-Host': 'country-list5.p.rapidapi.com',
  },
};

const URL = 'https://country-list5.p.rapidapi.com/countrylist/';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (_, thunkAPI) => {
  try {
    const response = await axios.get(URL, config);
    return response.data;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue((err as AxiosError).response?.data);
  }
});

interface CountryInterface {
  id: number,
  iso: string,
  nicename: string
}

export interface CountriesStateInterface {
  countries: CountryInterface[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string | undefined,
}

const initialState: CountriesStateInterface = {
  countries: [],
  loading: 'idle',
  error: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      // state.countries.push(...action.payload.country);
      state.countries.push(
        ...action.payload.country
          .filter((ctry: CountryInterface) => AVAILABLE_COUNTRIES.includes(ctry.iso.toLowerCase())),
      );
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default countriesSlice.reducer;
