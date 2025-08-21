
import { useState, useEffect } from 'react'; // 1. Importe também o useEffect
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  // 2. Crie um estado para guardar o tema atual. 'dark' é o padrão.
  const [theme, setTheme] = useState('dark');

  // 3. Crie a função que troca o tema
  const toggleTheme = () => {
    // Se o tema atual for 'dark', muda para 'light', e vice-versa
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  // 4. Este "efeito" aplica a classe ao body sempre que o tema mudar
  useEffect(() => {
    // Limpa classes anteriores para garantir que só uma esteja ativa
    document.body.className = '';
    // Adiciona a classe do tema claro se o tema for 'light'
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    }
  }, [theme]); // A mágica: este código só roda quando a variável 'theme' muda

  return (
    <>
      {/* 5. Passe a função e o tema atual para o Header */}
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;