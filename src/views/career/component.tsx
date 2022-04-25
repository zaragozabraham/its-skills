import { Box, Toolbar, Typography } from '@mui/material';
import { Styles } from '../../theme/types';

const CareerPage = () => {

  const styles: Styles = {
    mainContainer: {
      display: "flex",
      flexDirection: 'column',
      margin: "0 auto",
      marginTop: "2rem",
      maxWidth: "90vw",
    },
    dataContainer: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center'
    },
    textContainer: {
      flex: '3',
      maxWidth: { xs: '90vw', md: '40vw' }
    },
    imageContainer: {
      flex: '1',
      display: { xs: 'none', md: 'flex' },
      maxHeight: '70vh',
      width: 'auto'
    },
  };
  return (
    <Box justifyContent={"center"} sx={styles.mainContainer}>
      <Toolbar />
      <Box sx={styles.dataContainer}>
        <Box sx={styles.textContainer}>
          <Typography variant='h3' color='#958be3' fontWeight='bold'>
            ¿QUÉ ES ITS?
          </Typography>
          <Typography align='justify' fontWeight='bold'>
            Ingeniero en Tecnología de Software o ITS por sus siglas, es una
            carrera universitaria ofrecida por la Facultad de Ingeniería
            Mecánica y Eléctronica de la UANL. El plan de carrera está
            enfocado en la formación de Ingenieros especializados en todas las
            fases del ciclo de vida del software, aplicaciones y resolución de
            problemas de cualquier ámbito.
          </Typography>
        </Box>
        <Box sx={styles.imageContainer}>
          <img
            src={require('../../assets/images/programando.jpg')}
            alt='Laptop Programming'
            loading="lazy"
          />
        </Box>
      </Box>
      <Box>
        <Typography variant='caption' color='#7267C8' fontWeight='bold'>
          El contenido presente en ITS SKILLS está basado en el plan de estudios
          de la carrera ofrecida por la FIME, sin embargo, es de utilidad para
          cualquier persona que busque aprender sobre software, ya sea para
          apoyo durante tus estudios o aprendizaje autónomo.
        </Typography>
      </Box>
    </Box>
  )
}

export default CareerPage