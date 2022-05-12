import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Header from './Header';
// import SideBar from './SideBar';
import Mail from './pages/Mail';
import MailList from './pages/MailList';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mail" element={<Mail />} />
        <Route path="/" element={<MailList />} />
      </Routes>
    </Router>
  );
}

export default App;
