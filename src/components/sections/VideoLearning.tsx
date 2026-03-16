'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { FadeIn } from '../animations/FadeIn';
import { Stagger } from '../animations/Stagger';
import { HiPlay, HiCode, HiTerminal, HiBookOpen, HiAcademicCap, HiLightBulb } from 'react-icons/hi';

export const VideoLearning = () => {
  const videos = [
    {
      id: 1,
      title: "React Hooks Masterclass",
      description: "Learn advanced React Hooks patterns and best practices",
      category: "Frontend",
      duration: "45 min",
      level: "Advanced",
      thumbnail: "/videos/react-hooks.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      icon: HiCode,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Node.js API Design",
      description: "Build scalable REST APIs with Node.js and Express",
      category: "Backend",
      duration: "38 min",
      level: "Intermediate",
      thumbnail: "/videos/nodejs-api.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      icon: HiTerminal,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "TypeScript Deep Dive",
      description: "Master TypeScript types, generics, and advanced concepts",
      category: "Language",
      duration: "52 min",
      level: "Advanced",
      thumbnail: "/videos/typescript.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      icon: HiBookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Database Design Principles",
      description: "Learn database normalization and design patterns",
      category: "Database",
      duration: "41 min",
      level: "Intermediate",
      thumbnail: "/videos/database.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      icon: HiAcademicCap,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Problem Solving Strategies",
      description: "Develop algorithmic thinking and problem-solving skills",
      category: "Skills",
      duration: "35 min",
      level: "Beginner",
      thumbnail: "/videos/problem-solving.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      icon: HiLightBulb,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Clean Code Practices",
      description: "Write maintainable and scalable code",
      category: "Best Practices",
      duration: "28 min",
      level: "Intermediate",
      thumbnail: "/videos/clean-code.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      icon: HiCode,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <section id="video-learning" className="py-20 fixed-teget">
      <Container>
        <SectionTitle 
          title="Video Learning Hub" 
          subtitle="Educational programming videos and tutorials to enhance your development skills" 
        />
        
        <div className="space-y-12">
          {/* Featured Video */}
          <FadeIn direction="up">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300">
                  <HiLightBulb className="w-4 h-4" />
                  Featured Tutorial
                </div>
                <h2 className="text-3xl font-bold text-white text-glow">
                  React Hooks Masterclass
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Dive deep into React Hooks and learn advanced patterns that will take your React skills to the next level. This comprehensive tutorial covers useState, useEffect, useContext, and custom hooks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <HiCode className="w-5 h-5 text-blue-400" />
                    <span>Frontend</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <HiPlay className="w-5 h-5 text-green-400" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <HiAcademicCap className="w-5 h-5 text-red-400" />
                    <span>Advanced</span>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-blue-900/50 border border-blue-500/30">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="React Hooks Masterclass"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <HiPlay className="w-20 h-20 mx-auto mb-4 opacity-70" />
                      <p className="text-lg font-semibold">React Hooks Masterclass</p>
                      <p className="text-sm opacity-75 mt-2">Click to play tutorial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Video Grid */}
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold text-white text-glow mb-8">More Programming Tutorials</h3>
              <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.slice(1).map((video, index) => {
                  const Icon = video.icon;
                  return (
                    <FadeIn key={video.id} direction="up" delay={index * 0.1}>
                      <Card className="group bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-blue-500/30">
                        {/* Background decoration */}
                        <div className="absolute top-0 -z-10 h-full w-full">
                          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                          <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
                        </div>
                        
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-blue-900/50 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className={`w-12 h-12 text-white opacity-70 group-hover:scale-125 transition-transform duration-500 bg-gradient-to-br ${video.color} p-3 rounded-xl`} />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <HiPlay className="w-8 h-8 text-white ml-1" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getLevelColor(video.level)}`}>
                              {video.level}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <HiPlay className="w-3 h-3" />
                              {video.duration}
                            </span>
                          </div>
                          
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                            {video.title}
                          </h4>
                          
                          <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                            {video.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Icon className="w-3 h-3" />
                              {video.category}
                            </span>
                            <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300">
                              Watch Now →
                            </button>
                          </div>
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                      </Card>
                    </FadeIn>
                  );
                })}
              </Stagger>
            </div>
          </FadeIn>

          {/* Call to Action */}
          <FadeIn direction="up" delay={0.4}>
            <div className="text-center">
              <Card className="p-8 bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 -z-10 h-full w-full">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <HiLightBulb className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white text-glow mb-4">
                    Want More Programming Content?
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Subscribe to my YouTube channel for weekly programming tutorials, coding tips, and in-depth explanations of complex concepts.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-105 flex items-center gap-2"
                    >
                      <HiPlay className="w-5 h-5" />
                      Subscribe on YouTube
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-blue-500/50 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <HiCode className="w-5 h-5" />
                      View Source Code
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
