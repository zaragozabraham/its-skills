import { RootState } from './../app/store';
import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  email?: string,
  token?: string,
  logged?: boolean
}

const sessionAuth = localStorage.getItem('auth');
export const sAuth = sessionAuth ? JSON.parse(sessionAuth) : null;

const initialState: authState = {
  email: sessionAuth ? sAuth.email : undefined,
  token: sessionAuth ? sAuth.token : undefined,
  logged: sessionAuth ? sAuth.logged : false
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.logged = true;
      localStorage.setItem('auth', JSON.stringify({
        email: action.payload.email,
        token: action.payload.token,
        logged: true
      }));
    },
    logout: (state, action) => {
      state.email = undefined;
      state.token = undefined;
      state.logged = false;
      localStorage.removeItem('auth');
    }
  },
});

export const { setUser, logout } = AuthSlice.actions;

export const AuthSelector = (state: RootState) => state.auth;

export const tokenSelector = (state: RootState) => AuthSelector(state).token;
export const emailSelector = (state: RootState) => AuthSelector(state).email;
export const loggedSelector = (state: RootState) => AuthSelector(state).logged;

export default AuthSlice.reducer;