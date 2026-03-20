import React from 'react';
import { Github, Linkedin, ExternalLink, Terminal, Cpu, Rocket, Sparkles } from 'lucide-react';
import { profileData, accomplishments, education, projects } from './data';

const Portfolio = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-20">
        <span className="text-2xl font-black tracking-tighter text-card">DV<span className="text-orange">.</span></span>
        <div className="flex gap-4">
          <a href={profileData.links.github} className="bg-card text-white px-6 py-2 rounded-full font-bold text-sm">Resume</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6">
            <Sparkles size={14} /> Available for 2026 roles
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-card leading-[0.9] tracking-tighter mb-8">
            Building software <br/>
            <span className="text-accent italic">that matters.</span>
          </h1>
        </section>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {projects.slice(0, 3).map((p, i) => (
            <div key={i} className={`bento-card ${i === 0 ? 'md:col-span-2' : ''}`}>
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Terminal className="text-orange" />
                </div>
                <ExternalLink size={20} className="text-muted" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.split(',').map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-orange">
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Small Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Experience/Education Bento Box */}
          <div className="md:col-span-2 p-10 bg-[#E5E1DA] rounded-[2rem] border border-black/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="text-accent" /> {education.college}
            </h3>
            <p className="text-muted text-sm">{education.degree} — {education.graduation}</p>
          </div>

          {/* Social Links Box */}
          <div className="p-10 bg-orange rounded-[2rem] flex flex-col justify-between text-white">
            <Rocket size={32} />
            <div>
              <p className="font-bold">Let's build together.</p>
              <div className="flex gap-4 mt-4">
                <Github size={20} />
                <Linkedin size={20} />
              </div>
            </div>
          </div>

          {/* Achievement Box */}
          <div className="p-10 bg-accent rounded-[2rem] text-white">
             <p className="text-xs uppercase font-black opacity-60 mb-2">Top Award</p>
             <p className="font-bold text-lg leading-tight">{accomplishments[0].title}</p>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-center text-muted text-xs font-bold uppercase tracking-widest">
        © 2026 Divyansh Verma — Designed with intent
      </footer>
    </div>
  );
};

export default Portfolio;