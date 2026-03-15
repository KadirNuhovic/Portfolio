// Primer za projekat kartice sa slikama

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden">
      {/* Slika projekta */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`/images/projects/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Tech stack ikone */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <img 
              key={index}
              src={`/images/icons/${tech.icon}`}
              alt={tech.name}
              className="w-6 h-6"
            />
          ))}
        </div>
        
        <Button href={project.liveUrl}>View Project</Button>
      </CardContent>
    </Card>
  );
};
