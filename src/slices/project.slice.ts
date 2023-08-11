// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  projects: any[];
  project: any | undefined;
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
  projects: [],
  project: {},
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
export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    CHANGE_PAGE: (state, action) => {
      state.currentPage = action.payload.page;
      state.projects = [];
    },
    GET_PROJECTS_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.projects = [];
    },
    GET_PROJECTS_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.projects = action.payload.content;
      state.currentPage = action.payload.pageNumber;
      state.pageSize = action.payload.pageSize;
      state.totalElements = action.payload.totalElements;
      state.numberOfPages = action.payload.totalElements / action.payload.pageSize;
    },
    GET_PROJECTS_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    GET_PROJECT_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.project = undefined;
    },
    GET_PROJECT_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.project = action.payload;
    },
    CREATE_PROJECT_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.projects = [];
    },
    CREATE_PROJECT_SUCCESS: (state, payload) => {
      state.loading = false;
      state.error = undefined;
      state.project = payload.payload;
      state.successOperation = true;
      state.refreshProjects = true;
      state.successDelete = false;
    },
    CREATE_PROJECT_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.projects = [];
    },
  },
});

export const {
  CHANGE_PAGE,
  GET_PROJECTS_REQUEST,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
} = projectSlice.actions;
export default projectSlice.reducer;
