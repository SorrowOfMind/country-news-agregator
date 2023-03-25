/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = createAsyncThunk('news/fetchNews', async (countryId: string, thunkAPI) => {
  try {
    const uri = `${BASE_URL}?country=${countryId}&apiKey=${KEY}`;
    const response = await axios.get(uri);
    console.log(response);
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue((err as AxiosError).response?.data);
  }
});

interface NewsInterface {
  source: {
    id: number | null,
    name: string,
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}

export interface NewsStateInterface {
  news: NewsInterface[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string | undefined,
}

const initialState: NewsStateInterface = {
  news: [],
  loading: 'idle',
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.news.push(...action.payload.articles);
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default newsSlice.reducer;
