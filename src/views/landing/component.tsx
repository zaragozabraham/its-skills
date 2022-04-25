import { Box, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Styles } from '../../theme/types';
import '../style.css';

const LandingPage = () => {
  const purple = '#958be3';

  const navigate = useNavigate();

  const styles: Styles = {
    mainContainer: {
      display: "flex",
      margin: "0 auto",
      height: '100vh',
      width: '100vw',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    imageContainer: {
      flex: '1',
      display: { xs: 'none', md: 'flex' },
      marginLeft: '2.3rem',
      position: 'relative',
      height: '100vh',
      width: '70vw',
    },
    dataContainer: {
      flex: '1',
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: { xs: 'center', md: 'self-start'},
      marginLeft: "1rem",
    },
    conButton: {
      backgroundColor: purple,
      marginRight: '1vw'
    },
    outButton: {
      borderColor: purple,
      color: purple
    }
  };

  return (
    <Box>
    <Toolbar />
      <Box justifyContent='center' sx={styles.mainContainer}>
        <Box sx={styles.imageContainer}>
          <img
            className="img"
            src={require('../../assets/images/trabajando.jpg')}
            loading="lazy"
            alt='Coding'
          />
        </Box>
        <Box sx={styles.dataContainer}>
          <Typography variant='h2' color='#00e677' fontWeight='bold' >ITS SKILLS</Typography>
          <Typography variant='h6'>Un sitio de apoyo al estudiante</Typography>
          <Box sx={styles.buttonContainer}>
            <Button variant='contained' sx={styles.conButton} onClick={() => navigate('/subjects')} >Red de Materias</Button>
            <Button variant='outlined' sx={styles.outButton} onClick={() => navigate('/career')} >¿Qué es ITS?</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPage