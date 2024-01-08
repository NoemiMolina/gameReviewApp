// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterForm from './components/Authentification/RegisterForm';
import WelcomePage from './components/Authentification/WelcomePage';
import HomePage from './components/Game/HomePage';
import Navbar from './components/Navbar/Navbar';
import GameList from './components/Game/GameList';

function App() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleStart = () => {
    setShowNavbar(true);
  };

  return (
    <Router>
      <div className="App">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/welcome/:username" element={<WelcomePage />} />
          <Route path="/home*" element={<HomePage onStart={handleStart} />} />
          <Route path="/games/*" element={<GameList />} />
          <Route path="/" element={<Navigate to="/register" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;