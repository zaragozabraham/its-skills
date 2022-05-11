import * as Yup from 'yup';
import { sha512 } from 'js-sha512';
import { store } from '../../app/store'
import { fetchLogin } from '../../services/user';

export interface LoginDTO {
    email: string,
    password: string
}

export const validationSchema: Yup.SchemaOf<LoginDTO> = Yup.object({
    email: Yup.string().required('El email es necesario.').email('El email es invalido.'),
    password: Yup.string().required('La contraseña es necesaria.')
});

export const initialValues: LoginDTO = {
    email: '',
    password: ''
};

export const loginUser = (values: LoginDTO) => {
    const user:LoginDTO = {
        email: values.email,
        password: sha512(values.password)
    };
    // console.log(user);
    store.dispatch(fetchLogin(user));
}