import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import CustomNavbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/landing/component';
import SubjectPage from './views/subjects/component';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subjects" element={<SubjectPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
