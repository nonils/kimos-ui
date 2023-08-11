import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  CICDProviders: any[];
  CICDProvider: any | undefined;
  error: string | undefined;
  loading: boolean;
  successOperation: boolean;
  isLoadingChange: boolean;
  refreshCloudProviders: boolean;
  successDelete: boolean;
};

const initialState: initialStateType = {
  CICDProviders: [],
  CICDProvider: {},
  isLoadingChange: false,
  error: undefined,
  successDelete: false,
  refreshCloudProviders: false,
  loading: false,
  successOperation: false,
};
export const CICDProviderSlice = createSlice({
  name: 'CICDProvider',
  initialState,
  reducers: {
    GET_CICD_PROVIDERS_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.refreshCloudProviders = false;
      state.successDelete = false;
      state.CICDProviders = [];
    },
    GET_CICD_PROVIDERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.refreshCloudProviders = false;
      state.successDelete = false;
      state.CICDProviders = action.payload;
    },
    GET_CICD_PROVIDERS_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  GET_CICD_PROVIDERS_REQUEST,
  GET_CICD_PROVIDERS_SUCCESS,
  GET_CICD_PROVIDERS_FAILURE,
} = CICDProviderSlice.actions;
export default CICDProviderSlice.reducer;
