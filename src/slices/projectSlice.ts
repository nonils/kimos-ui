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
  name: 'projects',
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
    CREATE_PROJECT_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshProjects = false;
      state.successDelete = false;
      state.projects = [];
    },
    CREATE_PROJECT_SUCCESS: (state) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = true;
      state.refreshProjects = true;
      state.successDelete = false;
      state.projects = [];
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
