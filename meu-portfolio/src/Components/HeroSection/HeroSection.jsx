
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroSection.css'; 
function HeroSection() {
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const greeting = greetingRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    // Limpar conteúdo inicial
    greeting.textContent = '';
    title.textContent = '';
    subtitle.textContent = '';

    // Timeline principal
    const tl = gsap.timeline();

    // Função para criar efeito de digitação com cursor
    const typeText = (element, text, delay = 0) => {
      return gsap.to(element, {
        duration: text.length * 0.08, // Velocidade de digitação
        ease: "none",
        delay: delay,
        onStart: function() {
          // Adicionar cursor apenas quando a animação começar
          element.classList.add('typing-cursor');
        },
        onUpdate: function() {
          const progress = this.progress();
          const currentLength = Math.ceil(progress * text.length);
          element.textContent = text.substring(0, currentLength);
        },
        onComplete: function() {
          // Remover cursor após completar (exceto no último elemento)
          if (element !== subtitle) {
            element.classList.remove('typing-cursor');
          }
        }
      });
    };

    // Sequência de animações - usando delays cumulativos
    const greetingText = "Olá, visitante! 👋";
    const titleText = "Meu nome é Guilherme";
    const subtitleText = "Desenvolvedor Full-Stack";

    tl.add(typeText(greeting, greetingText, 0.5))
      .add(typeText(title, titleText, 0.3)) // Pausa entre animações
      .add(typeText(subtitle, subtitleText, 0.3));

  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        <p ref={greetingRef} className="hero-greeting"></p>
        <h1 ref={titleRef} className="hero-title"></h1>
        <h2 ref={subtitleRef} className="hero-subtitle"></h2>
        
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