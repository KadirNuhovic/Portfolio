'use client';

import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { FadeIn } from '../animations/FadeIn';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="py-20 fixed-teget">
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
              <h3 className="text-2xl font-semibold text-white text-glow">
                Frontend Developer & Software Engineering Student
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a web developer focused on building modern and responsive web applications. I work with technologies such as <span className="font-semibold text-white text-glow">React</span>, <span className="font-semibold text-white text-glow">Next.js</span>, <span className="font-semibold text-white text-glow">JavaScript</span>, <span className="font-semibold text-white text-glow">TypeScript</span>, <span className="font-semibold text-white text-glow">HTML</span>, <span className="font-semibold text-white text-glow">CSS</span>, and <span className="font-semibold text-white text-glow">Tailwind CSS</span>, and I have experience working with databases and backend integration.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I enjoy collaborating in teams, building real-world projects, and constantly improving my development skills. My goal is to create clean, efficient, and user-friendly applications while continuously learning new technologies.
              </p>
              
              {/* Enhanced Info Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/20">
                  <h4 className="font-semibold text-white text-glow mb-2">🎓 Education</h4>
                  <p className="text-gray-300 text-sm">Software Engineering</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/20">
                  <h4 className="font-semibold text-white text-glow mb-2">💼 Experience</h4>
                  <p className="text-gray-300 text-sm">3+ Years Professional Experience</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/20">
                  <h4 className="font-semibold text-white text-glow mb-2">🌍 Location</h4>
                  <p className="text-gray-300 text-sm">Novi Pazar, Serbia</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/20">
                  <h4 className="font-semibold text-white text-glow mb-2">🚀 Status</h4>
                  <p className="text-gray-300 text-sm">Available for Opportunities</p>
                </div>
              </div>
              
              {/* Skills Preview */}
              <div className="pt-6">
                <h4 className="font-semibold text-white text-glow mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CV Download Button */}
              <div className="pt-6">
                <a 
                  href="/files/cv-kadir-nuhovic.pdf" 
                  download="cv-kadir-nuhovic.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-300 hover:scale-105 transition-all duration-300 font-medium"
                  target="_blank"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
                <p className="text-gray-400 text-sm mt-2">✅ My Professional CV - Click to download (720KB PDF)</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
