import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export const handleNavigation = (href: string, sectionId?: string) => {
  // If we're on the home page and have a sectionId, scroll to it
  if (sectionId && window.location.pathname === '/') {
    smoothScroll(sectionId);
  } else {
    // Use Next.js router for navigation
    if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  }
};
