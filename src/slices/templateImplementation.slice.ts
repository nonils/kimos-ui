import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  templateImplementations: any[];
  templateImplementation: any | undefined;
  error: string | undefined;
  loading: boolean;
  successOperation: boolean;
  isLoadingChange: boolean;
  refreshTemplateImplementations: boolean;
  successDelete: boolean;
};

const initialState: initialStateType = {
  templateImplementations: [],
  templateImplementation: {},
  isLoadingChange: false,
  error: undefined,
  successDelete: false,
  refreshTemplateImplementations: false,
  loading: false,
  successOperation: false,
};
export const templateImplementationSlice = createSlice({
  name: 'templateImplementation',
  initialState,
  reducers: {
    GET_TEMPLATE_IMPLEMENTATIONS_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshTemplateImplementations = false;
      state.successDelete = false;
      state.templateImplementations = [];
    },
    GET_TEMPLATE_IMPLEMENTATIONS_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshTemplateImplementations = false;
      state.successDelete = false;
      state.templateImplementations = action.payload.content;
    },
    GET_TEMPLATE_IMPLEMENTATIONS_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  GET_TEMPLATE_IMPLEMENTATIONS_REQUEST,
  GET_TEMPLATE_IMPLEMENTATIONS_SUCCESS,
  GET_TEMPLATE_IMPLEMENTATIONS_FAILURE,
} = templateImplementationSlice.actions;
export default templateImplementationSlice.reducer;
