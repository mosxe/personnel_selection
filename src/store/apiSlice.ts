import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDataItem, IResponseData, Role } from 'types';
import mockData from './mockData.json';
const baseURL = window.location.origin;
const API_URL = import.meta.env.DEV
  ? 'https://dummyjson.com/products'
  : baseURL +
    '/custom_web_template.html?custom_web_template_id=7223406077446465954';

const urlBuilder = (params?: { [key: string]: any }) => {
  return {
    url: API_URL,
    params: { ...params }
  };
};

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getData: builder.query<IResponseData, void>({
      query: () =>
        urlBuilder({
          action: 'getData'
        }),
      transformResponse: (response: IResponseData) => {
        if (import.meta.env.DEV) {
          const mockDataResponse: IResponseData = {
            dataProcess: {
              data: mockData.dataProcess.data as IDataItem[],
              tags: mockData.dataProcess.tags as string[]
            },
            dataWorking: {
              data: mockData.dataWorking.data as IDataItem[],
              tags: mockData.dataWorking.tags as string[]
            },
            dataInterview: {
              data: mockData.dataInterview.data as IDataItem[],
              tags: mockData.dataInterview.tags as string[]
            },
            role: mockData.role as Role,
            isError: false,
            errorMessage: ''
          };
          return new Promise((resolve) => {
            return setTimeout(() => resolve(mockDataResponse), 1500);
          });
        } else {
          return response;
        }
      }
    })
    // sendMessage: builder.query<any, ISendMessage>({
    //   query: ({ id, module_id, lesson_id, text }) => ({
    //     url: API_URL + '&action=sendMessage',
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       id,
    //       module_id,
    //       lesson_id,
    //       text
    //     })
    //   })
    // }),
    // updateStatusLesson: builder.query<any, IUpdateStatusLesson>({
    //   query: ({ education_plan_id, lesson_id }) => ({
    //     url: API_URL + '&action=updateStatusLesson',
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       education_plan_id: education_plan_id,
    //       lesson_id: lesson_id
    //     })
    //   })
    // }),
    // activeCourse: builder.query<IActiveCourseResponse, void>({
    //   query: () => ({
    //     url: import.meta.env.DEV
    //       ? 'https://dummyjson.com/products/add'
    //       : API_URL + '&action=activeCourse',
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' }
    //   }),
    //   transformResponse: (response: IActiveCourseResponse) => {
    //     if (import.meta.env.DEV) {
    //       return {
    //         id: '1234567890',
    //         isError: false,
    //         errorMessage: ''
    //       };
    //     } else {
    //       return response;
    //     }
    //   }
    // }),
    // activeAssessment: builder.query<
    //   IActiveAssessmentResponse,
    //   IUpdateStatusLesson
    // >({
    //   query: ({ education_plan_id, lesson_id }) => ({
    //     url: import.meta.env.DEV
    //       ? 'https://dummyjson.com/products/add'
    //       : API_URL + '&action=activeAssessment',
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       education_plan_id: education_plan_id,
    //       lesson_id: lesson_id
    //     })
    //   })
    // })
  })
});

export const { useGetDataQuery } = API;
