import Link from 'next/link';
import { Container } from './Container';
import { SOCIAL_LINKS } from '@/lib/constants';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-400/20 py-12 mt-20" style={{ backgroundColor: '#c7c6c3' }}>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-blue-600">
              Portfolio
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xs">
              Building modern web experiences with a focus on performance and accessibility.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
