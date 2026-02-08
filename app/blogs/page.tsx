"use client";
import detailsJson from "../data/datas.json";
import { Calendar, Clock, ExternalLink, ArrowUpRight } from 'lucide-react';

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

export default function BlogPage() {
  const blogData = detailsJson.blogScreen;

  return (
    <div className="w-full min-h-screen" style={{ background: 'var(--background)' }}>
      
      <div className="w-full px-4 sm:px-6 md:px-20 pt-20 pb-12">
        <div className=" mx-auto">
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'var(--secondary)' }}
          >
            Explore my thoughts, tutorials, and insights on software development, 
            technology trends, and engineering best practices.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-20 pb-20">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData.blogs.map((blog, index) => (
              <a 
                key={index}
                href={blog.navigateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: 'var(--muted)',
                  border: '1px solid var(--subtle)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: 'linear-gradient(to bottom, transparent 50%, var(--muted) 100%)'
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs font-medium" style={{ color: 'var(--secondary)' }}>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--brand-primary)' }} />
                      Jan 2025
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" style={{ color: 'var(--brand-secondary)' }} />
                      5 min read
                    </span>
                  </div>

                  <h3 
                    className="text-lg font-bold mb-2 line-clamp-2 `group-hover:text-var(--brand-primary)` transition-colors duration-300"
                    style={{ color: 'var(--heading)' }}
                  >
                    <HighlightedText text={blog.title} />
                  </h3>

                  <p 
                    className="text-sm leading-relaxed mb-4 line-clamp-2"
                    style={{ color: 'var(--secondary)' }}
                  >
                    {blog.description}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
                    Read article
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {blogData.blogs.length === 0 && (
            <div className="text-center py-16" style={{ color: 'var(--secondary)' }}>
              <p>No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}