//Needs to include Name and pull in Navigation component
import React from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function Header() {
    return (
      <header className="header">

        <nav><Navigation /></nav>
        
    </header>
  );
}

export default Header;
