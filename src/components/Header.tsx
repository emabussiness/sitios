
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 20);
      
      // Determine which section is currently visible
      const sections = ['home', 'about', 'interests', 'portfolio'];
      for (const sectionId of sections.reverse()) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'blur-backdrop py-3' : 'py-5 bg-transparent'}`}>
      <div className="section-container py-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold font-display tracking-tight">E.M</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {['home', 'about', 'interests', 'portfolio'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden">
          <MobileMenu activeSection={activeSection} onNavigate={scrollToSection} />
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden md:flex border border-primary/20 hover:bg-primary/5"
          onClick={() => window.open('mailto:emanuel.martinez@example.com')}
        >
          Contact Me
        </Button>
      </div>
    </header>
  );
};

const MobileMenu = ({ activeSection, onNavigate }: { activeSection: string, onNavigate: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-1"
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </Button>
      
      {isOpen && (
        <div className="absolute top-12 right-0 w-48 py-2 bg-white rounded-md shadow-xl animate-fade-in">
          {['home', 'about', 'interests', 'portfolio'].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigate(section)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                activeSection === section ? 'font-medium' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <hr className="my-2" />
          <button
            onClick={() => window.open('mailto:emanuel.martinez@example.com')}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
