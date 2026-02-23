import React, { useState } from 'react';
import { Menu, X, Settings, Download } from 'lucide-react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { downloadResume } from '../utils/resumeGenerator';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, admin, toggleEditMode, login, logout } = usePortfolio();

  const handleDownloadResume = () => {
    downloadResume(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">
            {data.personalInfo.name}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </button>

            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>

            {admin.isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleEditMode}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition-colors ${
                    admin.isEditMode
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Settings size={16} />
                  <span>{admin.isEditMode ? 'Exit Edit' : 'Edit'}</span>
                </button>
                <button
                  onClick={logout}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Admin
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary-600 transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors w-fit"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;