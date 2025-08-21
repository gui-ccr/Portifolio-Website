import React from "react";
import minhaFoto from "../../assets/nFoto.png";
import "./AboutSection.css";

function AboutSection() {
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
                <div className="skill-card" style={{'--hover-color': '#F26A2E'}}>HTML</div>
                <div className="skill-card" style={{'--hover-color': '#2EACDE'}}>CSS</div>
                <div className="skill-card" style={{'--hover-color': '#FFDA42'}}>JavaScript</div>
                <div className="skill-card" style={{'--hover-color': '#2CDAFD'}}>React</div>
                <div className="skill-card" style={{'--hover-color': '#9C74F7'}}>Vite</div>
            </div>
          </div>

          {/* Categoria Back-end */}
          <div className="skill-category">
            <h4 className="category-title">Back-end</h4>
            <div className="skills-grid">
              <div className="skill-card" style={{'--hover-color': '#084985'}}>C++</div>
              <div className="skill-card" style={{'--hover-color': '#CB3738'}}>Java</div>
              <div className="skill-card" style={{'--hover-color': '#B02154'}}>Maven</div>
              <div className="skill-card" style={{'--hover-color': '#08415C'}}>SQLite</div>
            </div>
          </div>

          {/* Categoria Mobile */}
          <div className="skill-category">
            <h4 className="category-title">Mobile</h4>
            <div className="skills-grid">
              <div className="skill-card" style={{'--hover-color': '#31B9F5'}}>Dart</div>
              <div className="skill-card" style={{'--hover-color': '#0A5D9E'}}>Flutter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
