import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from './components/Footer';
import About from "./pages/About";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Main} /><Redirect to="/projects" />
          <Route exact path="/projects" component={Main} />
          <Route exact path="/about" component={About} />
          <Route path='/resume' component={() => window.location = 'https://docs.google.com/document/d/1sw88-b4F8rUdlXCVsSD_dUfwirS9NjuOvVSu7f1WUTY/edit?usp=sharing'} />
          {/* <Route path='/resume' component={() => <a href= 'https://docs.google.com/document/d/1sw88-b4F8rUdlXCVsSD_dUfwirS9NjuOvVSu7f1WUTY/edit?usp=sharing' target="_blank"></a>}/> */}
          {/* <Route a href="https://docs.google.com/document/d/1sw88-b4F8rUdlXCVsSD_dUfwirS9NjuOvVSu7f1WUTY/edit?usp=sharing" target="_blank"/><a/> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
