import React from "react";
import minhaFoto from "../../assets/nFoto.png";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">
            Desenvolvedor <span className="hightLight">Front-end</span>
          </h2>
          <p className="about-description">
            Sou um desenvolvedor apaixonado por criar interfaces web e mobile que sejam não apenas bonitas, 
            mas também inteligentes e performáticas. <br></br>
            Com foco principal em 
            <span className="hightLight">
              {" "}
              React, JavaScript, TypeScript e Flutter
            </span>{" "}
            Minha experiência com tecnologias de back-end com
            <span className="hightLight"> Java, C++ e bancos de dados SQL </span> não me divide;
            ela me torna um desenvolvedor front-end mais completo, 
            permitindo-me construir soluções mais coesas e colaborar de forma eficaz em todo o ciclo de vida do projeto.
          </p>
        </div>
        <div className="about-image-container">
          <img className="about-image" src={minhaFoto} alt="Foto de perfil" />
        </div>
      </div>
      <div className="skills-section">
        <h3 className="skills-title">Minhas Tecnologias</h3>
        <div className="skills-categories">

          {/* Categoria Front-end */}
          <div className="skill-category">
            <h4 className="category-title">Front-end</h4>
            <div className="skills-grid">
              <div className="skill-card" style={{'--hover-color': '#F26A2E'} as React.CSSProperties}>
                HTML
              </div>
              <div className="skill-card" style={{'--hover-color': '#2EACDE'} as React.CSSProperties}>
                CSS
              </div>
              <div className="skill-card" style={{'--hover-color': '#FFDA42'} as React.CSSProperties}>
                JavaScript
              </div>
              <div className="skill-card" style={{'--hover-color': '#3178C6'} as React.CSSProperties}>
                TypeScript
              </div>
              <div className="skill-card" style={{'--hover-color': '#61DBFB'} as React.CSSProperties}>
                React
              </div>
              <div className="skill-card" style={{'--hover-color': '#9C74F7'} as React.CSSProperties}>
                Vite
              </div>
              <div className="skill-card" style={{'--hover-color': '#7952B3'} as React.CSSProperties}>
                Bootstrap
              </div>
              <div className="skill-card" style={{'--hover-color': '#007FFF'} as React.CSSProperties}>
                MUI
              </div>
            </div>
          </div>

          {/* Categoria Back-end */}
          <div className="skill-category">
            <h4 className="category-title">Back-end</h4>
            <div className="skills-grid">
              <div className="skill-card" style={{'--hover-color': '#00599C'} as React.CSSProperties}>
                C++
              </div>
              <div className="skill-card" style={{'--hover-color': '#ED8B00'} as React.CSSProperties}>
                Java
              </div>
              <div className="skill-card" style={{'--hover-color': '#C71A36'} as React.CSSProperties}>
                Maven
              </div>
              <div className="skill-card" style={{'--hover-color': '#003B57'} as React.CSSProperties}>
                SQLite
              </div>
              <div className="skill-card" style={{'--hover-color': '#336791'} as React.CSSProperties}>
                PostgreSQL
              </div>
              <div className="skill-card" style={{'--hover-color': '#3ECF8E'} as React.CSSProperties}>
                Supabase
              </div>
            </div>
          </div>

          {/* Categoria Mobile */}
          <div className="skill-category">
            <h4 className="category-title">Mobile</h4>
            <div className="skills-grid">
              <div className="skill-card" style={{'--hover-color': '#0175C2'} as React.CSSProperties}>
                Dart
              </div>
              <div className="skill-card" style={{'--hover-color': '#02569B'} as React.CSSProperties}>
                Flutter
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
