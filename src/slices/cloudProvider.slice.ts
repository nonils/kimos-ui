import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  cloudProviders: any[];
  cloudProvider: any | undefined;
  error: string | undefined;
  loading: boolean;
  successOperation: boolean;
  isLoadingChange: boolean;
  refreshCloudProviders: boolean;
  successDelete: boolean;
};

const initialState: initialStateType = {
  cloudProviders: [],
  cloudProvider: {},
  isLoadingChange: false,
  error: undefined,
  successDelete: false,
  refreshCloudProviders: false,
  loading: false,
  successOperation: false,
};
export const cloudProviderSlice = createSlice({
  name: 'cloudProvider',
  initialState,
  reducers: {
    GET_CLOUD_PROVIDERS_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshCloudProviders = false;
      state.successDelete = false;
      state.cloudProviders = [];
    },
    GET_CLOUD_PROVIDERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshCloudProviders = false;
      state.successDelete = false;
      state.cloudProviders = action.payload;
    },
    GET_CLOUD_PROVIDERS_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  GET_CLOUD_PROVIDERS_REQUEST,
  GET_CLOUD_PROVIDERS_SUCCESS,
  GET_CLOUD_PROVIDERS_FAILURE,
} = cloudProviderSlice.actions;
export default cloudProviderSlice.reducer;
