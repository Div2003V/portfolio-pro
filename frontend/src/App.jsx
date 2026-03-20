import React, { useEffect } from 'react';
import { Github, Linkedin, Award, Code, GraduationCap, ExternalLink, Terminal, Cpu, Globe, Rocket } from 'lucide-react';
import { profileData, accomplishments, education, projects } from './data';

const Portfolio = () => {
  useEffect(() => {
    fetch('https://portfolio-pro-mdde.onrender.com/api/status').catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-background text-slate-200 font-sans antialiased selection:bg-accent/30">
      
      {/* Sleek Minimal Nav */}
      <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-16 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">DV<span className="text-accent">.</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Stack</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </div>
          <a href={profileData.links.github} className="text-sm bg-white text-black px-4 py-1.5 rounded-full font-bold hover:bg-accent transition">
            GitHub
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-32 pb-24">
        
        {/* Hero - Ultra Modern Left-Aligned */}
        <section id="about" className="mb-32 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6">
            <Rocket size={14} /> Available for 2026 roles
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-8">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">future</span> of AI.
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-10">
            {profileData.summary} Lead Engineer at <span className="text-white font-bold">Revino</span>, specializing in high-concurrency systems.
          </p>
          <div className="flex gap-4">
             <Linkedin className="text-muted hover:text-accent cursor-pointer transition" />
             <Github className="text-muted hover:text-accent cursor-pointer transition" />
          </div>
        </section>

        {/* Featured Projects - Card Grid like the reference */}
        <section id="projects" className="mb-40">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Featured Work</h2>
              <p className="text-muted">Selected projects from my engineering journey.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-card border border-white/5 rounded-3xl p-8 hover:bg-slate-900/50 transition-all duration-500">
                <div className="flex justify-between mb-8">
                  <div className="p-3 bg-background rounded-2xl border border-white/5">
                    <Terminal className="text-accent" size={24} />
                  </div>
                  <ExternalLink className="text-muted group-hover:text-white transition" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-muted text-sm mb-8 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(',').map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-background border border-white/5 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Arsenal - Minimalist Pill Layout */}
        <section id="skills" className="mb-40">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Technical Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["React", "Node.js", "Python", "Docker", "AWS", "PostgreSQL", "Redis", "TypeScript", "Go"].map((skill) => (
              <div key={skill} className="px-8 py-4 bg-card border border-white/5 rounded-2xl text-lg font-medium hover:border-accent/50 transition cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card/50 p-10 rounded-3xl border border-white/5">
            <GraduationCap className="text-accent mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
            <p className="text-accent font-medium mb-4">{education.college}</p>
            <p className="text-muted text-sm italic">Class of {education.graduation} • GPA {education.gpa}</p>
          </div>
          <div className="bg-card/50 p-10 rounded-3xl border border-white/5">
             <Award className="text-accent mb-6" size={32} />
             <h3 className="text-2xl font-bold text-white mb-4">Top Accomplishment</h3>
             <p className="text-muted leading-relaxed">{accomplishments[0].title}: {accomplishments[0].note}</p>
          </div>
        </div>

      </main>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-muted text-sm">© 2026 Divyansh Verma. Built with precision.</p>
      </footer>
    </div>
  );
};

export default Portfolio;