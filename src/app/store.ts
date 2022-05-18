import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loaderReducer from '../features/loaderSlice';
import authReducer from '../features/authSlice';
import subjectReducer from '../features/subjectSlice';
import opinionReducer from '../features/opinionSlice';
import userReducer from '../features/user';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: authReducer,
    users: userReducer,
    subjects: subjectReducer,
    opinions: opinionReducer
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
