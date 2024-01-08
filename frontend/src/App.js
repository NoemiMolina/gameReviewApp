// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterForm from './components/Authentification/RegisterForm';
import WelcomePage from './components/Authentification/WelcomePage';
import HomePage from './components/Game/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route 
          path="/register" 
          element={<RegisterForm />} />
          <Route
            path="/welcome/:username"
            element={<WelcomePage />}
          />
          <Route
            path="/home"
            element={<HomePage />}
          />
          <Route
            path="/"
            element={<Navigate to="/register" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
