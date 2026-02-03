"use client";

export default function Home() {
  return (
    <div className="w-full flex flex-col" style={{ background: 'var(--background)' }}>

      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="mb-10 relative">
          <div className="w-40 h-40 rounded-full flex items-center justify-center relative overflow-hidden"
               style={{ 
                 background: 'linear-gradient(135deg, var(--muted) 0%, var(--subtle) 100%)',
                 boxShadow: '0 0 10px var(--brand-glow), 0 0 20px var(--brand-glow)'
               }}>
            <div className="text-center z-10">
              <div className="text-4xl font-serif tracking-wider mb-1"
                   style={{ fontFamily: 'serif', letterSpacing: '0.15em', color: 'var(--foreground)' }}>
                <span className="text-3xl">K</span>
                <span className="text-2xl align-top">D</span>
              </div>
              <div className="text-[0.5rem] uppercase tracking-widest mt-1"
                   style={{ color: 'var(--secondary)' }}>
                Kshitij Dahal
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
          KSHITIJ DAHAL
        </h1>
        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center tracking-wide"
            style={{ color: 'var(--heading)' }}>
          Front End Developer
        </h2>
        <div className="max-w-2xl text-center">
          <p className="text-lg md:text-xl leading-relaxed tracking-wide"
             style={{ color: 'var(--secondary)' }}>
            This portfolio showcases my resume, skills, contact details, as well as the projects I have already created and those I am currently working on.
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
      About Me
    </h2>
    
    <div 
      className="space-y-6 leading-relaxed text-base md:text-lg"
      style={{ color: 'var(--secondary)' }}
    >
      <p>
        I'm a full stack developer who enjoys building things that actually work. On the frontend, 
        I work with <span className="font-medium" style={{ color: 'var(--text)' }}>React.js</span>,{" "}
        <span className="font-medium" style={{ color: 'var(--text)' }}>Next.js</span>, and{" "}
        <span className="font-medium" style={{ color: 'var(--text)' }}>Tailwind CSS</span> to create clean, responsive 
        interfaces. For backend and mobile, I use{" "}
        <span className="font-medium" style={{ color: 'var(--text)' }}>ASP.NET</span> along with{" "}
        <span className="font-medium" style={{ color: 'var(--text)' }}>React Native</span> and{" "}
        <span className="font-medium" style={{ color: 'var(--text)' }}>.NET MAUI</span> to build cross-platform apps 
        that feel native on any device.
      </p>
      
      <p>
        I recently completed a{" "}
        <span className="font-medium" style={{ color: 'var(--brand-primary)' }}>one-year internship</span>{" "}
        where I spent every day working with React.js, React Native, and .NET MAUI on real projects. 
        It taught me a lot about writing code that other people can read and maintain, fixing bugs 
        under pressure, and working with a team to ship features on time.
      </p>
      
      <p>
        I also spent{" "}
        <span className="font-medium" style={{ color: 'var(--brand-primary)' }}>six months</span>{" "}
        learning about DeFi and blockchain development. It was a completely different world from traditional web 
        development, but it helped me understand how decentralized systems work and gave me some 
        interesting perspective on building secure, transparent applications.
      </p>
      
      <p 
        className="italic border-l-4 pl-6 py-2"
        style={{ 
          color: 'var(--primary)',
          borderColor: 'var(--brand-primary)'
        }}
      >
        I like solving problems and figuring out how to make things better. Whether it's improving 
        load times, fixing a tricky UI issue, or learning something new to get the job done, I'm 
        always ready to dive in and figure it out.
      </p>
    </div>
  </div>
</div>
    </div>
  );
}