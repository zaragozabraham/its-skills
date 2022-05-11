import * as Yup from 'yup';
import { sha512 } from 'js-sha512';
import { store } from '../../app/store'
import { fetchRegisterUser } from '../../services/user';

export interface CreateUserDTO {
    userName: string;
    email: string;
    password: string;
    type?: string;
}

export interface FormUserDTO {
    userName: string;
    email: string;
    password: string;
}

export const validationSchema: Yup.SchemaOf<FormUserDTO> = Yup.object({
    userName: Yup.string().required('El nombre de usuario es necesario.'),
    email: Yup.string().required('El email es necesario.').email('El email es invalido.'),
    password: Yup.string().required('La contraseña es necesaria.')
});

export const initialValues: CreateUserDTO = {
    userName: '',
    email: '',
    password: '',
    type: 'customer'
};

export const registerUser = (values: CreateUserDTO) => {
    const user: CreateUserDTO = {
        userName: values.userName,
        email: values.email,
        password: sha512(values.password),
        type: 'customer'
    };
    console.log(user);
    store.dispatch(fetchRegisterUser(user));
}