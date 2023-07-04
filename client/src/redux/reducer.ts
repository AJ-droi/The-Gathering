import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  data: any[];
  user: any[];
  photographer: any[];
  books: any[];
  movies: any[];
  notifications: any[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  user: [],
  photographer: [],
  books:[],
  movies: [],
  notifications: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataUser: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchDataPhoto : (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.photographer = action.payload;
    },
    fetchBooks : (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.books = action.payload;
    },
    fetchMovies: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchNotifications: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.notifications = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataUser, fetchDataPhoto, fetchDataFailure, fetchBooks, fetchMovies, fetchNotifications } = dataSlice.actions;

export default dataSlice.reducer;
