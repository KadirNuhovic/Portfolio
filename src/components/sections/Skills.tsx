'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { FadeIn } from '../animations/FadeIn';
import { Stagger } from '../animations/Stagger';
import { skills } from '@/data/skills';
import * as SiIcons from 'react-icons/si';

export const Skills = () => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <SectionTitle title="My Skills" subtitle="The technologies and tools I use to bring ideas to life." />
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-semibold capitalize text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4">
                {category}
              </h3>
              
              <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => {
                    const Icon = (SiIcons as any)[skill.icon];
                    return (
                      <FadeIn key={skill.name}>
                        <Card className="p-4 flex flex-col items-center justify-center gap-3 group hover:border-blue-500 transition-colors">
                          {Icon && <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />}
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </Card>
                      </FadeIn>
                    );
                  })}
              </Stagger>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
