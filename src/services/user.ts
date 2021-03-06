import { setUser } from '../features/authSlice';
import { setLoading } from '../features/loaderSlice';
import { AppDispatch } from './../app/store';
import { LoginDTO } from './../views/login/form';

export const fetchLogin = (user: LoginDTO) => async (dispatch: AppDispatch) => {
    try {
        // console.log(user);
        dispatch(setLoading(true));
        const response = await fetch('http://localhost:8000/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.status !== 200) return '';

        const data = await response.json();
        console.log(data)
        dispatch(setUser(data));
    } catch (error) {
        throw error;
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetchRegisterUser = (user: LoginDTO) => async (dispatch: AppDispatch) => {
    try {
        console.log(user);
        dispatch(setLoading(true));
        const response = await fetch('http://localhost:8000/users/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.status !== 200) return '';

        const data = await response.json();
        // dispatch(setUser(data));
    } catch (error) {
        throw error;
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetchUserByID = (id: string) => async (dispatch: AppDispatch) => {
    const req = `"id" : ${id}`;
    try {
        const response = await fetch(`http://localhost:8000/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        });
        if (response.status !== 200) return '';

        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
};