import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import projectSlice from './slices/projectSlice';

export const store = configureStore({
  reducer: {
    projects: projectSlice,
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
