import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-sm navbar-dark green orange-text">
        <div className="navbar-brand orange-text">
          Ernest Urzua<span className="large">Portfolio</span>
        </div>
        <span>
        <ul className="navbar-nav">
            <li className="nav-link">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
          </span>

      </nav>
   
  );
}

export default Navbar;
