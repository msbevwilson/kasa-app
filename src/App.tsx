import React from "react"; 
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
