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
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I've spent the last few years honing my skills in web development, focusing on creating clean, efficient, and user-friendly interfaces. My journey started with a curiosity for how things work on the web, and it has evolved into a professional career.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I believe in continuous learning and staying up-to-date with the latest industry trends. When I'm not coding, you can find me exploring new technologies, contributing to open-source, or sharing my knowledge with the community.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white italic">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">City, Country</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white italic">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">2+ Years</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
