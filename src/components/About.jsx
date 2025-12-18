import React from 'react';
import TiltCard from './TiltCard';
import ProfileCard from './ProfileCard';
import FadeInView from './FadeInView';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-4">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-transparent" />
        </div>

        {/* Main Grid Layout - ProfileCard di Kiri, Cards di Kanan */}
        <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-6 items-start">
          
          {/* Left Column - Profile Card + Stats */}
          <div className="flex flex-col gap-4 items-center">
            <div className="w-full">
              <FadeInView delay={0.1} direction="left">
                <ProfileCard
                  name="Tinsari Rauhana"
                  title="Data Analyst"
                  handle="tinsarirauhanaa"
                  status="Open to Work"
                  contactText="Hire Me"
                  avatarUrl="/profile/avatar.JPG"
                  miniAvatarUrl="/profile/mini-avatar.jpg"
                  behindGlowEnabled={true}
                  behindGlowColor="rgba(236, 72, 153, 0.7)"
                  behindGlowSize="60%"
                  innerGradient="linear-gradient(145deg, rgba(236, 72, 153, 0.2) 0%, rgba(219, 39, 119, 0.3) 100%)"
                  enableTilt={true}
                  enableMobileTilt={false}
                  showUserInfo={true}
                  onContactClick={() => {
                    window.location.href = 'mailto:tinsarirauhanaa@gmail.com';
                  }}
                />
              </FadeInView>
            </div>
            
            {/* Stats Grid 2x2 */}
            <div className="w-full space-y-3">
              <FadeInView delay={0.2} direction="left">
                <div className="grid grid-cols-2 sm:gap-4">
                  <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-1">1+</div>
                    <div className="text-gray-400 text-xs">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-1">5+</div>
                    <div className="text-gray-400 text-xs">Projects Completed</div>
                  </div>
                </div>
              </FadeInView>
              <FadeInView delay={0.3} direction="left">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-1">5+</div>
                    <div className="text-gray-400 text-xs">Certifications</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-1">1</div>
                    <div className="text-gray-400 text-xs">Competition Wins</div>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>

          {/* Right Column - 3 Cards dengan tinggi sama */}
          <div className="grid grid-rows-3 gap-4 h-full">
            {/* Background Card */}
            <FadeInView delay={0.2} direction="right">
              <TiltCard>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-5 border border-pink-500/20 hover:border-pink-500/40 transition-all h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-pink-500 mb-3">Background</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    I am an Informatics undergraduate student at Universitas Syiah Kuala with a strong interest in Data Analytics and Data Mining. 
                    I have hands-on academic experience as a Teaching Assistant for the Data Mining course, where I assisted practical sessions 
                    involving data preprocessing, clustering, and classification.
                  </p>
                </div>
              </TiltCard>
            </FadeInView>

            {/* Education Card */}
            <FadeInView delay={0.3} direction="right">
              <TiltCard>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-5 border border-pink-500/20 hover:border-pink-500/40 transition-all h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-pink-500 mb-3">Education</h3>
                  <div className="space-y-3">
                    {/* University */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Universitas Syiah Kuala</h4>
                        <p className="text-gray-400 text-xs">Bachelor of Informatics</p>
                        <p className="text-pink-400 text-xs mt-0.5">July 2023 - Present</p>
                      </div>
                    </div>
                    
                    {/* High School */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">SMAIT Al-Fityan School</h4>
                        <p className="text-gray-400 text-xs">High School, Aceh</p>
                        <p className="text-pink-400 text-xs mt-0.5">Graduated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeInView>

            {/* Experience Card */}
            <FadeInView delay={0.4} direction="right">
              <TiltCard>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-5 border border-pink-500/20 hover:border-pink-500/40 transition-all h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-pink-500 mb-3">Experience & Goals</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    I am actively involved in UI/UX design and data-related competitions. I have experience as a team leader and competition 
                    winner in a national UI/UX design competition, as well as a national finalist in a data competition. Currently, I am open 
                    to opportunities to grow as a Data Analyst or Product/Data Analyst.
                  </p>
                </div>
              </TiltCard>
            </FadeInView>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;