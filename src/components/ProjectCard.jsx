import { ExternalLink } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card glass-panel" onClick={() => onClick(project)}>
      <div className="project-image-container">
        <img 
          src={project.imageUrl || project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'} 
          alt={project.title} 
          className="project-image"
        />
        <div className="project-overlay">
          <span>View Details</span>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech-stack">
          {project.technologies?.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="tech-badge">+{project.technologies.length - 3}</span>
          )}
        </div>
        
        <div className="project-links" onClick={(e) => e.stopPropagation()}>
          {(project.githubUrl || project.githubLink) && (
            <a href={project.githubUrl || project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
              <GithubIcon size={18} />
            </a>
          )}
          {(project.liveUrl || project.liveLink) && (
            <a href={project.liveUrl || project.liveLink} target="_blank" rel="noopener noreferrer" className="icon-link">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
