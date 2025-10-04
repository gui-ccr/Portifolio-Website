import React from "react";
import minhaFoto from "../../assets/nFoto.png";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">
            Mais sobre <span className="hightLight">mim</span>
          </h2>
          <p className="about-description">
            Sou um profissional autodidata e apaixonado por criar experiências
            incríveis e envolventes para os usuários. Com experiências em
            projetos com uso de
            <span className="hightLight">
              {" "}
              HTML, CSS, JavaScript, React, Vite
            </span>{" "}
            e possuo conhecimentos no back-end com,
            <span className="hightLight"> C++, Java, Maven, SQLite</span> tambem
            sou um entusiasta da area mobile com
            <span className="hightLight"> Dart & Flutter</span> busco sempre a
            melhor experiência do usuário nos mais diversos dispositivos.
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
                <div className="skill-card" style={{'--hover-color': '#F26A2E'} as React.CSSProperties}>HTML
                </div>
                <div className="skill-card" style={{'--hover-color': '#2EACDE'} as React.CSSProperties}>CSS
                </div>
                <div className="skill-card" style={{'--hover-color': '#FFDA42'} as React.CSSProperties}>JavaScript
                </div>
                <div className="skill-card" style={{'--hover-color': '#2CDAFD'} as React.CSSProperties}>React
                </div>
                <div className="skill-card" style={{'--hover-color': '#9C74F7'} as React.CSSProperties}>Vite
                </div>
                <div className="skill-card" style={{'--hover-color': '#5906a7ff'} as React.CSSProperties}>Boostrap
                </div>
                <div className="skill-card" style={{'--hover-color': '#61DBFB'} as React.CSSProperties}>Tailwind
                </div>
                <div className="skill-card" style={{'--hover-color': '#29ffe3ff'} as React.CSSProperties}>MUI
                </div>

            </div>
          </div>

          {/* Categoria Back-end */}
          <div className="skill-category">
            <h4 className="category-title">Back-end</h4>
            <div className="skills-grid">
              <div className="skill-card" style={{'--hover-color': '#084985'} as React.CSSProperties}>
                C++
              </div>
              <div className="skill-card" style={{'--hover-color': '#CB3738'} as React.CSSProperties}>
                Java
              </div>
              <div className="skill-card" style={{'--hover-color': '#B02154'} as React.CSSProperties}>
                Maven
              </div>
              <div className="skill-card" style={{'--hover-color': '#08415C'} as React.CSSProperties}>
                SQLite
              </div>
              <div className="skill-card" style={{'--hover-color': '#0d5f0dff'} as React.CSSProperties}>
                PostGreeSQL
              </div>
              <div className="skill-card" style={{'--hover-color': '#4DB33D'} as React.CSSProperties}>
                Supabase
              </div>
            </div>
          </div>

          {/* Categoria Mobile */}
          <div className="skill-category">
            <h4 className="category-title">Mobile</h4>
            <div className="skills-grid">
              <div className="skill-card" style={{'--hover-color': '#31B9F5'} as React.CSSProperties}>Dart
              </div>
              <div className="skill-card" style={{'--hover-color': '#0A5D9E'} as React.CSSProperties}>Flutter
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
