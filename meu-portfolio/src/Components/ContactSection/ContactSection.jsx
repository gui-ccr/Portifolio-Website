import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

function ContactSection() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [statusMessage, setStatusMessage] = useState('');

    // 1. Crie uma referência para o formulário
    const form = useRef();

    // 2. A função que será chamada no envio
    const handleSubmit = (e) => {
    // Previne que a página recarregue, que é o comportamento padrão do formulário
    e.preventDefault();

    // Mostra uma mensagem de "Enviando..."
    setStatusMessage('Enviando...');

    // 3. EmailJS
    emailjs.sendForm(
      'service_t7b3x3i',      
      'template_jhp8lls',     
      form.current,         
      'eCqCJ1q7i_glNkoS6'       
    )
    .then((result) => {
        // Executado em caso de sucesso
        console.log(result.text);
        setStatusMessage('Mensagem enviada com sucesso!');
        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setMessage('');
    }, (error) => {
        // Executado em caso de erro
        console.log(error.text);
        setStatusMessage('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    });
  };

  return (


    
    <section id="contato" className="contact-section">
      <h2 className="section-title">Entre em <span className="highlight">Contato</span></h2>
      <p className="contact-subtitle">
        Tem uma pergunta ou proposta? Me envie uma mensagem!
      </p>
      
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Seu Nome</label>
          <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Seu Email</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}  />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Sua Mensagem</label>
          <textarea id="message" name="message" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
        </div>
        
        <button type="submit" className="submit-button">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default ContactSection;