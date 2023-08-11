import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  applications: any[];
  application: any | undefined;
  error: string | undefined;
  loading: boolean;
  successOperation: boolean;
  isLoadingChange: boolean;
  currentPage: number;
  refreshProjects: boolean;
  successDelete: boolean;
  totalElements: number;
  numberOfPages: number;
  pageSize: number;
};
const initialState: initialStateType = {
  applications: [],
  application: {},
  isLoadingChange: false,
  error: undefined,
  successDelete: false,
  refreshProjects: false,
  loading: false,
  successOperation: false,
  totalElements: 0,
  currentPage: 0,
  numberOfPages: 0,
  pageSize: 10,
};
export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    CHANGE_PAGE: (state, action) => {
      state.currentPage = action.payload.page;
      state.applications = [];
    },
    GET_APPLICATIONS_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.applications = [];
    },
    GET_APPLICATIONS_REQUEST_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.applications = action.payload.content;
      state.currentPage = action.payload.pageNumber;
      state.pageSize = action.payload.pageSize;
      state.totalElements = action.payload.totalElements;
      state.numberOfPages = action.payload.totalElements / action.payload.pageSize;
    },
    GET_APPLICATIONS_REQUEST_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    GET_APPLICATIONS_BY_PROJECT_ID_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.applications = [];
    },
    GET_APPLICATIONS_BY_PROJECT_ID_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.applications = action.payload.content;
      state.currentPage = action.payload.pageNumber;
      state.pageSize = action.payload.pageSize;
      state.totalElements = action.payload.totalElements;
      state.numberOfPages = action.payload.totalElements / action.payload.pageSize;
    },
    GET_APPLICATIONS_BY_PROJECT_ID_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    GET_APPLICATION_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.application = undefined;
    },
    GET_APPLICATION_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.application = action.payload;
    },
    CREATE_APPLICATION_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.applications = [];
    },
    CREATE_APPLICATION_SUCCESS: (state, payload) => {
      state.loading = false;
      state.error = undefined;
      state.application = payload.payload;
      state.successOperation = true;
      state.refreshProjects = true;
      state.successDelete = false;
    },
    CREATE_APPLICATION_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.applications = [];
    },
  },
});

export const {
  CHANGE_PAGE,
  GET_APPLICATIONS_REQUEST_FAILURE,
  GET_APPLICATIONS_REQUEST_SUCCESS,
  GET_APPLICATIONS_REQUEST,
  GET_APPLICATION_REQUEST,
  GET_APPLICATION_SUCCESS,
  CREATE_APPLICATION_REQUEST,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAILURE,
} = applicationSlice.actions;
export default applicationSlice.reducer;
