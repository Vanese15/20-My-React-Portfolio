import React from 'react';
import { useState } from 'react';

function Navigation(){
  const [aboutState, setAbout] = useState(true);
  const [projectsState, setProjects] = useState(false);
  const [contactState, setContact] = useState(false);


      return (
        <nav>
        <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link " href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        </nav>
      )
}


export default Navigation;
