'use client';

import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <Container>
        <div className="text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              Building Digital <span className="shimmer-text">Experiences</span> That Matter
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm a Frontend Developer specializing in building exceptional digital experiences using Next.js, React, and Tailwind CSS.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
      
      {/* Background decoration */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(37,99,235,0.1)] opacity-50 blur-[80px]"></div>
      </div>
    </section>
  );
};
