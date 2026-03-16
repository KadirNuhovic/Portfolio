'use client';

import { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { FadeIn } from '../animations/FadeIn';
import { Card } from '../ui/Card';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      // Basic validation
      if (!name || !email || !message) {
        setStatus('error');
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        console.error('Form submission error:', data.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 fixed-teget min-h-[60vh] flex items-center">
      <Container>
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hi? Feel free to reach out!" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <FadeIn direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white text-glow mb-4">Contact Information</h3>
                <p className="text-gray-300">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaGithub size={20} />
                  </div>
                  <a 
                    href="https://github.com/KadirNuhovic" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    github.com/KadirNuhovic
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:kadirnuhovic8@gmail.com" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    kadirnuhovic8@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:+381655001615" 
                    className="hover:text-blue-400 transition-colors"
                  >
                    +381 65 500 1615
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="hover:text-blue-400 transition-colors">Emina Redžepagića 47A</p>
                    <p className="text-sm text-gray-400">36300 Novi Pazar, Serbia</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <Card className="p-8 bg-gradient-to-br from-slate-900/90 to-blue-900/90 border border-blue-500/40 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 -z-10 h-full w-full">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blue-500/50 bg-slate-800/60 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all shadow-lg hover:shadow-blue-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blue-500/50 bg-slate-800/60 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all shadow-lg hover:shadow-blue-500/20"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blue-500/50 bg-slate-800/60 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all resize-none shadow-lg hover:shadow-blue-500/20"
                    placeholder="Your message..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-gradient text-white border-0"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
                {status === 'success' && (
                  <p className="text-green-400 text-center">✅ Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center">❌ Failed to send message. Please try again.</p>
                )}
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
