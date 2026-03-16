'use client';

import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { smoothScroll } from '@/lib/utils';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <Container>
        <div className="text-center">
          <FadeIn direction="up">
            <div className="mb-4">
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                Hi, I'm <span className="gradient-text font-bold text-glow">Kadir Nuhović</span>
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-shine">
              <span className="gradient-text">Full-Stack Developer</span> & Software Engineer
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-6xl mx-auto space-y-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-white text-glow">Full-Stack Developer</span> passionate about building modern and responsive web applications. I specialize in <span className="font-semibold text-white text-glow">React</span>, <span className="font-semibold text-white text-glow">Next.js</span>, <span className="font-semibold text-white text-glow">TypeScript</span>, and <span className="font-semibold text-white text-glow">Node.js</span>, with growing experience in <span className="font-semibold text-white text-glow">database design</span> and <span className="font-semibold text-white text-glow">API development</span>.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I love learning new technologies, collaborating with teams, and building real-world projects. My goal is to create <span className="font-semibold text-white text-glow">clean, efficient applications</span> that deliver great user experiences while continuously improving my development skills.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-12">
              {/* Enhanced Tech Stack */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-gray-300 mb-6 text-glow">Tech Stack</h3>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {[
                    { name: 'React', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                    { name: 'TypeScript', color: 'bg-blue-600/20 text-blue-400 border-blue-600/30' },
                    { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
                    { name: 'HTML', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                    { name: 'CSS', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
                    { name: 'Tailwind CSS', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
                    { name: 'Next.js', color: 'bg-gray-600/20 text-gray-300 border-gray-600/30' },
                    { name: 'Git', color: 'bg-red-500/20 text-red-400 border-red-500/30' }
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
              
              {/* Skill Bars */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center text-glow">Technical Skills</h3>
                <div className="max-w-4xl mx-auto space-y-6">
                  {[
                    { name: 'Frontend Development', level: 95, color: 'bg-gradient-to-r from-blue-500 to-cyan-500', icon: '🎨' },
                    { name: 'Backend Development', level: 92, color: 'bg-gradient-to-r from-green-500 to-emerald-500', icon: '⚙️' },
                    { name: 'Database Management', level: 88, color: 'bg-gradient-to-r from-purple-500 to-pink-500', icon: '🗄️' },
                    { name: 'Tools & Git', level: 98, color: 'bg-gradient-to-r from-orange-500 to-red-500', icon: '🔧' },
                    { name: 'Problem Solving', level: 100, color: 'bg-gradient-to-r from-indigo-500 to-purple-500', icon: '🧠' }
                  ].map((skill, index) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-lg font-bold text-white">{skill.name}</span>
                        </div>
                        <span className="text-2xl font-bold text-white text-glow">{skill.level}%</span>
                      </div>
                      <div className="relative w-full h-6 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1500 ease-out relative shadow-lg`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `fillProgress 1.5s ease-out ${index * 0.2}s forwards`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Skill Categories */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'React/Next.js', count: '95%', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                    { name: 'Node.js/Express', count: '92%', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
                    { name: 'TypeScript', count: '94%', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
                    { name: 'Git/GitHub', count: '98%', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' }
                  ].map((skill) => (
                    <div 
                      key={skill.name}
                      className={`px-4 py-3 rounded-xl text-center font-bold border transition-all duration-300 hover:scale-105 hover:shadow-lg ${skill.color}`}
                    >
                      <div className="text-sm">{skill.name}</div>
                      <div className="text-xl font-bold">{skill.count}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/projects">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 btn-gradient text-white border-0"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      View My Work
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-8 py-4 text-lg border-2 border-blue-500/50 text-blue-400 hover:border-blue-400 hover:text-blue-300 hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Me
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
      
      {/* Background decoration */}
      <div className="absolute top-0 -z-10 h-full w-full fixed-teget">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-500/10 opacity-50 blur-[80px]"></div>
      </div>
    </section>
  );
};
