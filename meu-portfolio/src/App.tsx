
import { useState, useEffect } from 'react'; // 1. Importe também o useEffect
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import AboutSection from './Components/AboutSection/AboutSection';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  // 2. Crie um estado para guardar o tema atual. 'dark' é o padrão.

  return (
    <>
      {/* 5. Passe a função e o tema atual para o Header */}
      <Header/>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;