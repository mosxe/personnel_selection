import { configureStore } from '@reduxjs/toolkit';
import { API } from './apiSlice';

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware)
});

export const initialState = {
  course: null,
  compound_program: {
    id: '',
    data: []
  },
  materials: {
    title: '',
    description: '',
    data: null
  },
  isError: false,
  errorMessage: ''
};
