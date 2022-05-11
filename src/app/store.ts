import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loaderReducer from '../features/loaderSlice';
import authReducer from '../features/authSlice';
import subjectReducer from '../features/subjectSlice';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
    subjects: subjectReducer
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
