import { Box, Button, Paper, TextField, Toolbar, Typography } from '@mui/material'
import { Form, Formik } from 'formik';
import { Styles } from '../../theme/types';
import { initialValues, registerUser, validationSchema } from './form';

const Register = () => {

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
            <Formik
                initialValues={initialValues}
                onSubmit={registerUser}
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
                                    label='Nombre de usuario'
                                    name='userName'
                                    helperText={errors.email} />
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
                                        REGISTRAR
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Form>
                )}
            </Formik>
        </Box >
    )
}

export default Register