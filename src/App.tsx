import React from 'react';
import { PortfolioProvider, usePortfolio } from './contexts/PortfolioContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

const PortfolioContent: React.FC = () => {
  const { admin } = usePortfolio();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Admin Panel - only visible when authenticated */}
      {admin.isAuthenticated && (
        <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AdminPanel />
        </div>
      )}

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
};

export default App;