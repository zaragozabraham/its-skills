import { Box, List, ListItem, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { subjectSelector } from "../../features/subjectSlice";
import { Styles } from "../../theme/types";

const SubjectComponent = () => {
    const subject = useAppSelector(subjectSelector);

    const styles: Styles = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            paddingRight: '15px'
        },
        textTitle: {
            fontWeight: 'bold',
            color: '#7267C8'
        },
        textSubtitle: {
            fontWeight: 'bold',
            color: '#7267C8'
        },
        textDescription: {
            fontWeight: 'bold',
            textAlign: 'justify'
        },
        text: {
            fontWeight: 'bold'
        }
    };

    if (subject === undefined) {
        return (
            <Box sx={styles.mainContainer}>
                <Box>
                    <Typography variant="h4" sx={styles.textTitle}> PLAN DE ESTUDIOS </Typography>
                    <Typography sx={styles.textDescription}> Aqui encontraras toda la información sobre el plan de estudios, el objetivo de cada materia, metas e ideales de conocimiento adquiridos en cada asignatura, asi como una serie de recursos para estudiar a fondo cada materia. </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" sx={styles.textSubtitle}> ¿Tienes algo que aportar? </Typography>
                    <Box sx={{ ml: '20px' }}>
                        <Typography sx={styles.text}> Contactanos a través de Discord para enviar tus aportes. Cada aporte nos permite crecer como comunidad. </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h5" sx={styles.textSubtitle}> Recursos recomendados </Typography>
                    <Box sx={{ ml: '20px' }}>
                    <Typography sx={styles.text}> Los recursos pueden ser gratuitos o de paga, para evitar problemas legales está prohibido compartir enlaces de copias no autorizadas (pirateria) de aquellos libros, cursos o tutoriales de paga. </Typography>
                    </Box>
                </Box>
            </Box>
        )
    }
    return (
        <Box sx={styles.mainContainer}>
            <Box>
                <Typography variant="h4" sx={styles.textTitle}> {subject.title} </Typography>
                <Typography sx={styles.textDescription}> {subject.description} </Typography>
            </Box>
            <Box>
                <Typography variant="h5" sx={styles.textSubtitle}> Objetivos </Typography>
                <Box sx={{ ml: '20px' }}>
                    <List sx={{ listStyleType: 'disc' }}>
                        {subject.objectives.map((objective, index) => (
                            <ListItem sx={{ display: 'list-item' }}>
                                <Typography sx={styles.text}> {objective} </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
            <Box>
                <Typography variant="h5" sx={styles.textSubtitle}> Recursos </Typography>
                <Box sx={{ ml: '20px' }}>
                    <List sx={{ listStyleType: 'disc' }}>
                        {subject.resources.map((resource, index) => (
                            <ListItem sx={{ display: 'list-item' }}>
                                <Typography sx={styles.text}> {resource} </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default SubjectComponent;