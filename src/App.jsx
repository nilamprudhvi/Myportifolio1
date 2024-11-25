import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'; 
import Contact from './components/contact'; 
import Projects from './components/projects'; 
import Resume from './components/resume'; 
import Internships from './components/internships'; 




<nav>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/projects">Projects</a></li>
  <li><a href="/resume">Resume</a></li>
  <li><a href="/internships">Internships</a></li>
</ul>
</nav>




const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Navigation Bar */}
  <br></br>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/internships" element={<Internships />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
