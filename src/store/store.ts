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
  dataManager: {
    dataProcess: [] as IDataItem[],
    dataWorking: [] as IDataItem[],
    dataInterview: [] as IDataItem[],
    tags: [] as string[]
  },
  dataHRBP: {
    dataProcess: [] as IDataItem[],
    dataWorking: [] as IDataItem[],
    dataInterview: [] as IDataItem[],
    tags: [] as string[]
  },
  dataRecruiter: {
    dataProcess: [] as IDataItem[],
    dataWorking: [] as IDataItem[],
    dataInterview: [] as IDataItem[],
    tags: [] as string[]
  },
  role: 'guest' as Role,
  isError: false,
  errorMessage: ''
};
