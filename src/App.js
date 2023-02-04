import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
