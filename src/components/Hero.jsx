import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { motion } from 'motion/react';
import BadgePhoto from './BadgePhoto';
import BlurText from './BlurText';
import GradientText from './GradientText';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visible TRUE/FALSE setiap masuk/keluar viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger pas 30% section keliatan
        rootMargin: '0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/TinsariRauhana-CV2.pdf';
    link.download = 'TinsariRauhana-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="md:-mt-20">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-pink-500 text-lg font-medium mb-3 tracking-wide">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              {isVisible && (
                <BlurText
                  text="Data-Driven"
                  delay={30}
                  animateBy="words"
                  direction="top"
                  as="span"
                  threshold={0}
                  className="block text-white text-7xl md:text-8xl font-bold"
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GradientText
                  colors={['#ec4899', '#db2777', '#f472b6', '#db2777', '#ec4899']}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold inline-block"
                >
                  Solutions
                </GradientText>
              </motion.div>
            </h1>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-300 mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Tinsari Rauhana
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Data Analyst & UI/UX Enthusiast specializing in transforming data into actionable insights and creating intuitive user experiences.
          </motion.p>

          <motion.div 
            className="flex gap-5 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { Icon: Mail, href: "mailto:tinsarirauhanaa@gmail.com" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/tinsari-rauhana/" },
              { Icon: Github, href: "https://github.com/tinsarirauhana" }
            ].map(({ Icon, href }, i) => (
              <motion.a 
                key={i} 
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-4 rounded-full bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 hover:border-pink-500 transition-all hover:scale-110 group"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, delay: 0.6 + (i * 0.05) }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={handleDownloadCV}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-pink-500/30 border-2 border-pink-500 shadow-lg shadow-pink-500/30 font-medium text-white hover:bg-pink-500/40 hover:shadow-pink-500/50 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.7,
              ease: "easeOut"
            }}
          >
            <Download size={20} />
            Download CV
          </motion.button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <BadgePhoto />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;