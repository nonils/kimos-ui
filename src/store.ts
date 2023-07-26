import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import projectSlice from './slices/project.slice';
import authenticationSlice from './slices/authentication.slice';

export const store = configureStore({
  reducer: {
    projects: projectSlice,
    authentication: authenticationSlice,
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
