import React from 'react';
import './App.css';
import Header from './COMPONENTS/Header/Header';
import Home from './COMPONENTS/Home/Home';
import About from './COMPONENTS/About/About';
import Skills from './COMPONENTS/Skills/Skills'
import Contact from './COMPONENTS/Contact/Contact';
import Footer from './COMPONENTS/Footer/Footer';
import Scrollup from './COMPONENTS/Scrollup/Scrollup';
import Work from './COMPONENTS/Work/Work';
// import ScrollUp from './COMPONENTS/Scrollup/Scrollup';


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>

        <Footer/>
      <Scrollup/>
    </div>
  );
}

export default App;
