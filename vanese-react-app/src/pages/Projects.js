//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Password Generator",
    languages: "html, css, js",
    image: "",
    description: "Generates a secured password using uppercase, lowercase, special character and number",
    repo: "https://github.com/Vanese15/3--Password-Generator",
  },
  {
    id: 1,
    title: "README Generator",
    languages: "js, node js",
    image: "",
    description: "Users can generate a README using commandline",
    repo: "https://github.com/Vanese15/9---README-Generator",
  },
  {
    id: 2,
    title: "Team Roster Generator",
    languages: "html, css, js, node",
    image: "",
    description: "A Node.js command-line application that takes in information about employees on a software engineering team. The applicaltion allows users to select a role from the options. When all the desired selections are chosen, the application generates a team profile in HTML.",
    repo: "https://github.com/Vanese15/Challenege10---Team-Roster",
  },
  
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
