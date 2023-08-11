import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import projectSlice from './slices/project.slice';
import authenticationSlice from './slices/authentication.slice';
import codeVersionManagerProviderSlice from './slices/codeVersionManagerProvider.slice';
import cloudProviderSlice from './slices/cloudProvider.slice';
import CICDProviderSlice from './slices/CICDProvider.slice';
import templateImplementationSlice from './slices/templateImplementation.slice';
import templateSlice from './slices/template.slice';
import applicationSlice from './slices/application.slice';

export const store = configureStore({
  reducer: {
    project: projectSlice,
    authentication: authenticationSlice,
    application: applicationSlice,
    codeVersionManagerProvider: codeVersionManagerProviderSlice,
    cloudProvider: cloudProviderSlice,
    CICDProvider: CICDProviderSlice,
    templateImplementation: templateImplementationSlice,
    template: templateSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
