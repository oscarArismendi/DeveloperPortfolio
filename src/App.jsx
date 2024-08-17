import React from'react';

import { AboutMe } from './components/AboutMe'
import { Home } from './components/Home'

import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
      </Routes>
    </Router>
  );
}

export default App
