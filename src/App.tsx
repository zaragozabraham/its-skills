import './App.css';
import CustomNavbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/landing/component';
import SubjectPage from './views/subjects/component';
import { Box } from '@mui/material';
import CareerPage from './views/career/component';
import AboutPage from './views/about/component';
import OpinionsPage from './views/opinions/component';
import Login from './views/login/component';
import { useAppSelector } from './app/hooks';
import { tokenSelector } from './features/authSlice';
import Register from './views/register/component';

function App() {
  const token = useAppSelector(tokenSelector);
  console.log(token);

  return (
    <>
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/subjects" element={<SubjectPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/opinions" element={<OpinionsPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
