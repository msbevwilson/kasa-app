import React from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Housing from './components/Housing';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <div className="App">

      <Router>
      <header className="App-header">
        <p>
          header?
        </p>
      </header>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/housing" element={ <Housing/> } />
        </Routes>
      </Router>
    </div>
    </>
  )
}
