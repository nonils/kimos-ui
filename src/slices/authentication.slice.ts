import { createSlice } from '@reduxjs/toolkit';
import { IAccount } from '../types';

type initialStateType = {
  user: IAccount | undefined;
  error: string | undefined;
  loading: boolean;
  isAuthenticated: boolean;
  successOperation: boolean;
  isLoadingChange: boolean;
  token: string | undefined;
};

const initialState: initialStateType = {
  user: undefined,
  isLoadingChange: false,
  error: undefined,
  loading: false,
  isAuthenticated: false,
  successOperation: false,
  token: undefined,
};
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    SET_ACCESS_TOKEN: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    GET_USER_REQUEST: (state) => {
      state.loading = true;
      state.error = undefined;
      state.successOperation = false;
      state.user = undefined;
    },
    GET_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.successOperation = false;
      state.user = action.payload;
    },
    GET_USER_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.successOperation = false;
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { SET_ACCESS_TOKEN, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
