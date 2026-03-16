import React, { useEffect } from 'react';
import { Github, Linkedin, Award, Code, GraduationCap } from 'lucide-react';
// Added 'projects' to the import list below
import { profileData, experiences, accomplishments, education, projects } from './data';

const Portfolio = () => {
  // useEffect must be INSIDE the component function
  useEffect(() => {
    fetch('https://portfolio-pro-mdde.onrender.com/api/status')
      .then(res => res.json())
      .then(data => console.log("Backend Connection Successful:", data))
      .catch(err => console.error("Backend unreachable:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a192f]/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-blue-400 font-mono font-bold text-xl">DV.</span>
          <div className="flex gap-6 text-sm font-mono">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-28">
          <p className="text-blue-400 font-mono mb-4">Hi, my name is</p>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-100 mb-4">{profileData.name}</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-400 mb-6">{profileData.title}</h2>
          <p className="max-w-xl text-lg leading-relaxed mb-8">
            {profileData.summary} Currently focused on high-performance backend systems and AI automation at 
            <span className="text-blue-400"> Revino</span>.
          </p>
          <div className="flex gap-6">
            <a href={profileData.links.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><Github size={24} /></a>
            <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><Linkedin size={24} /></a>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="mb-28">
          <h3 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
            <Code className="text-blue-400" /> Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#112240] p-8 rounded-xl border border-slate-800 hover:border-blue-400/50 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(',').map((t) => (
                    <span key={t} className="text-[10px] font-mono text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <ul className="text-[11px] text-slate-500 font-mono space-y-1">
                  {project.features.map(f => <li key={f}>▹ {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Accomplishments Grid */}
        <section className="mb-28">
          <h3 className="text-3xl font-bold text-slate-100 mb-10 flex items-center gap-4">
            <Award className="text-blue-400" /> Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accomplishments.map((acc, i) => (
              <div key={i} className="p-6 bg-[#112240] rounded-lg border border-transparent hover:border-blue-400/50 transition group">
                <p className="text-blue-400 font-mono text-xs mb-2">{acc.category}</p>
                <h4 className="text-slate-100 font-bold mb-2">{acc.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{acc.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-4">
              <GraduationCap className="text-blue-400" /> Education
            </h3>
            <div className="bg-[#112240] p-6 rounded-lg border border-slate-800">
              <h4 className="text-slate-100 font-bold">{education.degree}</h4>
              <p className="text-blue-400 text-sm my-1">{education.college}</p>
              <div className="flex justify-between text-xs font-mono mt-4 text-slate-400">
                <span>GPA: {education.gpa}</span>
                <span>{education.graduation}</span>
              </div>
            </div>
          </div>

          <div id="skills">
            <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-4">
              <Code className="text-blue-400" /> Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {["MERN Stack", "Java (DSA)", "Python", "DevOps", "AI Agents", "Cloud Computing", "SaaS", "MySQL", "Git"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-blue-400/5 text-blue-400 border border-blue-400/20 rounded font-mono text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-slate-800 text-xs font-mono text-slate-500">
        Designed & Built by Divyansh Verma | 2026
      </footer>
    </div>
  );
};

export default Portfolio;