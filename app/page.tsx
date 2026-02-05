"use client";
import detailsJson from "./data/datas.json";
import { Facebook, Instagram, Github, Linkedin, Twitter, Mail, Globe, ExternalLink,Youtube } from 'lucide-react';

const ContactIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    Facebook,
    Instagram,
    Github,
    Linkedin,
    Twitter,
    Youtube,
    Mail,
    Globe
  };
  
  const Icon = icons[name] || Globe;
  return <Icon className="w-6 h-6" style={{ color: color }} />;
};

const HighlightedText = ({ text }: { text: string }) => {
  const parts = text.split(/(\{\{\{.*?\}\}\}|\{\{.*?\}\})/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("{{{") && part.endsWith("}}}")) {
          const highlightText = part.slice(3, -3);
          return (
            <strong 
              key={index} 
              className="font-bold" 
              style={{ color: 'var(--primary)' }}
            >
              {highlightText}
            </strong>
          );
        }
        
        if (part.startsWith("{{") && part.endsWith("}}")) {
          const highlightText = part.slice(2, -2); 
          return (
            <span 
              key={index} 
              className="font-medium" 
              style={{ color: 'var(--brand-primary)' }}
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

export default function Home() {
  return (
    <div className="w-full flex flex-col" style={{ background: 'var(--background)' }}>

      <div className="w-full min-h-screen flex flex-col items-center pt-24 md:pt-28 justify-center">
        <div className="mb-10 relative">
          <div className="w-40 h-40 rounded-full flex items-center justify-center relative overflow-hidden"
               style={{ 
                 background: 'linear-gradient(135deg, var(--muted) 0%, var(--subtle) 100%)',
                 boxShadow: '0 0 10px var(--brand-glow), 0 0 20px var(--brand-glow)'
               }}>
            <div className="text-center z-10">
              <div className="text-4xl font-serif tracking-wider mb-1"
                   style={{ fontFamily: 'serif', letterSpacing: '0.15em', color: 'var(--foreground)' }}>
                <span className="text-3xl">{detailsJson.heroScreen.firstInitial}</span>
                <span className="text-2xl align-top">{detailsJson.heroScreen.lastInitial}</span>
              </div>
              <div className="text-[0.5rem] uppercase tracking-widest mt-1"
                   style={{ color: 'var(--secondary)' }}>
                {detailsJson.heroScreen.fullName}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full blur-xl opacity-50 -z-10 animate-pulse"
               style={{ background: 'linear-gradient(to right, var(--brand-primary), var(--brand-secondary))' }}>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-center uppercase"
            style={{ 
              background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px var(--brand-glow))'
            }}>
          {detailsJson.heroScreen.fullName}
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center tracking-wide"
            style={{ color: 'var(--heading)' }}>
          {detailsJson.heroScreen.role}
        </h2>
        
        <div className="max-w-2xl text-center">
          <p className="text-lg md:text-xl leading-relaxed tracking-wide"
             style={{ color: 'var(--secondary)' }}>
            {detailsJson.heroScreen.description}
          </p>
        </div>
        
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               style={{ color: 'var(--brand-primary)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="w-full px-5 md:px-20 py-20" style={{ background: 'var(--muted)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wider"
            style={{ 
              background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {detailsJson.aboutScreen.title}
          </h2>
          
          <div 
            className="space-y-6 leading-relaxed text-base md:text-lg"
            style={{ color: 'var(--secondary)' }}
          >
            {detailsJson.aboutScreen.paragraphs.map((paragraph, index) => (
              paragraph.type === "quote" ? (
                <p 
                  key={index}
                  className="italic border-l-4 pl-6 py-2"
                  style={{ 
                    color: 'var(--primary)',
                    borderColor: 'var(--brand-primary)'
                  }}
                >
                  {paragraph.content}
                </p>
              ) : (
                <p key={index}>
                  <HighlightedText text={paragraph.content} />
                </p>
              )
            ))}
          </div>
        </div>
      </div>
      

      <div className="w-full px-5 md:px-20 py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider text-center"
            style={{ 
              background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px var(--brand-glow))'
            }}
          >
            {detailsJson.educationScreen.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailsJson.educationScreen.schools.map((school, index) => (
              <div 
                key={index}
                className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{ 
                  background: 'linear-gradient(135deg, var(--muted) 0%, var(--subtle) 100%)',
                  border: '1px solid var(--subtle)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <div className="relative h-32 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${school.imageUrl})`,
                      filter: 'grayscale(20%)'
                    }}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: 'linear-gradient(to bottom, transparent 0%, var(--muted) 100%)'
                    }}
                  />
                  
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                    style={{ 
                      background: 'var(--background)',
                      color: 'var(--brand-primary)',
                      border: '1px solid var(--brand-primary)',
                      boxShadow: '0 0 10px var(--brand-glow)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {school.level}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--heading)' }}
                  >
                    <HighlightedText text={school.name} />
                  </h3>
                  
                  <div 
                    className="flex items-center gap-2 text-sm mb-4"
                    style={{ color: 'var(--secondary)' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{school.location}</span>
                  </div>
                  
                  <p 
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: 'var(--secondary)' }}
                  >
                    {school.description}
                  </p>
                  
                  {school.contact && (
                    <a 
                      href={school.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                      style={{ color: 'var(--brand-primary)' }}
                    >
                      <span>Visit Website</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                
                <div 
                  className="absolute bottom-0 left-0 h-1 rounded-b-xl transition-all duration-500 group-hover:w-full w-0"
                  style={{ 
                    background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-5 md:px-20 py-20" style={{ background: 'var(--muted)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider text-center"
            style={{ 
              background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px var(--brand-glow))'
            }}
          >
            Skills
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {detailsJson.skillsScreen.skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative px-6 py-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{ 
                  background: 'var(--background)',
                  border: '1px solid var(--subtle)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                <span 
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: 'var(--primary)' }}
                >
                  {skill}
                </span>
                
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{ 
                    boxShadow: '0 0 15px var(--brand-glow)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-5 md:px-20 py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider"
            style={{ 
              background: 'linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px var(--brand-glow))'
            }}
          >
            {detailsJson.contactScreen.title}
          </h2>
          
          <p 
            className="text-lg mb-12"
            style={{ color: 'var(--secondary)' }}
          >
            {detailsJson.contactScreen.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {detailsJson.contactScreen.contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, var(--muted) 0%, var(--subtle) 100%)',
                  border: '1px solid var(--subtle)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <div 
                  className="p-3 rounded-full transition-all duration-300 group-hover:shadow-lg"
                  style={{ 
                    background: 'var(--background)',
                    boxShadow: `0 0 10px ${contact.brandColor}40`
                  }}
                >
                  <ContactIcon name={contact.contactIcon} color={contact.brandColor} />
                </div>
                
                <div className="text-left">
                  <div 
                    className="text-sm font-medium uppercase tracking-wider"
                    style={{ color: 'var(--heading)' }}
                  >
                    {contact.contactSource}
                  </div>
                  <div 
                    className="text-xs flex items-center gap-1 mt-1"
                    style={{ color: contact.brandColor }}
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}