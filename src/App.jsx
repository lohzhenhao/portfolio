import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code, Shield, Terminal, Cpu, Database, Lock } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(30, 41, 59) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(30, 41, 59) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
      </div>

      {/* Floating accent elements */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" 
           style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" 
           style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-sm tracking-wider text-cyan-400">
            {'<LZH />'}
          </div>
          <div className="flex gap-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-widest transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === section ? 'text-cyan-400' : 'text-slate-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <div className="relative">
            {/* Decorative code snippet background */}
            <div className="absolute -top-20 -left-20 font-mono text-xs text-slate-800 leading-relaxed opacity-30 select-none">
              {'const developer = {\n  background: "cybersecurity",\n  passion: "frontend",\n  mission: "secure & beautiful"\n};'}
            </div>
            
            <div className="relative z-10 space-y-6 animate-fadeIn">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
                <Terminal size={16} />
                <span>console.log("Hello World")</span>
              </div>
              
              <h1 className="text-7xl font-bold tracking-tight">
                <span className="text-slate-100">Loh Zhen Hao</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <p className="text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
                Cybersecurity graduate with a passion for building secure, 
                <span className="text-cyan-400"> beautiful</span>, and 
                <span className="text-emerald-400"> user-centered</span> web experiences.
              </p>
              
              <div className="flex gap-4 pt-6">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
                <Code size={16} />
                <span>about_me.md</span>
              </div>
              
              <h2 className="text-5xl font-bold text-slate-100">
                Bridging Security <br />
                <span className="text-emerald-400">& Design</span>
              </h2>
              
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a recent graduate with a Diploma in Cybersecurity & Digital Forensics, 
                  bringing a unique perspective to frontend development. My background in security 
                  gives me a deep understanding of data protection, threat modeling, and secure 
                  coding practices.
                </p>
                <p>
                  While pursuing my diploma, I discovered a passion for creating intuitive, 
                  accessible web interfaces. I love the intersection of security and user 
                  experience—building applications that are both safe and delightful to use.
                </p>
                <p>
                  Currently seeking opportunities to apply my technical foundation and creative 
                  problem-solving skills in frontend development, where I can contribute to 
                  building secure, scalable, and beautiful web applications.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
                
                <h3 className="text-xl font-semibold mb-6 text-slate-200">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-slate-300">Education</div>
                      <div className="text-sm text-slate-500">Nanyang Polytechnic (Diploma in Cybersecurity & Digital Forensics (C54))</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Code className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-slate-300">Interests</div>
                      <div className="text-sm text-slate-500">Frontend Development, UI/UX Design, Web Security</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Cpu className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-slate-300">Currently Learning</div>
                      <div className="text-sm text-slate-500">React, TypeScript, Modern Web Frameworks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono text-sm">
                <Terminal size={16} />
                <span>skills.json</span>
              </div>
              <h2 className="text-5xl font-bold text-slate-100">
                Technical <span className="text-emerald-400">Arsenal</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <div className="group bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-200">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Responsive Design'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cybersecurity */}
              <div className="group bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Shield className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-200">Cybersecurity</h3>
                <div className="flex flex-wrap gap-2">
                  {['Network Security', 'Digital Forensics', 'Threat Analysis', 'Security Best Practices', 'Data Protection'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Languages */}
              <div className="group bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Database className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-200">Tools & Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Git & GitHub', 'VS Code', 'Linux', 'SQL', 'Node.js'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-slate-200">Core Competencies</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  'Problem Solving',
                  'Team Collaboration',
                  'Clear Communication',
                  'Continuous Learning',
                  'Attention to Detail',
                  'Time Management',
                  'Analytical Thinking',
                  'Adaptability'
                ].map(skill => (
                  <div key={skill} className="flex items-center gap-2 text-slate-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono text-sm">
                <Lock size={16} />
                <span>projects.tsx</span>
              </div>
              <h2 className="text-5xl font-bold text-slate-100">
                Featured <span className="text-emerald-400">Work</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A selection of projects showcasing my frontend development and cybersecurity skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="h-48 bg-gradient-to-br from-cyan-900/20 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    Secure Task Manager
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    A full-stack task management application with end-to-end encryption, 
                    built with React and Node.js. Features include secure authentication, 
                    real-time updates, and responsive design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      React
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      Encryption
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="h-48 bg-gradient-to-br from-emerald-900/20 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                    Password Strength Analyzer
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    An interactive web tool that analyzes password strength using advanced algorithms. 
                    Provides real-time feedback and suggestions for creating secure passwords with 
                    beautiful visualizations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/30">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/30">
                      CSS3
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/30">
                      Security
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="h-48 bg-gradient-to-br from-purple-900/20 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="text-purple-400/20 group-hover:text-purple-400/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">
                    Network Monitor Dashboard
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    A real-time network monitoring dashboard that visualizes traffic patterns and 
                    security events. Built with modern web technologies and data visualization libraries 
                    for intuitive insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      D3.js
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      WebSocket
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="h-48 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal className="text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors" size={64} />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    Portfolio Website v1
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    My first portfolio website built from scratch using vanilla HTML, CSS, and JavaScript. 
                    Features smooth animations, responsive design, and a focus on clean, accessible code.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      HTML5
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      CSS3
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      JavaScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
                <Mail size={16} />
                <span>contact.js</span>
              </div>
              
              <h2 className="text-5xl font-bold text-slate-100">
                Let's Build <br />
                <span className="text-emerald-400">Something Great</span>
              </h2>
              
              <p className="text-slate-400 leading-relaxed text-lg">
                I'm always excited to connect with fellow developers, potential employers, 
                and anyone interested in discussing technology, security, or frontend development. 
                Feel free to reach out!
              </p>

              <div className="space-y-4 pt-4">
                <a href="mailto:250633P@mymail.nyp.edu.sg" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-slate-500">250633P@mymail.nyp.edu.sg</div>
                  </div>
                </a>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-slate-500">github.com/lohzhenhao</div>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-slate-500">linkedin.com/in/lohzhenhao</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-slate-200">Send a Message</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-slate-200 placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-slate-200 placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-slate-200 placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-sm text-slate-500">
              © 2026 Loh Zhen Hao. Built with React & Tailwind CSS.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/lohzhenhao" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/lohzhenhao" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:250633P@mymail.nyp.edu.sg" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@300;400;600;700&display=swap');
        
        * {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        code, pre, .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgb(2, 6, 23);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgb(51, 65, 85);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgb(71, 85, 105);
        }
      `}</style>
    </div>
  );
}
