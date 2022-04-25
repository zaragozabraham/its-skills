import { Box, IconButton, SvgIcon, Toolbar, Typography } from '@mui/material'
import { Styles } from '../../theme/types';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../style.css'

const AboutPage = () => {

  const iconColor = '#7267C8';
  const detailColor = '#00e677';
  
  const styles: Styles = {
    mainContainer: {
      display: "flex",
      flexDirection: 'column',
      margin: "0 auto",
      marginTop: "2rem",
      maxWidth: "90vw",
    },
    imageContainer: {
      position: 'relative',
      maxWidth: '100%',
      height: '80vh',
    },
    joinContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    leftContainer: {
      display: { xs: 'none', md: 'flex' },
      position: 'relative',
      maxWidth: '100%',
      height: '30vh',
      width: '60vh',
    },
    rightContainer: {
      flex: '1',
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center'
    }
  }

  return (
    <Box sx={styles.mainContainer}>
      <Toolbar />
      <Box>
        <Typography align='center' variant='h3' color={detailColor} fontWeight='bold'>
          ITS SKILL
        </Typography>
        <Typography variant='h6' align='center'>
          ITS SKILLS es un proyecto realizado por estudiantes de ingenieria de
          software, con el proposito de fomentar el aprendizaje autodidacta por
          parte de los futuros programadores, así como crear una comunidad de
          estudiantes universitarios o independientes que se apoyen a mejorar
          sus conocimientos y compartir sus experiencias con las nuevas
          generaciones.
        </Typography>
      </Box>
      <Box sx={styles.imageContainer}>
        <img
          className="img"
          src={require('../../assets/images/dialogo.jpg')}
          alt='Dialog'
          loading="lazy"
        />
      </Box>
      <Box sx={styles.joinContainer}>
        <Box sx={styles.leftContainer}>
          <img
            className="img"
            src={require('../../assets/images/comunidad.jpg')}
            alt='Community'
            loading="lazy"
          />
        </Box>
        <Box sx={styles.rightContainer}>
          <Box>
            <Typography variant='h6' color={detailColor} fontWeight='bold'>FORMA PARTE DE NUESTRA COMUNIDAD</Typography>
          </Box>
          <Box>
            <Typography fontWeight='bold'>
              Sumate a nuestro proyecto, apoyando, compartiendo tu opinion y
              experiencias en el mundo del software.
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ color: iconColor }} onClick={() => console.log('discord')}>
              <DiscordIcon />
            </IconButton>
            <IconButton sx={{ color: iconColor }} onClick={() => console.log('twitter')}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: iconColor }} onClick={() => console.log('facebook')}>
              <FacebookIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function DiscordIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
    </SvgIcon>
  );
}

export default AboutPage