import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';

import About from './pages/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
