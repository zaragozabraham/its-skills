import { Box, Divider, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { opinionsSelector } from '../../features/opinionSlice';
import { fetchOpinions } from '../../services/opinions';
import { Styles } from '../../theme/types';
import '../style.css';

const OpinionsPage = () => {

    const dispatch = useDispatch();
    const opinions = useAppSelector(opinionsSelector);

    useEffect(() => {
        dispatch(fetchOpinions());
    }, [dispatch]);

    const styles: Styles = {
        mainContainer: {
            display: "flex",
            flexDirection: 'column',
            heigh: '100vh',
            width: '100vw',
            margin: "20px",
            gap: "1rem",
        },
        imageContainer: {
            display: 'flex',
            margin: '0 auto',
            position: 'relative',
            height: { xs: '25vh', md: '50vh' },
            width: '55vw',
        },
        opinionContainer: {
            backgroundColor: '#c3d8e0',
            padding: '20px',
            margin: '10px',
            borderRadius: '10px'
        }
    };

    return (
        <Box sx={styles.mainContainer}>
            <Toolbar />
            <Box>
                <Typography variant='h3' color='#002333' fontWeight='bold'>
                    OPINIONES
                </Typography>
            </Box>
            {opinions.map((opinion, index) => (
                <Box sx={styles.opinionContainer}>
                    <Box sx={{mb: '10px'}}>
                        <Typography sx={{fontWeight: 'bold'}}> Anonimo </Typography>
                    </Box>
                    <Divider sx={{ backgroundColor: 'black', width: '100px', mb: '10px'}}/>
                    <Box sx={{mb: '10px'}}>
                        <Typography> {opinion.description} </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default OpinionsPage;