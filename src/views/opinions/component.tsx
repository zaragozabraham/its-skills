import { Box, Toolbar, Typography } from '@mui/material';
import { Styles } from '../../theme/types';
import '../style.css';

const OpinionsPage = () => {
  const styles: Styles = {
    mainContainer: {
      display: "flex",
      flexDirection: 'column',
      margin: "0 auto",
      marginTop: "2rem",
      maxWidth: "100vw",
      gap: "1rem",
    },
    imageContainer: {
      display: 'flex',
      margin: '0 auto',
      position: 'relative',
      height: { xs: '25vh', md: '50vh'},
      width: '55vw',
    },
  };

  return (
    <Box justifyContent={"center"} sx={styles.mainContainer}>
      <Toolbar />
      <Box sx={styles.imageContainer}>
        <img
          className="img"
          src={require('../../assets/images/mantenimiento.jpg')}
          loading="lazy"
          alt='Coding'
        />
      </Box>
      <Box sx={{ textAlign: 'center'}}>
        <Typography variant='h3' color='#002333' fontWeight='bold'>
          WORK IN PROGRESS
        </Typography>
      </Box>
    </Box>
  )
}

export default OpinionsPage