import React, { useEffect } from 'react';
import { Github, Linkedin, Award, Code, GraduationCap, ExternalLink, Terminal } from 'lucide-react';
import { profileData, accomplishments, education, projects } from './data';

const Portfolio = () => {
  useEffect(() => {
    fetch('https://portfolio-pro-mdde.onrender.com/api/status')
      .then(res => res.json())
      .then(data => console.log("Backend Connection Successful:", data))
      .catch(err => console.error("Backend unreachable:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-sans selection:bg-[#64ffda]/20 selection:text-[#64ffda]">
      
      {/* Navigation - Glassmorphism Effect */}
      <nav className="fixed top-0 w-full bg-[#0a192f]/80 backdrop-blur-md z-50 border-b border-[#112240] h-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">
          <span className="text-[#64ffda] font-mono font-bold text-xl tracking-tighter">DV.</span>
          <div className="flex gap-8 text-xs font-mono tracking-widest uppercase">
            <a href="#about" className="hover:text-[#64ffda] transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-[#64ffda] transition-colors duration-300">Work</a>
            <a href="#skills" className="hover:text-[#64ffda] transition-colors duration-300">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-20">
        
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col justify-center mb-20">
          <p className="text-[#64ffda] font-mono mb-5 tracking-wide">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            {profileData.name}.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] leading-tight mb-8">
            {profileData.title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed mb-10 text-[#8892b0]">
            {profileData.summary} Currently engineering high-impact solutions at 
            <span className="text-[#64ffda]"> Revino</span>.
          </p>
          <div className="flex gap-6">
            <a href={profileData.links.github} target="_blank" rel="noreferrer" 
               className="p-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all duration-300">
              <Github size={22} />
            </a>
            <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" 
               className="p-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all duration-300">
              <Linkedin size={22} />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <h3 className="text-2xl font-bold text-[#ccd6f6] mb-12 flex items-center gap-4 before:content-['01.'] before:text-[#64ffda] before:font-mono before:text-lg">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#112240] p-8 rounded-lg border border-transparent hover:border-[#64ffda]/30 transition-all duration-300 group hover:-translate-y-2 shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <Terminal className="text-[#64ffda]" size={32} />
                  <div className="flex gap-4 text-[#ccd6f6]">
                    <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-[#64ffda] transition-colors">
                      <Github size={20} />
                    </a>
                    <ExternalLink size={20} className="hover:text-[#64ffda] cursor-pointer" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors">
                  {project.title}
                </h4>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.split(',').map((t) => (
                    <span key={t} className="text-[11px] font-mono text-[#64ffda]">
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <ul className="text-[12px] text-[#64ffda]/70 font-mono space-y-1">
                  {project.features.slice(0, 2).map(f => <li key={f}>▹ {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Accomplishments Grid */}
        <section className="mb-32">
          <h3 className="text-2xl font-bold text-[#ccd6f6] mb-12 flex items-center gap-4 before:content-['02.'] before:text-[#64ffda] before:font-mono before:text-lg">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accomplishments.map((acc, i) => (
              <div key={i} className="p-6 bg-[#112240] rounded border border-transparent hover:bg-[#233554] transition-all duration-300 group">
                <p className="text-[#64ffda] font-mono text-[10px] mb-2 uppercase tracking-widest">{acc.category}</p>
                <h4 className="text-[#ccd6f6] font-bold text-sm mb-2">{acc.title}</h4>
                <p className="text-[11px] text-[#8892b0] leading-relaxed">{acc.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-10 flex items-center gap-4 before:content-['03.'] before:text-[#64ffda] before:font-mono before:text-lg">
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-[#112240] hover:border-[#64ffda] transition-colors duration-500">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0a192f] border-2 border-[#64ffda]"></div>
              <h4 className="text-[#ccd6f6] font-bold text-lg leading-none">{education.degree}</h4>
              <p className="text-[#64ffda] text-sm my-2 font-mono">{education.college}</p>
              <div className="flex flex-col text-xs font-mono gap-1 text-[#8892b0]">
                <span>GPA: {education.gpa}</span>
                <span>Class of {education.graduation}</span>
              </div>
            </div>
          </div>

          <div id="skills">
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-10 flex items-center gap-4 before:content-['04.'] before:text-[#64ffda] before:font-mono before:text-lg">
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {["MERN Stack", "Java (DSA)", "Python", "DevOps", "AI Agents", "Cloud Computing", "SaaS", "MySQL", "Git"].map((skill) => (
                <div key={skill} className="flex items-center gap-2 group">
                  <span className="text-[#64ffda] group-hover:translate-x-1 transition-transform">▹</span>
                  <span className="font-mono text-sm group-hover:text-[#64ffda] transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-[#112240] text-xs font-mono text-[#8892b0]">
        <p className="hover:text-[#64ffda] transition-colors cursor-default">
          Designed & Built by Divyansh Verma &copy; 2026
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;