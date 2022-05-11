import { RootState } from './../app/store';
import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  email?: string,
  token?: string
}

const initialState: authState = {
  email: undefined,
  token: undefined
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = AuthSlice.actions;

export const AuthSelector = (state: RootState) => state.auth;

export const tokenSelector = (state: RootState) => AuthSelector(state).token;
export const emailSelector = (state: RootState) => AuthSelector(state).email;

export default AuthSlice.reducer;