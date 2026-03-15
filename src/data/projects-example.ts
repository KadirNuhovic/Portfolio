// Ažurirani data fajl sa slikama

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projectsExample: Project[] = [
  {
    id: 1,
    title: "Digital Menu",
    description: "Interactive restaurant menu with real-time updates and ordering system",
    image: "digital-menu-screenshot.png",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://digital-menu-demo.com",
    githubUrl: "https://github.com/KadirNuhovic/Digital-Menu",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    image: "ecommerce-mockup.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "https://shop-demo.com",
    githubUrl: "https://github.com/KadirNuhovic/ecommerce",
    featured: true
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time synchronization",
    image: "task-app-demo.gif",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    liveUrl: "https://tasks-app.com",
    githubUrl: "https://github.com/KadirNuhovic/task-manager",
    featured: false
  }
];
