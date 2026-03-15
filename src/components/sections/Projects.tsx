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
          {projects.map((project) => (
            <FadeIn key={project.id} direction="up">
              <Card className="h-full flex flex-col group bg-slate-800/50 border border-blue-500/20">
                <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <p className="text-sm">{project.title}</p>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-bold text-white text-glow group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-4 pt-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="border-blue-500/50 text-blue-400 hover:border-blue-400 hover:text-blue-300">
                      <SiGithub className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" className="btn-gradient text-white border-0">
                      <HiExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </Stagger>
      </Container>
    </section>
  );
};
