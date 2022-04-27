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

export default AuthSlice.reducer;