'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { FadeIn } from '../animations/FadeIn';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <SectionTitle title="About Me" subtitle="A little bit about who I am and what I do." />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
              <img 
                src="/images/profile/profile-photo.jpg" 
                alt="Kadir Nuhovic - Profile Photo"
                className="w-full h-full object-cover object-[25%_0%]"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Frontend Developer & Software Engineering Student
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a web developer focused on building modern and responsive web applications. I work with technologies such as React, Next.js, JavaScript, TypeScript, HTML, CSS, and Tailwind CSS, and I have experience working with databases and backend integration.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I enjoy collaborating in teams, building real-world projects, and constantly improving my development skills. My goal is to create clean, efficient, and user-friendly applications while continuously learning new technologies.
              </p>
              
              {/* Enhanced Info Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎓 Education</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Software Engineering</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💼 Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">2+ Years Development</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌍 Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Available Remote</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Status</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Open to Opportunities</p>
                </div>
              </div>
              
              {/* Skills Preview */}
              <div className="pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
