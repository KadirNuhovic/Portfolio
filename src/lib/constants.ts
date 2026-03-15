export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/KadirNuhovic',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your.email@example.com',
} as const;

export const SITE_CONFIG = {
  name: 'Portfolio',
  description: 'My professional portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
  url: 'https://yourportfolio.com',
} as const;
