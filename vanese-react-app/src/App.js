import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


import { allProjects, featuredProjects } from './utils/projectList';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Header />

      <Route exact path="/">
        <ScrollToTop />
        <Home featuredProjects={featuredProjects} />
      </Route>

      <Route exact path="/about">
        <ScrollToTop />
        <About />
      </Route>

      <Route exact path="/projects">
        <ScrollToTop />
        <Projects allProjects={allProjects} />
      </Route>

      <Route exact path="/contact">
        <ScrollToTop />
        <Contact />
      </Route>

      <Footer />
      <div>
        
      </div>
    </Router>
  );
}

export default App;
