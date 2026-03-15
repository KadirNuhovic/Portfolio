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
    <section id="skills" className="py-20 fixed-teget">
      <Container>
        <SectionTitle title="My Skills" subtitle="The technologies and tools I use to bring ideas to life." />
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-semibold capitalize text-white text-glow border-l-4 border-blue-500 pl-4">
                {category === 'frontend' ? '🎨 Frontend Development' : category === 'backend' ? '⚙️ Backend' : '🔧 Tools'}
              </h3>
              
              <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => {
                    const Icon = (SiIcons as any)[skill.icon];
                    return (
                      <FadeIn key={skill.name}>
                        <Card className="p-4 flex flex-col items-center justify-center gap-3 group hover:border-blue-500 transition-all duration-300 hover:scale-105 bg-slate-800/50 border border-blue-500/20">
                          {Icon && <Icon className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />}
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
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
