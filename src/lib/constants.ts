export const NAV_LINKS = [
  { label: 'Home', href: '/', sectionId: 'hero' },
  { label: 'About', href: '/about', sectionId: 'about' },
  { label: 'Skills', href: '/skills', sectionId: 'skills' },
  { label: 'Projects', href: '/projects', sectionId: 'projects' },
  { label: 'Videos', href: '/videos', sectionId: 'video-learning' },
  { label: 'Contact', href: '/contact', sectionId: 'contact' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/KadirNuhovic',
  linkedin: 'https://www.linkedin.com/in/kadir-nuhovic-8975582b1/',
  twitter: 'https://twitter.com/yourusername',
  instagram: 'https://www.instagram.com/kadir_nvc',
  email: 'your.email@example.com',
} as const;

export const SITE_CONFIG = {
  name: 'Portfolio',
  description: 'My professional portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
  url: 'https://yourportfolio.com',
} as const;
