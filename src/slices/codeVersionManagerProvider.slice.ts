import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  codeVersionManagerProviders: any[];
  codeVersionManagerProvider: any | undefined;
  error: string | undefined;
  loading: boolean;
  successOperation: boolean;
  isLoadingChange: boolean;
  refreshCodeVersionManagerProviders: boolean;
  successDelete: boolean;
};

const initialState: initialStateType = {
  codeVersionManagerProviders: [],
  codeVersionManagerProvider: {},
  isLoadingChange: false,
  error: undefined,
  successDelete: false,
  refreshCodeVersionManagerProviders: false,
  loading: false,
  successOperation: false,
};
export const codeVersionManagerProviderSlice = createSlice({
  name: 'codeVersionManagerProvider',
  initialState,
  reducers: {
    GET_CODE_VERSION_MANAGER_PROVIDERS_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshCodeVersionManagerProviders = false;
      state.successDelete = false;
      state.codeVersionManagerProviders = [];
    },
    GET_CODE_VERSION_MANAGER_PROVIDERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshCodeVersionManagerProviders = false;
      state.successDelete = false;
      state.codeVersionManagerProviders = action.payload;
    },
    GET_CODE_VERSION_MANAGER_PROVIDERS_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  GET_CODE_VERSION_MANAGER_PROVIDERS_REQUEST,
  GET_CODE_VERSION_MANAGER_PROVIDERS_SUCCESS,
  GET_CODE_VERSION_MANAGER_PROVIDERS_FAILURE,
} = codeVersionManagerProviderSlice.actions;
export default codeVersionManagerProviderSlice.reducer;
