import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  templates: any[];
  template: any | undefined;
  error: string | undefined;
  loading: boolean;
  successOperation: boolean;
  isLoadingChange: boolean;
  refreshTemplateImplementations: boolean;
  successDelete: boolean;
};

const initialState: initialStateType = {
  templates: [],
  template: {},
  isLoadingChange: false,
  error: undefined,
  successDelete: false,
  refreshTemplateImplementations: false,
  loading: false,
  successOperation: false,
};
export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    GET_TEMPLATES_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshTemplateImplementations = false;
      state.successDelete = false;
      state.templates = [];
    },
    GET_TEMPLATES_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshTemplateImplementations = false;
      state.successDelete = false;
      state.templates = action.payload.data;
    },
    GET_TEMPLATES_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { GET_TEMPLATES_REQUEST, GET_TEMPLATES_SUCCESS, GET_TEMPLATES_FAILURE } =
  templateSlice.actions;
export default templateSlice.reducer;
