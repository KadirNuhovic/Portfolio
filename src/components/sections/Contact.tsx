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
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
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
                    <FaLinkedin size={20} />
                  </div>
                  <span>linkedin.com/in/yourusername</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaGithub size={20} />
                  </div>
                  <span>github.com/yourusername</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaTwitter size={20} />
                  </div>
                  <span>twitter.com/yourusername</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <Card className="p-8 bg-slate-800/50 border border-blue-500/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-blue-500/30 bg-slate-700/50 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-blue-500/30 bg-slate-700/50 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-blue-500/30 bg-slate-700/50 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
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
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
              </form>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};
