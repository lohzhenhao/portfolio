import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Code, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useLayoutEffect } from 'react';
const BASE_URL = import.meta.env.BASE_URL;
export default function ProjectDetail() {
  const { projectId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectData = {
    'project_1': {
      title: "Portfolio Website",
      about: "This website was created using React & Tailwind CSS.",
      purpose: "To showcase my technical expertise, project history, and design philosophy in a centralized, responsive hub.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      images: [
        `${BASE_URL}assets/project_1/1.png`, 
        `${BASE_URL}assets/project_1/2.png`, 
        `${BASE_URL}assets/project_1/3.png`,  
        `${BASE_URL}assets/project_1/4.png`, 
        `${BASE_URL}assets/project_1/5.png`, 
      ],
      description: "A high-performance personal brand site featuring a component-based architecture. Leveraging Tailwind CSS for utility-first styling, the site ensures a seamless experience across all devices while maintaining a lightweight footprint.",
      github: "https://github.com/lohzhenhao/portfolio",
      demo: "https://lohzhenhao.github.io/portfolio"
    },
    'project_2': {
      title: "Password Strength Analyzer",
      about: "An interactive web tool that analyzes password strength using advanced algorithms.",
      purpose: "To help users create more secure passwords through real-time feedback and educational insights.",
      tech: ["JavaScript", "CSS3", "Security Algorithms"],
      images: [],
      description: "Built with vanilla JavaScript, this tool provides instant visual feedback on password strength. Features include entropy calculation, pattern detection, and personalized recommendations for improvement.",
      github: "#",
      demo: "#"
    },
    'project_3': {
      title: "Network Monitor Dashboard",
      about: "A real-time network monitoring dashboard that visualizes traffic patterns and security events.",
      purpose: "To provide network administrators with intuitive, actionable insights into network health and security.",
      tech: ["React", "D3.js", "WebSocket"],
      images: [],
      description: "Real-time data visualization dashboard with live traffic monitoring, threat detection alerts, and historical trend analysis. Built with React and D3.js for smooth, performant visualizations.",
      github: "#",
      demo: "#"
    },
    'project_4': {
      title: "Portfolio Website v1",
      about: "My first portfolio website built from scratch using vanilla HTML, CSS, and JavaScript.",
      purpose: "To establish my online presence and demonstrate foundational web development skills.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      images: [],
      description: "A fully responsive portfolio showcasing clean code architecture, smooth animations, and accessibility best practices. Built without frameworks to demonstrate core web development fundamentals.",
      github: "#",
      demo: "#"
    },
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-200">Project Not Found</h1>
          <p className="text-slate-400">The project you're looking for doesn't exist.</p>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const hasImages = project.images && project.images.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  useLayoutEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}, [projectId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(30, 41, 59) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(30, 41, 59) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating accent elements */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" 
           style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" 
           style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          to="/?scrollTo=projects"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>

        {/* Header Section */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
            <Code size={16} />
            <span>project_detail.tsx</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3">
            {project.tech.map(tech => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-full text-sm font-medium hover:border-cyan-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {project.github && project.github !== "#" && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                <Github size={20} />
                View Code
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Image Carousel or Placeholder */}
        {hasImages ? (
          <div className="mb-16 relative group">
            {/* Main Image Container */}
            <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900 relative">
              <div className="relative aspect-video">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Counter Overlay */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-lg px-3 py-1.5">
                  <p className="text-xs font-mono text-slate-400">
                    {currentImageIndex + 1} / {project.images.length}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2 justify-center">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-cyan-500 shadow-lg shadow-cyan-500/30' 
                        : 'border-slate-800 hover:border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Dot Indicators */}
            {project.images.length > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-cyan-500 w-8' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mb-16 h-96 bg-gradient-to-br from-cyan-900/20 via-emerald-900/20 to-slate-900 rounded-lg border border-slate-800 relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <Code className="text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors" size={120} />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-400 font-mono">// Project preview coming soon...</p>
              </div>
            </div>
          </div>
        )}

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* About Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 text-cyan-400">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Zap size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-200">About</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {project.about}
            </p>
          </div>

          {/* Purpose Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 text-emerald-400">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <Target size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-200">Purpose</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {project.purpose}
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">Technical Overview</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <Link 
            to="/?scrollTo=projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to all projects</span>
          </Link>
        </div>
      </div>
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@300;400;600;700&display=swap');
        
        * {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        code, pre, .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Custom scrollbar for thumbnails */
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgb(15, 23, 42);
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgb(51, 65, 85);
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgb(71, 85, 105);
        }
      `}</style>
    </div>
  );
}