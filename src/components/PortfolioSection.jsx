import React, { useState } from 'react';
import { Award, Code, Briefcase, X, ExternalLink, ArrowRight, Github } from 'lucide-react';
import TiltCard from './TiltCard';
import projects from '../data/projects';
import certifications from '../data/certifications';
import tools from '../data/tools';
import FadeInView from './FadeInView';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Programming Languages');

  return (
    <>
      <section id="portofolio" className="min-h-screen px-6 py-28 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInView delay={0.1} direction="up">
            <div className="mb-8">
              <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">Portofolio</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-transparent" />
            </div>
          </FadeInView>

          {/* Tabs */}
          <FadeInView delay={0.2} direction="up">
            <div className="flex gap-4 mb-6 flex-wrap">
              {[
                { id: 'projects', icon: Briefcase, label: 'Projects' },
                { id: 'certifications', icon: Award, label: 'Certifications' },
                { id: 'tools', icon: Code, label: 'Tools & Skills' }
              ].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-pink-500/30 border-2 border-pink-500 shadow-lg shadow-pink-500/30'
                      : 'bg-gray-900/50 border-2 border-pink-500/20 hover:border-pink-500/40'
                  }`}>
                  <tab.icon size={22} />
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeInView>

          {/* Projects - Horizontal Scroll */}
          {activeTab === 'projects' && (
            <FadeInView delay={0.3} direction="up">
              <div className="relative">
                <div 
                  className="flex gap-8 overflow-x-auto pb-6 px-2"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#ec4899 #1f2937',
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      height: 8px;
                    }
                    div::-webkit-scrollbar-track {
                      background: #1f2937;
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb {
                      background: linear-gradient(to right, #ec4899, #db2777);
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(to right, #db2777, #be185d);
                    }
                  `}</style>
                  {projects.map((project, i) => (
                    <div key={i} className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[400px]">
                      <TiltCard>
                        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-pink-500/40 hover:border-pink-500/60 transition-all h-full">
                          <div className="relative overflow-hidden h-48">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          </div>
                          <div className="p-6">
                            <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((tech, j) => (
                                <span key={j} className="px-3 py-1 text-sm rounded-lg bg-pink-500/20 border border-pink-500/30 text-pink-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <button onClick={() => setSelectedProject(project)}
                              className="w-full py-3 px-6 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/50 hover:border-pink-500 rounded-xl transition-all flex items-center justify-center gap-2 group">
                              <span>View Details</span>
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                  ))}
                </div>
                
                {/* Scroll Indicator */}
                {projects.length > 2 && (
                  <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                      <span className="inline-block w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center">
                        <ArrowRight size={14} className="text-pink-400" />
                      </span>
                      Scroll to see more
                    </p>
                  </div>
                )}
              </div>
            </FadeInView>
          )}

          {/* Certifications - Horizontal Scroll */}
          {activeTab === 'certifications' && (
            <FadeInView delay={0.3} direction="up">
              <div className="relative">
                <div 
                  className="flex gap-8 overflow-x-auto pb-6 px-2"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#ec4899 #1f2937',
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      height: 8px;
                    }
                    div::-webkit-scrollbar-track {
                      background: #1f2937;
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb {
                      background: linear-gradient(to right, #ec4899, #db2777);
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(to right, #db2777, #be185d);
                    }
                  `}</style>
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex-shrink-0 w-[320px] sm:w-[450px] md:w-[520px]">
                      <TiltCard>
                        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-pink-500/40 hover:border-pink-500/60 transition-all h-full">
                          <img src={cert.image} alt={cert.title} className="w-full h-[365px] object-contain bg-gray-900/50" />
                          <div className="p-6 flex items-start gap-4">
                            <Award className="text-pink-500 flex-shrink-0" size={32} />
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                              <p className="text-pink-400 font-medium mb-1">{cert.issuer}</p>
                              <p className="text-gray-500">{cert.date}</p>
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                  ))}
                </div>
                
                {/* Scroll Indicator */}
                {certifications.length > 2 && (
                  <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                      <span className="inline-block w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center">
                        <ArrowRight size={14} className="text-pink-400" />
                      </span>
                      Scroll to see more
                    </p>
                  </div>
                )}
              </div>
            </FadeInView>
          )}

          {/* Tools */}
          {activeTab === 'tools' && (
            <div className="space-y-8 max-w-7xl mx-auto">
              <FadeInView delay={0.3} direction="up">
                <div className="flex gap-3 mb-10 overflow-x-auto pb-4 px-1">
                  {['Programming Languages', 'Data Analysis & ML', 'Visualization', 'Web & Design', 'Tools'].map((categoryName) => {
                    const hasTools = tools.filter(tool => tool.category === categoryName).length > 0;
                    if (!hasTools) return null;
                    
                    return (
                      <button
                        key={categoryName}
                        onClick={() => setSelectedCategory(categoryName)}
                        className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                          selectedCategory === categoryName 
                            ? 'border border-pink-500/50 text-pink-400 shadow-lg shadow-pink-500/20' 
                            : 'bg-gray-900/30 border border-pink-500/30 text-gray-400 hover:border-pink-500/40 hover:text-pink-400'
                        }`}
                      >
                        {selectedCategory === categoryName && (
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 via-pink-600/15 to-pink-500/15 rounded-full animate-pulse" />
                        )}
                        <span className="relative z-10">{categoryName}</span>
                      </button>
                    );
                  })}
                </div>
              </FadeInView>

              <FadeInView key={selectedCategory} delay={0.4} direction="up">
                <div className="grid md:grid-cols-4 gap-6">
                  {tools.filter(tool => tool.category === selectedCategory).map((tool, i) => (
                    <TiltCard key={i}>
                      <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all text-center">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center relative group">
                          {tool.logo ? (
                            <>
                              <div 
                                className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                                style={{
                                  background: 'linear-gradient(45deg, #ec4899, #db2777, #f472b6, #ec4899)',
                                  backgroundSize: '300% 300%',
                                  animation: 'gradient-shift 3s ease infinite',
                                  borderRadius: '50%'
                                }}
                              />
                              <img 
                                src={tool.logo} 
                                alt={tool.name}
                                className="w-12 h-12 object-contain relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6"
                                style={{ 
                                  filter: 'brightness(0) saturate(100%) invert(56%) sepia(89%) saturate(1501%) hue-rotate(300deg) brightness(100%) contrast(94%)',
                                }}
                              />
                              <style>{`
                                @keyframes gradient-shift {
                                  0%, 100% { background-position: 0% 50%; }
                                  50% { background-position: 100% 50%; }
                                }
                                img[alt="${tool.name}"] {
                                  animation: logo-glow 2.5s ease-in-out infinite;
                                }
                                @keyframes logo-glow {
                                  0%, 100% {
                                    filter: brightness(0) saturate(100%) invert(56%) sepia(89%) saturate(1501%) hue-rotate(300deg) brightness(100%) contrast(94%);
                                  }
                                  50% {
                                    filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(314deg) brightness(118%) contrast(92%);
                                  }
                                }
                              `}</style>
                            </>
                          ) : (
                            <Code className="text-pink-500" size={40} />
                          )}
                        </div>
                        <h4 className="font-semibold text-white mb-2 text-lg">{tool.name}</h4>
                        <div className="group/progress cursor-pointer">
                          <div className="w-full bg-gray-800 rounded-full h-2 relative mb-2">
                            <div 
                              className="h-full rounded-full transition-all duration-1000"
                              style={{ 
                                width: `${tool.level}%`,
                                background: 'linear-gradient(90deg, #ec4899, #f472b6)',
                                boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
                              }}
                            />
                          </div>
                          <div className="text-center h-5">
                            <span className="text-pink-400 font-bold text-sm">
                              {tool.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </FadeInView>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/30">
            <button onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-pink-500/20 hover:bg-pink-500/40 border border-pink-500/50 transition-all z-10">
              <X size={24} />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover rounded-t-3xl" />
            <div className="p-10">
              <h2 className="text-4xl font-bold text-pink-500 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{selectedProject.fullDescription}</p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-pink-500/20 border border-pink-500/40 text-pink-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {selectedProject.colab && (
                  <a href={selectedProject.colab} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/50 rounded-xl transition-all">
                    <img src="/colab-logo.svg" alt="Colab" className="w-5 h-5 brightness-0 invert" />
                    Open in Colab
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/50 rounded-xl transition-all">
                    <Github size={20} />View Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/50 rounded-xl transition-all">
                    <ExternalLink size={20} />Live Demo
                  </a>
                )}
                {selectedProject.figma && (
                  <a href={selectedProject.figma} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/50 rounded-xl transition-all">
                    <ExternalLink size={20} />Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;