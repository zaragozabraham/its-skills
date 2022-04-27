import { setUser } from '../features/authSlice';
import { setLoading } from '../features/loaderSlice';
import { AppDispatch } from './../app/store';
import { LoginDTO } from './../views/login/form';

export const fetchLogin = (user: LoginDTO) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch('http://localhost:8000/login');

        if (response.status !== 200) return '';

        const data = await response.json();
        dispatch(setUser(data));
    } catch (error) {
        throw error;
    } finally {
        dispatch(setLoading(false));
    }
};