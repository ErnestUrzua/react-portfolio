import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        KDA <span className= "akali">Akali</span> Clicky Game 
        </div>
    </nav>
  );
}

export default Navbar;
