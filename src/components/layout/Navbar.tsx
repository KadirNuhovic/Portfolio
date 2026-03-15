'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '@/lib/constants';
import { handleNavigation, smoothScroll } from '@/lib/utils';
import { HiMenu, HiX } from 'react-icons/hi';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="gradient-border"></div>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-gradient header-glow',
          scrolled
            ? 'shadow-md py-3'
            : 'py-5'
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </Container>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-t border-gray-800">
            <Container className="flex flex-col py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </div>
        )}
      </nav>
    </>
  );
};
