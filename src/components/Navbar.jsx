import React, { useState, useEffect } from 'react';

const Navbar = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portofolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    scrollToSection(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-4xl">
      <div className={`bg-black/40 backdrop-blur-2xl border border-pink-500/20 px-4 sm:px-8 py-3 sm:py-4 shadow-2xl shadow-pink-500/10 transition-all duration-300 ${
        isMobileMenuOpen ? 'rounded-3xl' : 'rounded-full'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            TR
          </div>
          
          {/* Desktop Navigation - Hidden di Mobile */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'portofolio', 'contact'].map(item => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item)}
                className={`capitalize transition-all relative group text-base font-medium ${
                  activeSection === item 
                    ? 'text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]' 
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full transition-all duration-300 ${
                  activeSection === item 
                    ? 'w-full shadow-[0_0_8px_rgba(236,72,153,0.8)]' 
                    : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Show di Mobile */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-pink-400 hover:bg-pink-500/10 rounded-lg transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-pink-500/20 space-y-2">
            {['home', 'about', 'portofolio', 'contact'].map(item => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item)}
                className={`w-full text-left px-4 py-3 rounded-lg capitalize transition-all ${
                  activeSection === item 
                    ? 'bg-pink-500/20 text-pink-400 font-medium' 
                    : 'text-gray-300 hover:bg-pink-500/10 hover:text-pink-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-pink-500/5 blur-xl -z-10 transition-all duration-300 ${
        isMobileMenuOpen ? 'rounded-3xl' : 'rounded-full'
      }`} />
    </nav>
  );
};

export default Navbar;