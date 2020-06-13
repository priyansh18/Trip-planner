import React from "react";
import Nav from "./components/Nav";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="route-container">
      <Nav />
    </div>
    </Router>
    
  );
}

export default App;
