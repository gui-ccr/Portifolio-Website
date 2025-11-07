
import React from 'react';
import AutoTop from '../../assets/demo-AutoTop.gif'
import Condominio from '../../assets/demo-condominio.jpeg'
import Cineteca from '../../assets/demo-cineteca.gif'
import ClinicaFLow from '../../assets/Demo-ClinicaFlow.gif'
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
    category: 'Front-end', 
    title: 'ClincaFlow', 
    description: 'Desenvolvi uma landing page moderna e de alta conversão para um produto de IA(ClinicaFlow), utilizando React, TypeScript e Tailwind CSS. Implementei animações complexas e responsivas com a biblioteca GSAP para criar uma experiência de usuário premium e interativa. Integrei o gateway de pagamento Stripe para processamento de assinaturas evendas diretas na plataforma',
    imageUrl: ClinicaFLow, 
    link: 'https://ClinicaFlow.ia.br',
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
