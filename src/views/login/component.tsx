import { Box, Button, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { loggedSelector } from '../../features/authSlice';
import { Styles } from '../../theme/types';
import { initialRegisterValues, initialValues, loginUser, registerUser, validationRegisterSchema, validationSchema } from './form';

const Login = () => {
    const [showRegister, setShowRegister] = useState<boolean>(false);
    const logged = useAppSelector(loggedSelector);
    const navigate = useNavigate();

    const toggleRegister = () => {
        setShowRegister(!showRegister);
    }

    useEffect(() => {
        if (logged) {
            return navigate("/");
        }
    }, [logged, navigate]);

    const styles: Styles = {
        loginContainer: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        loginForm: {
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
            height: '500px',
            padding: '20px',
            textAlign: 'center'
        },
        title: {
            marginTop: '40px',
            marginBottom: '10px',
            fontWeight: 'bold',
            color: '#04E677'
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            justifyContent: 'space-evenly',
            flex: 1
        },
        conButton: {
            backgroundColor: '#04E677',
            width: '220px',
            height: '50px',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#0ca258',
            }
        },
    };
    return (
        <Box sx={styles.loginContainer} >
            <Toolbar />
            <Box sx={{ display: showRegister ? 'none' : 'flex' }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={loginUser}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Paper elevation={6} sx={styles.loginForm}>
                                <Typography variant='h2' sx={styles.title}>
                                    ITS SKILLS
                                </Typography>
                                <Box sx={styles.inputContainer}>
                                    <TextField
                                        error={Boolean(errors.email)}
                                        onChange={handleChange}
                                        label='Email'
                                        name='email'
                                        type='email'
                                        helperText={errors.email} />
                                    <TextField
                                        error={Boolean(errors.password)}
                                        onChange={handleChange} label='Password'
                                        name='password'
                                        type='password'
                                        helperText={errors.password} />
                                    <Box>
                                        <Button variant='contained' sx={styles.conButton} type='submit'>
                                            INGRESAR
                                        </Button>
                                        <Box sx={{ marginTop: '10px' }}>
                                            <Typography variant='caption'> No tienes cuenta? </Typography>
                                            <Button variant='text' onClick={toggleRegister}>
                                                <Typography variant='caption' sx={{ pt: '2px' }}>Registrate ahora!</Typography>
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Box>
            <Box sx={{ display: showRegister ? 'flex' : 'none' }}>
                <Formik
                    initialValues={initialRegisterValues}
                    onSubmit={registerUser}
                    validationSchema={validationRegisterSchema}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Paper elevation={6} sx={styles.loginForm}>
                                <Typography variant='h2' sx={styles.title}>
                                    ITS SKILLS
                                </Typography>
                                <Box sx={styles.inputContainer}>
                                    <TextField
                                        error={Boolean(errors.userName)}
                                        onChange={handleChange}
                                        label='Nombre de Usuario'
                                        name='userName'
                                        type='userName'
                                        helperText={errors.userName} />
                                    <TextField
                                        error={Boolean(errors.email)}
                                        onChange={handleChange}
                                        label='Email'
                                        name='email'
                                        type='email'
                                        helperText={errors.email} />
                                    <TextField
                                        error={Boolean(errors.password)}
                                        onChange={handleChange} label='Password'
                                        name='password'
                                        type='password'
                                        helperText={errors.password} />
                                    <Box>
                                        <Button variant='contained' sx={styles.conButton} type='submit'>
                                            REGISTRARSE
                                        </Button>
                                        <Box sx={{ marginTop: '10px' }}>
                                            <Typography variant='caption'> Ya tienes cuenta? </Typography>
                                            <Button variant='text' onClick={toggleRegister}>
                                                <Typography variant='caption' sx={{ pt: '2px' }}>Inicia sesion!</Typography>
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box >
    )
}

export default Login