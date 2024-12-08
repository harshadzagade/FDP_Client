// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailure from './components/PaymentFailure';
import IMM_LandingPage from './components/IMM_LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/IMM" element={<IMM_LandingPage />} />
        <Route path="/" element={<Navigate to="/IMM" replace />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/failure" element={<PaymentFailure />} />
      </Routes>
    </Router>
  );
};

export default App;
