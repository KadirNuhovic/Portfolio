import Link from 'next/link';
import { Container } from './Container';
import { SOCIAL_LINKS } from '@/lib/constants';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-border header-gradient py-12 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-xl font-bold gradient-text">
              Portfolio
            </Link>
            <p className="mt-2 text-gray-300 max-w-xs">
              Building modern web experiences with a focus on performance and accessibility.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
