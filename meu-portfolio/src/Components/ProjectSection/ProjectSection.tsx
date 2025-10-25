
import React from 'react';
import AutoTop from '../../assets/demo-AutoTop.gif'
import Condominio from '../../assets/demo-condominio.jpeg'
import Profile_finder from '../../assets/demo-github-profile-finder.gif'
import Cineteca from '../../assets/demo-cineteca.gif'
import Gameplay from '../../assets/Gameplay.gif'
import Sistema_Biblioteca from '../../assets/demo--Sistema-em-C++.gif'
import grupo_cpp from '../../assets/demo-grupo-cpp.png'
import MovieFlix from '../../assets/demo-movieflix.gif'
import './ProjectSection.css';

interface Project {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string; // o ? indica que é uma prop opcional
  isFreelancer: boolean; 


}

// 1. A LISTA DE DADOS DOS PROJETOS
const projectsData: Project[] = [
  { 
    category: 'Full-Stack', 
    title: 'Sistema de Gerenciamento de Condominios', 
    description: 'Aplicação web Full-Stack desenvolvida para a gestão completa de condomínios. A plataforma conta com um back-end robusto em PostgreSQL, gerenciado via Supabase, e um front-end dinâmico construído com React, Vite e CSS3 puro para uma interface administrativa limpa e de alta performanc', 
    imageUrl: Condominio,
    isFreelancer: true 
  },
  { 
    category: 'Full-Stack', 
    title: 'Cineteca', 
    description: 'Aplicação web completa para um cinema local, focada em uma experiência de compra segura e moderna. Desenvolvida com React, Vite, MUI e com banco de dados no Supabase.', 
    imageUrl: Cineteca, 
    link: 'https://gui-ccr.github.io/Cineteca/',
    isFreelancer: true
  },
  { 
    category: 'Front-end', 
    title: 'AutoTop', 
    description: 'Aplicação web moderna construída com React e Vite para simular a vitrine de uma concessionária. O projeto possui design totalmente responsivo com Bootstrap e integra a API do Google Maps para exibir a localização da empresa.', 
    imageUrl: AutoTop, 
    link: 'https://autotopveiculos.netlify.app/',
    isFreelancer: true
  },
  { 
    category: 'Front-end', 
    title: 'Github Profile Finder', 
    description: 'Uma aplicação web construída com HTML, CSS e JavaScript puro para demonstrar o domínio de conceitos fundamentais do front-end, como manipulação do DOM, programação assíncrona (async/await) e consumo de APIs externas.', 
    imageUrl: Profile_finder, 
    link: 'https://gui-ccr.github.io/Github-Profile-Finder/',
    isFreelancer: false
  },
  { 
    category: 'Back-end', 
    title: '⚔️ RPG Batalha por Turnos ⚔️', 
    description: 'Sistema de RPG via terminal focado em demonstrar lógica de POO, arquitetura de software (CRUD) e interação com banco de dados. Uma base sólida para a construção de qualquer tipo de aplicação.', 
    imageUrl: Gameplay, 
    link: 'https://github.com/gui-ccr/rpg-batalha-console-java/releases/tag/v1.0.0',
    isFreelancer: false
  },
  { 
    category: 'Back-end', 
    title: '💿 Sistema de Gerenciamento de Biblioteca de Mídia 💿', 
    description: 'Mergulho técnico em C++ para demonstrar domínio de Polimorfismo e gerenciamento de memória moderno com ponteiros inteligentes (std::unique_ptr).', 
    imageUrl: Sistema_Biblioteca, 
    link: 'https://github.com/gui-ccr/LibMan-Cpp/releases/tag/v1.0.1',
    isFreelancer: false
  },
  { 
    category: 'Mobile', 
    title: '🎬 MovieFlix 🎬', 
    description: 'Aplicativo mobile que consome a API do TMDb, demonstrando habilidades em consumo de APIs REST, gerenciamento de estado e UIs declarativas.', 
    imageUrl: MovieFlix, 
    link: 'https://github.com/gui-ccr/MovieFlix_App',
    isFreelancer: false
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl, link, category, isFreelancer }) =>{
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={`Imagem do projeto ${title}`} className="project-image" />
        <div className="project-info">
          <div className="project-tags">
            <span className="project-tag category">{category}</span>
            {isFreelancer && (
              <span className="project-tag freelancer">Freelancer</span>
            )}
          </div>
          <h4 className="project-title">{title}</h4>
          <p className="project-description">{description}</p>
        </div>
      </a>
    </div>
  );
}

// 3. A FUNÇÃO PRINCIPAL DO COMPONENTE
const ProjectSection: React.FC = () => {
  return (
    <section id="projetos" className="projects-section">
      <h2 className="section-title">Meus <span className="highlight">Projetos</span></h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}  // espalha todas as props do projeto
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
