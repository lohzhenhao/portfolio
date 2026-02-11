import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export default function ProjectDetail() {
  const { projectId } = useParams();

  // In a real app, you've fetch this from a data file or API
  const projectData = {
    'project_1': {
      title: "Portfolio Website",
      about: "This website was created using React & Tailwind CSS.",
      purpose: "To showcase my technical expertise, project history, and design philosophy in a centralized, responsive hub.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "",
      description: "A high-performance personal brand site featuring a component-based architecture. Leveraging Tailwind CSS for utility-first styling, the site ensures a seamless experience across all devices while maintaining a lightweight footprint."
    },
    'project_2': {
      title: "",
      about: "",
      purpose: "",
      tech: [],
      image: "",
      description: ""
    },
    'project_3': {
      title: "",
      about: "",
      purpose: "",
      tech: [],
      image: "",
      description: ""
    },
    'project_4': {
      title: "",
      about: "",
      purpose: "",
      tech: [],
      image: "",
      description: ""
    },
  };

  const project = projectData[projectId];

  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <Link to="/portfolio/" className="flex items-center gap-2 text-cyan-400 mb-8 hover:underline">
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="flex gap-2 mb-8">
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1 bg-slate-800 rounded-full text-sm">{t}</span>
        ))}
      </div>
      
      <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
        {project.about}
      </p>
    </div>
  );
}