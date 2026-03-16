'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { Stagger } from '../animations/Stagger';
import { projects } from '@/data/projects';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 fixed-teget">
      <Container>
        <SectionTitle title="Featured Projects" subtitle="A collection of some of my recent work." />
        
        <Stagger className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.1}>
              <Card className="h-full flex flex-col group bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-blue-500/30">
                {/* Background decoration */}
                <div className="absolute top-0 -z-10 h-full w-full">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-blue-900/50 overflow-hidden">
                  {/* Animated placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center group-hover:animate-float">
                      <svg className="w-16 h-16 mx-auto mb-3 opacity-70 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <p className="text-lg font-semibold text-white drop-shadow">{project.title}</p>
                    </div>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <h3 className="text-2xl font-bold text-white text-glow group-hover:text-blue-300 transition-colors duration-500">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="flex-grow relative z-10">
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/40 font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-4 pt-6 relative z-10">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="border-blue-400/60 text-blue-300 hover:border-blue-300 hover:text-blue-200 hover:bg-blue-500/10 hover:shadow-blue-500/30 transition-all duration-300 shadow-lg">
                      <SiGithub className="w-5 h-5 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" className="btn-gradient text-white border-0 hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 shadow-lg">
                      <HiExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </CardFooter>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              </Card>
            </FadeIn>
          ))}
        </Stagger>
      </Container>
    </section>
  );
};
