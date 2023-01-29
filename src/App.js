import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={About} />
          <Route path='/contact-me' component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
