import React, { useEffect } from 'react';
import { Github, Linkedin, Award, Code, GraduationCap, ExternalLink, Terminal, Cpu, Rocket, ChevronRight } from 'lucide-react';
import { profileData, accomplishments, education, projects } from './data';

const Portfolio = () => {
  useEffect(() => {
    fetch('https://portfolio-pro-mdde.onrender.com/api/status').catch(() => {});
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="mesh-gradient"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/40 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          <span className="text-2xl font-black tracking-tighter text-white">DV<span className="text-accent">.</span></span>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-muted">
            <a href="#projects" className="hover:text-accent transition">Projects</a>
            <a href="#skills" className="hover:text-accent transition">Stack</a>
            <a href="#about" className="hover:text-accent transition">About</a>
          </div>
          <a href={profileData.links.github} target="_blank" rel="noreferrer" 
             className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            Connect
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-40 pb-24">
        
        {/* Hero Section */}
        <section id="about" className="mb-48">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-bold mb-8">
            <Rocket size={14} /> Engineer based in India
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Designing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Scalable AI.</span>
          </h1>
          <p className="max-w-2xl text-xl text-muted leading-relaxed mb-12">
            {profileData.summary} Currently leading performance optimization at <span className="text-white font-semibold underline decoration-accent/30">Revino</span>.
          </p>
          <div className="flex gap-8">
            <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition"><Linkedin size={24}/></a>
            <a href={profileData.links.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition"><Github size={24}/></a>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-48">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black text-white">Selected Work</h2>
            <div className="h-px bg-white/10 flex-grow mx-8 mb-4 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group bg-card/40 border border-white/5 rounded-4xl p-10 hover:bg-card/60 transition-all duration-500 hover:scale-[1.02] cursor-default">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-background rounded-3xl border border-white/5 group-hover:border-accent/50 transition-colors">
                    <Terminal className="text-accent" size={28} />
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="text-muted hover:text-white transition" size={22} />
                  </a>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-10">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(',').map((t) => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-background/50 border border-white/5 text-[10px] font-black uppercase tracking-widest text-accent">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Arsenal Section */}
        <section id="skills" className="mb-48">
          <div className="bg-card/30 border border-white/5 rounded-4xl p-16">
            <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-4">
              <Cpu className="text-accent" /> Technical Arsenal
            </h2>
            <div className="flex flex-wrap gap-4">
              {["MERN Stack", "Java (DSA)", "Python", "DevOps", "AI Agents", "Cloud Computing", "SaaS", "MySQL", "Git"].map((skill) => (
                <div key={skill} className="px-8 py-4 bg-background rounded-2xl border border-white/5 font-bold hover:border-accent/50 hover:text-accent transition cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-12 bg-card/40 rounded-4xl border border-white/5">
            <GraduationCap className="text-accent mb-8" size={40} />
            <h3 className="text-2xl font-black text-white mb-2">{education.degree}</h3>
            <p className="text-accent font-bold mb-6">{education.college}</p>
            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-muted">
              <span>GPA: {education.gpa}</span>
              <span>{education.graduation}</span>
            </div>
          </div>
          <div className="p-12 bg-card/40 rounded-4xl border border-white/5 flex flex-col justify-between">
            <Award className="text-accent mb-8" size={40} />
            <div>
              <h3 className="text-2xl font-black text-white mb-4">Core Accomplishment</h3>
              <p className="text-muted leading-relaxed">{accomplishments[0].title}: {accomplishments[0].note}</p>
            </div>
          </div>
        </div>

      </main>

      <footer className="py-24 border-t border-white/5 text-center">
        <p className="text-muted text-sm font-bold uppercase tracking-widest">
          © 2026 Divyansh Verma — Built with Vite & Tailwind
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;