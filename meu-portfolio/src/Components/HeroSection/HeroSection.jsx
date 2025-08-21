// Em src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Vamos importar os estilos específicos

function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Olá, visitante! 👋</p>
        <h1 className="hero-title">Meu nome é <span className="hero-name">Guilherme</span></h1>
        <h2 className="hero-subtitle">Desenvolvedor Full-Stack</h2>
        
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/gui-ccr-"  target="_blank" className="social-link">LinkedIn</a>
          <a href="https://github.com/gui-ccr"  target="_blank" className="social-link">GitHub</a>
          <a href="https://wa.me/5533998217341"  target="_blank" className="social-link">WhatsApp</a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <p id='Scroll'>SCROLL</p>
      </div>
    </section>
  );
}

export default HeroSection;