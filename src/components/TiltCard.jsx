import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import './TiltCard.css';

const createParticle = (x, y) => {
  const el = document.createElement('div');
  el.className = 'magic-particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(236, 72, 153, 1);
    box-shadow: 0 0 6px rgba(236, 72, 153, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });
  const [glowIntensity, setGlowIntensity] = useState(0);
  
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    const particleCount = 8;

    for (let i = 0; i < particleCount; i++) {
      const timeoutId = setTimeout(() => {
        if (!cardRef.current) return;

        const x = Math.random() * width;
        const y = Math.random() * height;
        const particle = createParticle(x, y);
        
        cardRef.current.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.fromTo(
          particle,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        );

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(particle, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, i * 80);

      timeoutsRef.current.push(timeoutId);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    const relativeX = (x / rect.width) * 100;
    const relativeY = (y / rect.height) * 100;
    
    setTilt({ rotateX, rotateY });
    setMousePos({ x: `${relativeX}%`, y: `${relativeY}%` });
    setGlowIntensity(1);
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovering(false);
    setGlowIntensity(0);
    clearAllParticles();
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    animateParticles();
  };

  useEffect(() => {
    return () => {
      clearAllParticles();
    };
  }, [clearAllParticles]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`magic-tilt-wrapper ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${isHovering ? 'scale(1.02)' : 'scale(1)'}`,
        transition: 'transform 0.1s ease-out',
        '--mouse-x': mousePos.x,
        '--mouse-y': mousePos.y,
        '--glow-intensity': glowIntensity
      }}
    >
      {/* Border Glow Effect */}
      <div className="magic-border-glow" />
      
      {/* Original Children - TETAP SAMA! */}
      {children}
    </div>
  );
};

export default TiltCard;