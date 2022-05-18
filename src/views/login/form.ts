import { fetchRegisterUser } from './../../services/user';
import * as Yup from 'yup';
import { sha512 } from 'js-sha512';
import { store } from '../../app/store'
import { fetchLogin } from '../../services/user';

export interface LoginDTO {
    email: string,
    password: string
};

export interface RegisterDTO {
    email: string,
    password: string,
    userName: string
};

export const validationSchema: Yup.SchemaOf<LoginDTO> = Yup.object({
    email: Yup.string().required('El email es necesario.').email('El email es invalido.'),
    password: Yup.string().required('La contraseña es necesaria.')
});

export const validationRegisterSchema: Yup.SchemaOf<RegisterDTO> = Yup.object({
    email: Yup.string().required('El email es necesario.').email('El email es invalido.'),
    password: Yup.string().required('La contraseña es necesaria.'),
    userName: Yup.string().required('El nombre de usuario es necesario.')
});

export const initialRegisterValues: RegisterDTO = {
    email: '',
    password: '',
    userName: ''
};

export const initialValues: LoginDTO = {
    email: '',
    password: ''
};

export const loginUser = (values: LoginDTO) => {
    const user: LoginDTO = {
        email: values.email,
        password: sha512(values.password)
    };
    // console.log(user);
    store.dispatch(fetchLogin(user));
};

export const registerUser = (values: RegisterDTO) => {
    const user = {
        email: values.email,
        password: sha512(values.password),
        userName: values.userName,
        type: 'customer'
    }

    store.dispatch(fetchRegisterUser(user));
};