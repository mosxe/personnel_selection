import { configureStore } from '@reduxjs/toolkit';
import { IDataItem, Role } from 'types';
import { API } from './apiSlice';

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware)
});

export const initialState = {
  dataProcess: {
    data: [] as IDataItem[],
    tags: [] as string[]
  },
  dataWorking: {
    data: [] as IDataItem[],
    tags: [] as string[]
  },
  dataInterview: {
    data: [] as IDataItem[],
    tags: [] as string[]
  },
  role: 'guest' as Role,
  isError: false,
  errorMessage: ''
};
