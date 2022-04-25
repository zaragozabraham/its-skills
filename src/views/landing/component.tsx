import { Box, Button, Typography } from '@mui/material'
import { Styles } from '../../theme/types';

const LandingPage = () => {

  const styles: Styles = {
    mainContainer: {
      display: "flex",
      margin: "0 auto",
      marginTop: "2rem",
      maxWidth: "90vw",
      gap: "1rem",
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    imageContainer: {
      flex: '1',
      display: { xs: 'none', md: 'flex' }
    },
    dataContainer: {
      flex: '2',
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'self-start'
    },
    conButton: {
      backgroundColor: '#958be3',
      marginRight: '1vw'
    },
    outButton: {
      borderColor: '#958be3',
      color: '#958be3'
    }
  };

  return (
      <Box justifyContent={"center"} sx={styles.mainContainer}>
        <Box sx={styles.imageContainer}>
          <img
            src={require('../../assets/images/trabajando.jpg')}
            loading="lazy"
          />
        </Box>
        <Box sx={styles.dataContainer}>
          <Typography variant='h2' color='#00e677' fontWeight='bold' >ITS SKILLS</Typography>
          <Typography variant='h6'>Un sitio de apoyo al estudiante</Typography>
          <Box sx={styles.buttonContainer}>
            <Button variant='contained' sx={styles.conButton}>Red de Materias</Button>
            <Button variant='outlined' sx={styles.outButton}>¿Qué es ITS?</Button>
          </Box>
        </Box>
      </Box>
  )
}

export default LandingPage