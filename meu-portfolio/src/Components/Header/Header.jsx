import React, { useState } from "react"; // 1. Importe o useState
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  // 2. Crie um estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="inicio" smooth={true} duration={800} className="nav-logo">
          Guilherme Rodrigues
        </Link>

        {/* 3. O nosso menu de navegação. Adicionamos uma classe condicional */}
        <ul className={`nav-list ${isMenuOpen ? "nav-list--open" : ""}`}>
          <li><Link to="inicio" smooth={true} duration={800} className="nav-link" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
          <li><Link to="sobre" smooth={true} duration={800} className="nav-link" onClick={() => setIsMenuOpen(false)}>Sobre</Link></li>
          <li><Link to="projetos" smooth={true} duration={800} className="nav-link" onClick={() => setIsMenuOpen(false)}>Projetos</Link></li>
          <li><Link to="contato" smooth={true} duration={800} className="nav-link" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
        </ul>

        
        <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;