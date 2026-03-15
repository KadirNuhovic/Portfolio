// Primer za projekat kartice sa slikama

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: { name: string; icon: string }[];
  liveUrl: string;
}

// Ovo je samo primer - nije za korišćenje u glavnoj aplikaciji
export const ProjectCardExample = ({ project }: { project: Project }) => {
  // U stvarnoj aplikaciji, koristi:
  // import { Card } from '@/components/ui/Card';
  
  return (
    // <Card className="overflow-hidden">
    <div className="overflow-hidden border rounded-lg shadow-lg">
      {/* Slika projekta */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <img 
            src={`/images/projects/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Tech stack ikone */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
              {tech.name}
            </span>
          ))}
        </div>
        
        <a 
          href={project.liveUrl} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Project
        </a>
      </div>
    </div>
  );
};
