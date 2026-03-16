'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { FadeIn } from '../animations/FadeIn';
import { Stagger } from '../animations/Stagger';
import { skills } from '@/data/skills';
import * as SiIcons from 'react-icons/si';
import * as VscIcons from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';

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
                {category === 'frontend' ? '🎨 Frontend Development' : category === 'backend' ? '⚙️ Backend Development' : '🔧 Tools & DevOps'}
              </h3>
              
              <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => {
                    let Icon;
                    if (skill.icon.startsWith('Vsc')) {
                      Icon = (VscIcons as any)[skill.icon];
                    } else if (skill.icon.startsWith('Fa')) {
                      Icon = (FaLinkedin as any);
                    } else {
                      Icon = (SiIcons as any)[skill.icon];
                    }
                    return (
                      <FadeIn key={skill.name} delay={index * 0.1}>
                        <Card className="p-4 flex flex-col items-center justify-center gap-3 group hover:border-blue-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/30 backdrop-blur-sm relative overflow-hidden hover:animate-skill-glow">
                          {/* Animated background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Icon with animation */}
                          <div className="relative z-10 group-hover:animate-float">
                            <Icon className="w-10 h-10 text-blue-400 group-hover:text-white group-hover:scale-125 transition-all duration-500 drop-shadow-lg" />
                          </div>
                          
                          {/* Text with animation */}
                          <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-all duration-500 relative z-10">
                            {skill.name}
                          </span>
                          
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
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
