import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/hero'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <div className='banner'></div>
    </div>
  );
}

export default App;
