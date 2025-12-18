import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioSection from './components/PortfolioSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aurora from './components/Aurora';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global Aurora Background - Fixed */}
      <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={["#f472b6", "#ec4899", "#db2777"]}
          amplitude={1.0}
          blend={0.5}
          speed={0.4}
        />
        {/* Overlay untuk adjust opacity */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Subtle Spotlight - Mouse follow effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-20 opacity-15"
        style={{ 
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(236,72,153,0.4), transparent 60%)` 
        }} 
      />

      {/* All Content with higher z-index */}
      <div className="relative z-10">
        <Navbar scrollToSection={scrollToSection} />
        <Hero />
        <About />
        <PortfolioSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}