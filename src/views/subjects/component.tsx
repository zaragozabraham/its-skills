import { Box, CssBaseline, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import SideDrawer from '../../components/sideDrawer/component';
import SubjectComponent from '../../components/subject/component';
import { subjectsSelector } from '../../features/subjectSlice';
import { fetchSubjects } from '../../services/subject';
import { Styles } from '../../theme/types';

const SubjectPage = () => {
  const dispatch = useDispatch();
  const subjects = useAppSelector(subjectsSelector);
  
  useEffect(() => {
    dispatch(fetchSubjects());
    console.log(subjects)
  }, [dispatch]);
  
  const styles: Styles = {
    mainContainer: {
      display: "flex",
    }
  };

  return (
    <Box sx={styles.mainContainer}>
      <CssBaseline />
      <SideDrawer />
      <Box sx={{ flexGrow: 1, p: 3, mt: 1,  }}>
        <Toolbar />
        <SubjectComponent />
      </Box>
    </Box>
  )
}

export default SubjectPage