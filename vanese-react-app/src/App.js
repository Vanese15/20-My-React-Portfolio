import React, { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Header />
      <div className="flex-column justify-flex-start min-100-vh">
          {/* <Header />
          <Home /> */}
          <div >
          <Route>
            <Route path="/"
            element={<Home />}
           />

          <Route path="/about"
            element={<About />}
           />

          <Route path="/projects"
            element={<About />}
           />
 
          <Route path="/contact"
           element={<Contact />}
           />
        </Route>

        <Footer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
