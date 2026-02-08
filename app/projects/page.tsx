"use client";
import detailsJson from "../data/datas.json";
import { Github, ExternalLink, Calendar, Layers } from 'lucide-react';

const HighlightedText = ({ text }: { text: string }) => {
  const parts = text.split(/(\{\{\{.*?\}\}\}|\{\{.*?\}\})/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("{{{") && part.endsWith("}}}")) {
          const highlightText = part.slice(3, -3);
          return (
            <span 
              key={index} 
              className="font-bold px-1.5 py-0.5 rounded-md mx-0.5"
              style={{ 
                background: 'var(--brand-primary)',
                color: 'var(--background)'
              }}
            >
              {highlightText}
            </span>
          );
        }
        
        if (part.startsWith("{{") && part.endsWith("}}")) {
          const highlightText = part.slice(2, -2); 
          return (
            <span 
              key={index} 
              className="font-semibold border-b-2 pb-0.5"
              style={{ 
                color: 'var(--brand-primary)',
                borderColor: 'var(--brand-secondary)'
              }}
            >
              {highlightText}
            </span>
          );
        }
        
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default function ProjectsPage() {
  const projectData = detailsJson.projectScreen;

  return (
    <div className="w-full min-h-screen" style={{ background: 'var(--background)' }}>
      
      <div className="w-full px-4 sm:px-6 md:px-20 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--heading)' }}
          >
            {projectData.title}
          </h1>
          <p 
            className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: 'var(--secondary)' }}
          >
            A collection of my work, side projects, and experiments in software development.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-20 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.projects.map((project, index) => (
              <div 
                key={index}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'var(--muted)',
                  border: '1px solid var(--subtle)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.projectname}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: 'linear-gradient(to bottom, transparent 50%, var(--muted) 100%)'
                    }}
                  />
                  
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5"
                    style={{ 
                      background: 'var(--background)',
                      color: 'var(--secondary)',
                      border: '1px solid var(--subtle)'
                    }}
                  >
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--heading)' }}
                  >
                    <HighlightedText text={project.projectname} />
                  </h3>

                  <p 
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--secondary)' }}
                  >
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--brand-primary)' }}>
                      <Layers className="w-3.5 h-3.5" />
                      Features
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{ 
                            background: 'var(--background)',
                            color: 'var(--secondary)',
                            border: '1px solid var(--subtle)'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techused.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ 
                            background: 'rgba(var(--brand-primary-rgb), 0.1)',
                            color: 'var(--brand-primary)',
                            border: '1px solid rgba(var(--brand-primary-rgb), 0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:opacity-90"
                      style={{ 
                        background: 'var(--background)',
                        color: 'var(--heading)',
                        border: '1px solid var(--subtle)'
                      }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:opacity-90"
                      style={{ 
                        background: 'var(--brand-primary)',
                        color: 'var(--background)'
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projectData.projects.length === 0 && (
            <div className="text-center py-16" style={{ color: 'var(--secondary)' }}>
              <p>No projects yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}