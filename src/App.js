import logo from './logo.svg';
import './App.css';
import About from './sections/About';
import Hero from './sections/Hero';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - true
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default App;
