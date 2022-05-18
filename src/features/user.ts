import { RootState } from './../app/store';
import { createSlice } from '@reduxjs/toolkit';

export interface User {
    id?: string,
    email?: string
    userName?: string,
    type?: string
}

export interface userState {
    users?: User[]
}

const initialState: userState = {
    users: []
}

export const UserSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state = action.payload;
        },
        getUser: (state, action) => {
            state.users?.filter((user) => user.id === action.payload)
        }
    }
});

export const { setUsers, getUser } = UserSlice.actions;
export const UsersSelector = (state: RootState) => state.users;
export const userSelector = (state: RootState) => UsersSelector(state).users;
export default UserSlice.reducer;