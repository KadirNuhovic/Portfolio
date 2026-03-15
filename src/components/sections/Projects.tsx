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
    <section id="projects" className="py-20">
      <Container>
        <SectionTitle title="Featured Projects" subtitle="A collection of some of my recent work." />
        
        <Stagger className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <FadeIn key={project.id} direction="up">
              <Card className="h-full flex flex-col group">
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="gap-4">
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" className="p-0">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2">
                        <SiGithub size={18} /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" className="p-0">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2">
                        <HiExternalLink size={18} /> Live Demo
                      </a>
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
