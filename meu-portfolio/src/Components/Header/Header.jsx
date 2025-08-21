
import React from "react";
import { Link } from "react-scroll";
import "./Header.css";


function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link
          activeClass="active"
          spy={true}
          to="inicio"
          smooth={true}
          duration={800}
          className="nav-logo"
          style={{ cursor: 'pointer' }}
        >
          Guilherme Rodrigues
        </Link>
        <ul className="nav-list">
          <li>
            <Link
              activeClass="active"
              spy={true}
              to="inicio"
              smooth={true}
              duration={800}
              className="nav-link"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              to="sobre"
              smooth={true}
              duration={800}
              className="nav-link"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              to="projetos"
              smooth={true}
              duration={800}
              className="nav-link"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              to="contato"
              smooth={true}
              duration={800}
              className="nav-link"
            >
              Contato
            </Link>
          </li>

          {/* <li>
            <button onClick={toggleTheme} className="theme-toggle-button">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;