import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Frontend Developer',
    duration: '2022 - Present',
    description: [
      'Developed responsive user interfaces using React and Next.js.',
      'Collaborated with designers to implement pixel-perfect designs.',
      'Optimized application performance and improved SEO.',
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '2',
    company: 'Digital Agency',
    position: 'Web Developer Intern',
    duration: '2021 - 2022',
    description: [
      'Assisted in building client websites using HTML, CSS, and JavaScript.',
      'Gained experience with version control using Git.',
      'Participated in code reviews and team meetings.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
];
