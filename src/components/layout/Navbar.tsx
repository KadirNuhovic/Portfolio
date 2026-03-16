'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '@/lib/constants';
import { handleNavigation, smoothScroll } from '@/lib/utils';
import { HiMenu, HiX, HiSearch } from 'react-icons/hi';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.search-container')) {
        setShowResults(false);
        setSearchResults([]);
      }
    };

    if (showResults) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showResults]);

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Simulate search results
    const mockResults = [
      { type: 'project', title: 'E-Commerce Platform', href: '/projects' },
      { type: 'project', title: 'Weather Dashboard', href: '/projects' },
      { type: 'skill', title: 'React Development', href: '/skills' },
      { type: 'skill', title: 'TypeScript', href: '/skills' },
      { type: 'page', title: 'About Me', href: '/about' },
      { type: 'page', title: 'Contact', href: '/contact' },
    ];

    const filtered = mockResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered);
    setShowResults(true);
  };

  const handleResultClick = (href: string) => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
    router.push(href);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page or filter current page
      handleSearch(searchQuery);
    }
  };

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
          <Link href="/" className="text-3xl font-bold gradient-text hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg">
            <span className="inline-block hover:animate-bounce">P</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.1s'}}>o</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.2s'}}>r</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.3s'}}>t</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.4s'}}>f</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.5s'}}>o</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.6s'}}>l</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.7s'}}>i</span>
            <span className="inline-block hover:animate-bounce" style={{animationDelay: '0.8s'}}>o</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-gray-300 hover:text-white hover:scale-110 hover:text-blue-300 transition-all duration-300 hover:drop-shadow-lg relative group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </Link>
            ))}
          </div>
          
          {/* Central Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group search-container">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search projects, skills, or content..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setShowResults(true)}
                  className="relative z-10 w-full px-4 py-2 pr-10 rounded-xl bg-gradient-to-br from-slate-800/60 to-blue-900/60 text-white placeholder-gray-400 border border-blue-500/40 focus:border-blue-400 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <HiSearch size={20} />
                </button>
              </form>
              
              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-gradient-to-br from-slate-900/95 to-blue-900/95 border border-blue-500/40 rounded-xl shadow-2xl backdrop-blur-sm max-h-96 overflow-y-auto z-50">
                  <div className="p-2">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.href)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium group-hover:text-blue-300">
                              {result.title}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {result.type}
                            </div>
                          </div>
                          <HiSearch size={16} className="text-gray-400 group-hover:text-blue-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Search Button */}
          <button
            onClick={() => setShowResults(!showResults)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <HiSearch size={20} />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </Container>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-br from-slate-900/95 to-blue-900/95 border-t border-blue-500/30 backdrop-blur-sm">
            <Container className="flex flex-col py-4 gap-4">
              {/* Mobile Search */}
              {showResults && (
                <div className="px-3 py-2">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-800/60 text-white placeholder-gray-400 border border-blue-500/30 focus:border-blue-400 focus:outline-none transition-all duration-300"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <HiSearch size={20} />
                    </button>
                  </form>
                  
                  {/* Mobile Search Results */}
                  {searchResults.length > 0 && (
                    <div className="mt-2 max-h-48 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result.href)}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium text-sm">
                                {result.title}
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                {result.type}
                              </div>
                            </div>
                            <HiSearch size={16} className="text-gray-400" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-bold text-gray-300 py-2 hover:text-white hover:text-blue-300 hover:scale-105 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </div>
        )}
        
        {/* Click outside to close search */}
        {showResults && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              setShowResults(false);
              setSearchResults([]);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setShowResults(false);
                setSearchResults([]);
              }
            }}
            tabIndex={0}
          />
        )}
      </nav>
    </>
  );
};
