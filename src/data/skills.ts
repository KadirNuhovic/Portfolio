import { Skill } from '../types/skill';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiGit, 
  SiGithub, 
  SiX, 
  SiVercel, 
  SiNodedotjs 
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export const skills: Skill[] = [
  { name: 'HTML5', icon: 'SiHtml5', category: 'frontend' },
  { name: 'CSS3', icon: 'SiCss', category: 'frontend' },
  { name: 'JavaScript', icon: 'SiJavascript', category: 'frontend' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
  { name: 'React', icon: 'SiReact', category: 'frontend' },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend' },
  { name: 'Framer Motion', icon: 'SiFramer', category: 'frontend' },
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend' },
  { name: 'Git', icon: 'SiGit', category: 'tools' },
  { name: 'GitHub', icon: 'SiGithub', category: 'tools' },
  { name: 'Vercel', icon: 'SiVercel', category: 'tools' },
];
