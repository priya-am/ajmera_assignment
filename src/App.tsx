import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ProfileProvider } from './context/ProfileContext';
import Routes from './routes';

const App: React.FC = () => (
  <ProfileProvider>
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  </ProfileProvider>
);

export default App;
