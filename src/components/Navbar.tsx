import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="font-display text-2xl lg:text-3xl font-black cursor-pointer flex items-center gap-2"
            onClick={() => navigate('/')}
          >
            <span className="logo-flame text-2xl">🔥</span>
            <span className="logo-sol">SOL</span>
            <span className="logo-royale">ROYALE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('gameplay')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Gameplay
            </button>
            <button 
              onClick={() => navigate('/tokenomics')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => navigate('/farming')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Farming
            </button>
            <button 
              onClick={() => navigate('/games/purge')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Purge
            </button>
            <button 
              onClick={() => navigate('/games')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Games
            </button>
            <button 
              onClick={() => navigate('/marketplace')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Marketplace
            </button>
            <a 
              href="https://genuine-rolypoly-b3aa60.netlify.app/whitepaper.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-secondary transition-colors"
            >
              Whitepaper
            </a>
            <Button 
              variant="hero" 
              onClick={() => navigate('/register')}
              className="rounded-full"
            >
              Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 bg-background/95 backdrop-blur-lg border-t border-border/50">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('gameplay')}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Gameplay
            </button>
            <button 
              onClick={() => navigate('/tokenomics')}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => navigate('/farming')}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Farming
            </button>
            <button 
              onClick={() => navigate('/purge')}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Purge
            </button>
             <button 
              onClick={() => navigate('/marketplace')}
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Marketplace
            </button>
            <a 
              href="https://genuine-rolypoly-b3aa60.netlify.app/whitepaper.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"
            >
              Whitepaper
            </a>


            <Button 
              variant="hero" 
              onClick={() => navigate('/register')}
              className="w-full rounded-full text-sm py-2"
            >
              Early Access
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}