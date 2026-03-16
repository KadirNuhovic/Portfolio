'use client';

import Link from 'next/link';
import { Container } from './Container';
import { SOCIAL_LINKS } from '@/lib/constants';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDribbble, FaFigma, FaCodepen, FaStackOverflow, FaDev } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiExternalLink, HiArrowUp } from 'react-icons/hi';
import { useState } from 'react';
import { smoothScroll } from '@/lib/utils';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Videos', href: '/videos' },
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    { label: 'Web Development', icon: '💻' },
    { label: 'UI/UX Design', icon: '🎨' },
    { label: 'Mobile Apps', icon: '📱' },
    { label: 'API Development', icon: '🔌' },
    { label: 'Database Design', icon: '🗄️' },
    { label: 'Consulting', icon: '💡' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
    'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'Redis'
  ];

  return (
    <footer className="relative footer-gradient border-t border-blue-500/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50 group"
        >
          <HiArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>

        {/* Main Footer Content */}
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-block">
                <div className="text-3xl font-bold gradient-text hover:scale-110 transition-transform duration-300">
                  <span className="inline-block hover:animate-bounce">P</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.1s' }}>o</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.2s' }}>r</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.3s' }}>t</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.4s' }}>f</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.5s' }}>o</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.6s' }}>l</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.7s' }}>i</span>
                  <span className="inline-block hover:animate-bounce" style={{ animationDelay: '0.8s' }}>o</span>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Full-Stack Developer crafting exceptional digital experiences with cutting-edge technologies. 
                Passionate about clean code, performance optimization, and innovative solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <HiMail className="w-5 h-5 text-blue-400" />
                  <span>kadirnuhovic8@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <HiPhone className="w-5 h-5 text-blue-400" />
                  <span>+381 65 500 1615</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <HiLocationMarker className="w-5 h-5 text-blue-400" />
                  <span>Novi Pazar, Serbia</span>
                  <span className="text-sm text-gray-400">Emina Redžepagića 47A</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-blue-900/60 border border-blue-500/30 rounded-xl hover:scale-110 hover:border-blue-400 transition-all duration-300 hover:shadow-blue-500/30 group"
                >
                  <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-blue-900/60 border border-blue-500/30 rounded-xl hover:scale-110 hover:border-blue-400 transition-all duration-300 hover:shadow-blue-500/30 group"
                >
                  <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-red-900/60 border border-red-500/30 rounded-xl hover:scale-110 hover:border-red-400 transition-all duration-300 hover:shadow-red-500/30 group"
                >
                  <FaYoutube className="w-5 h-5 text-gray-300 group-hover:text-red-400" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-cyan-900/60 border border-cyan-500/30 rounded-xl hover:scale-110 hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-500/30 group"
                >
                  <FaTwitter className="w-5 h-5 text-gray-300 group-hover:text-cyan-400" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-pink-900/60 border border-pink-500/30 rounded-xl hover:scale-110 hover:border-pink-400 transition-all duration-300 hover:shadow-pink-500/30 group"
                >
                  <FaInstagram className="w-5 h-5 text-gray-300 group-hover:text-pink-400" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white text-glow">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <HiExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white text-glow">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white text-glow">Newsletter</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to get updates on new projects and tech insights.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-blue-900/60 text-white placeholder-gray-400 border border-blue-500/30 focus:border-blue-400 focus:outline-none transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-blue-500/30 hover:scale-105"
                >
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white text-glow mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:scale-110 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left text-gray-300 text-sm">
                <p>© {currentYear} Portfolio. All rights reserved.</p>
                <p className="mt-1">Built with using Next.js, TypeScript & Tailwind CSS</p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
