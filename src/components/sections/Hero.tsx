'use client';

import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <Container>
        <div className="text-center">
          <FadeIn direction="up">
            <div className="mb-4">
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Hi, I'm <span className="shimmer-text font-bold">Kadir Nuhović</span>
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="shimmer-text">Frontend Developer</span> & Software Engineering Student
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-6xl mx-auto space-y-8">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I'm a web developer focused on building modern and responsive web applications. I work with technologies such as <span className="font-semibold text-gray-900">React</span>, <span className="font-semibold text-gray-900">Next.js</span>, <span className="font-semibold text-gray-900">JavaScript</span>, <span className="font-semibold text-gray-900">TypeScript</span>, <span className="font-semibold text-gray-900">HTML</span>, <span className="font-semibold text-gray-900">CSS</span>, and <span className="font-semibold text-gray-900">Tailwind CSS</span>, and I have experience working with databases and backend integration.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I enjoy collaborating in teams, building real-world projects, and constantly improving my development skills. My goal is to create clean, efficient, and user-friendly applications while continuously learning new technologies.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-12">
              {/* Enhanced Tech Stack */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {[
                    { name: 'React', color: 'bg-blue-500/10 text-blue-600 border-blue-200' },
                    { name: 'TypeScript', color: 'bg-blue-600/10 text-blue-700 border-blue-300' },
                    { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-700 border-yellow-300' },
                    { name: 'HTML', color: 'bg-orange-500/10 text-orange-600 border-orange-200' },
                    { name: 'CSS', color: 'bg-purple-500/10 text-purple-600 border-purple-200' },
                    { name: 'Tailwind CSS', color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200' },
                    { name: 'Next.js', color: 'bg-gray-800/10 text-gray-800 border-gray-300' },
                    { name: 'Git', color: 'bg-red-500/10 text-red-600 border-red-200' }
                  ].map((tech, index) => (
                    <div 
                      key={tech.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-lg ${tech.color}`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Video Section */}
              <div className="mb-12">
                <div className="max-w-6xl mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-auto max-h-[500px] object-cover"
                    >
                      <source src="/videos/video11.mp4" type="video/mp4" />
                      {/* Fallback image */}
                      <div className="w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-lg opacity-75">Video Loading...</p>
                        </div>
                      </div>
                    </video>
                    
                    {/* Video overlay text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                      <p className="text-white text-lg font-medium">🎬 Watch me code in action</p>
                      <p className="text-white/80 text-sm mt-2">See how I build modern web applications</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Tech Stack with Progress Bars */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">Tech Stack & Proficiency</h3>
                <div className="max-w-6xl mx-auto space-y-6">
                  {[
                    { name: 'React', level: 90, color: 'bg-blue-500' },
                    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
                    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
                    { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
                    { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
                    { name: 'Next.js', level: 82, color: 'bg-gray-800' },
                    { name: 'Git', level: 80, color: 'bg-red-500' },
                    { name: 'Node.js', level: 75, color: 'bg-green-600' }
                  ].map((tech, index) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                        <span className="text-sm font-semibold text-gray-900">{tech.level}%</span>
                      </div>
                      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: `${tech.level}%`,
                            animation: `fillProgress 1s ease-out ${index * 0.1}s forwards`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Tech Stack Badges */}
                <div className="mt-8">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'Git'].map((tech, index) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium border border-gold/20 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    View My Work
                  </span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg border-2 hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Me
                  </span>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
      
      {/* Background decoration */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(184,161,99,0.1)] opacity-50 blur-[80px]"></div>
      </div>
    </section>
  );
};
