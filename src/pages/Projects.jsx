import { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import { X, ExternalLink } from 'lucide-react';
import GithubIcon from '../components/icons/GithubIcon';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects-page section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner large"></div>
            <p>Loading amazing projects...</p>
          </div>
        )}
        
        {error && (
          <div className="error-container glass-panel">
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && projects.length === 0 && (
          <div className="empty-projects glass-panel">
            <p>No projects found. Please add some via the backend API!</p>
          </div>
        )}
        
        {!loading && !error && projects.length > 0 && (
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard 
                key={project._id} 
                project={project} 
                onClick={openModal} 
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-image">
              <img 
                src={selectedProject.imageUrl || selectedProject.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'} 
                alt={selectedProject.title} 
              />
            </div>
            
            <div className="modal-body">
              <h3>{selectedProject.title}</h3>
              
              <div className="modal-tech">
                {selectedProject.technologies?.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-actions">
                {(selectedProject.liveUrl || selectedProject.liveLink) && (
                  <a href={selectedProject.liveUrl || selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {(selectedProject.githubUrl || selectedProject.githubLink) && (
                  <a href={selectedProject.githubUrl || selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <GithubIcon size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
