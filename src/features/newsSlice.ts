/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { v4 as uuidv4 } from 'uuid';

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = createAsyncThunk('news/fetchNews', async (countryId: string, thunkAPI) => {
  try {
    const uri = `${BASE_URL}?country=${countryId}&apiKey=${KEY}`;
    const response = await axios.get(uri);
    const articles = response.data.articles.map((article: NewsInterface) => ({ ...article, id: uuidv4() }));

    const newsArray = [countryId, articles];
    return newsArray;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue((err as AxiosError).response?.data);
  }
});

interface NewsInterface {
  id: string;
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
  news: { [key: string] : NewsInterface },
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string | undefined,
}

const initialState: NewsStateInterface = {
  news: {},
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
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.loading = 'succeeded';
      const key = payload[0]; // country code
      const values = payload[1]; // actual news
      state.news[key] = values;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default newsSlice.reducer;
