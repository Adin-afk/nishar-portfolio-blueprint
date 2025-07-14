import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Library',
      description: 'A modern digital library management system built with intuitive UI design and efficient book cataloging features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'To-Do List App',
      description: 'An interactive task management application with real-time updates, priority settings, and clean user interface.',
      technologies: ['JavaScript', 'CSS', 'Local Storage'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform with shopping cart functionality, responsive design, and smooth user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Backend'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glow-card group relative overflow-hidden bg-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;