import React from 'react';
import './App.css';
import ToggleButtons from './components/ToggleButton';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ToggleButtons />
      <Navbar />
      <About />
      <Skills />
      <Profile />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;