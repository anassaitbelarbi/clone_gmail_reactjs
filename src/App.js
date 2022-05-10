import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Mail from './Mail';
import MailList from './MailList';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Routes>
          <Route path="/mail" element={<Mail />} />
          <Route path="/"  element={<MailList />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
