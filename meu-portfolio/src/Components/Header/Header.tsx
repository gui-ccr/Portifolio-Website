import React, { useState } from "react"; // 1. Importe o useState
import { Link } from "react-scroll";
import "./Header.css";


interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: "inicio", label: "Início" },
  { to: "sobre", label: "Sobre" },
  { to: "projetos", label: "Projetos" },
  { to: "contato", label: "Contato" },
];

const Header: React.FC = () =>  {
  // 2. Crie um estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="inicio" smooth={true} duration={800} className="nav-logo">
          Guilherme Rodrigues
        </Link>

       <ul className={`nav-list ${isMenuOpen ? "nav-list--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link 
                to={link.to} 
                smooth={true} 
                duration={800} 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;