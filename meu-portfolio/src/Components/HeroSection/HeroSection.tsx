import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './HeroSection.css'; 

const HeroSection: React.FC = () => {
  // Voltamos a usar as refs, que é a forma correta de integrar com o GSAP
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  // PASSO 1: Criamos um estado para controlar qual linha está ativa
  // Ele pode ser 'greeting', 'title', 'subtitle', ou 'none'
  const [activeCursor, setActiveCursor] = useState<'greeting' | 'title' | 'subtitle' | 'none'>('none');

  useEffect(() => {
    const greeting = greetingRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!greeting || !title || !subtitle) return;

    greeting.textContent = '';
    title.textContent = '';
    subtitle.textContent = '';

    const tl = gsap.timeline();

    // A sua função typeText original, mas com callbacks para controlar o estado do cursor
    const typeText = (element: HTMLElement, text: string, elementName: typeof activeCursor) => {
      return gsap.to(element, {
        duration: text.length * 0.08,
        ease: "none",
        // onStart: Chamado quando a animação da linha começa
        onStart: () => {
          setActiveCursor(elementName); // Ativa o cursor para o elemento atual
        },
        onUpdate: function() {
          const progress = this.progress();
          const currentLength = Math.ceil(progress * text.length);
          element.textContent = text.substring(0, currentLength);
        },
      });
    };

    const greetingText = "Olá, visitante! 👋";
    const titleText = "Meu nome é Guilherme";
    const subtitleText = "Desenvolvedor Full-Stack";

    tl.add(typeText(greeting, greetingText, 'greeting'), 0.5)
      .add(typeText(title, titleText, 'title'), '+=0.3')
      .add(typeText(subtitle, subtitleText, 'subtitle'), '+=0.3')
      // PASSO 2: No final de toda a timeline, desligamos todos os cursores
      .call(() => setActiveCursor('none')); 

  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        {/* PASSO 3: O cursor agora é controlado pelo estado 'activeCursor' */}
        <p 
          ref={greetingRef} 
          className={`hero-greeting ${activeCursor === 'greeting' ? 'typing-cursor' : ''}`}
        ></p>
        <h1 
          ref={titleRef} 
          className={`hero-title ${activeCursor === 'title' ? 'typing-cursor' : ''}`}
        ></h1>
        <h2 
          ref={subtitleRef} 
          className={`hero-subtitle ${activeCursor === 'subtitle' ? 'typing-cursor' : ''}`}
        ></h2>
        
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/gui-ccr-"  target="_blank" className="social-link" id='linkedin'>LinkedIn</a>
          <a href="https://github.com/gui-ccr"  target="_blank" className="social-link" id='github'>GitHub</a>
          <a href="https://wa.me/5533998217341"  target="_blank" className="social-link" id='whatsapp'>WhatsApp</a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <p id='Scroll'>SCROLL</p>
      </div>
    </section>
  );
}

export default HeroSection;