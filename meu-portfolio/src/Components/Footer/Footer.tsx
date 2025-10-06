import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {

const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Guilherme Rodrigues. Todos os direitos reservados.
      </p>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/gui-ccr-"  target="_blank" className="social-link-footer">LinkedIn</a>
        <a href="https://github.com/gui-ccr"  target="_blank" className="social-link-footer">GitHub</a>
        <a href="https://wa.me/5533998217341"  target="_blank" className="social-link-footer" id='whatsapp'>WhatsApp</a>
      </div>
    </footer>
  );
}
export default Footer;