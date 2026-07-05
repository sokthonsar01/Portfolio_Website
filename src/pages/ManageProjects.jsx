import { useState, useEffect } from 'react';
import { fetchProjects, createProject, updateProject, deleteProject } from '../services/api';
import { Plus, Pencil, Trash2, X, Check, Loader2, Lock, Unlock } from 'lucide-react';
import './ManageProjects.css';

const ADMIN_PASSWORD = '1234567890';

const emptyForm = {
  title: '',
  description: '',
  problem: '',
  technologies: '',
  imageUrl: '',
  githubUrl: '',
  liveUrl: '',
  contribution: '',
  challenges: '',
  lessonsLearned: '',
  featured: false,
};

const ManageProjects = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setPasswordInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput('');
    setProjects([]);
    setForm(emptyForm);
    setEditingId(null);
  };

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError('Failed to load projects. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleEdit = (project) => {
    setForm({
      ...project,
      technologies: Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies,
    });
    setEditingId(project._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p._id !== id));
      showMessage('Project deleted successfully');
    } catch (err) {
      showMessage(err.message || 'Failed to delete project', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...form,
      technologies: form.technologies.split(',').map((t) => t.trim()).filter(Boolean),
    };

    try {
      if (editingId) {
        const updated = await updateProject(editingId, payload);
        setProjects((prev) => prev.map((p) => (p._id === editingId ? updated : p)));
        showMessage('Project updated successfully');
      } else {
        const created = await createProject(payload);
        setProjects((prev) => [...prev, created]);
        showMessage('Project created successfully');
      }
      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      showMessage(err.message || 'Failed to save project', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="manage-page section">
        <div className="container">
          <div className="login-card glass-panel">
            <Lock className="login-icon" size={48} />
            <h2>Admin Access</h2>
            <p>Enter the admin password to manage portfolio projects.</p>
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Admin password"
                className="glass-input"
                autoFocus
              />
              {passwordError && (
                <span className="login-error">Incorrect password. Please try again.</span>
              )}
              <button type="submit" className="btn btn-primary">
                <Unlock size={18} /> Unlock
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="manage-page section">
      <div className="container">
        <div className="manage-header">
          <h2 className="section-title">Manage Projects</h2>
          <button onClick={handleLogout} className="btn btn-outline logout-btn">
            <Lock size={18} /> Log Out
          </button>
        </div>

        {message && (
          <div className={`alert ${message.type === 'error' ? 'alert-error' : 'alert-success'}`}>
            {message.type === 'error' ? <X size={18} /> : <Check size={18} />}
            <span>{message.text}</span>
          </div>
        )}

        {error && <div className="alert alert-error"><X size={18} /> <span>{error}</span></div>}

        <div className="manage-layout">
          <section className="form-section glass-panel">
            <h3>{editingId ? 'Edit Project' : 'Add New Project'}</h3>
            <form onSubmit={handleSubmit} className="manage-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    className="glass-input"
                    placeholder="Project title"
                  />
                </div>

                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={form.imageUrl}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="https://..."
                  />
                </div>

                <div className="form-group">
                  <label>GitHub URL</label>
                  <input
                    type="url"
                    name="githubUrl"
                    value={form.githubUrl}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="https://github.com/..."
                  />
                </div>

                <div className="form-group">
                  <label>Live URL</label>
                  <input
                    type="url"
                    name="liveUrl"
                    value={form.liveUrl}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="https://..."
                  />
                </div>

                <div className="form-group full-width">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="glass-input"
                    placeholder="Short description shown on the project card"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Problem / Context</label>
                  <textarea
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    rows="2"
                    className="glass-input"
                    placeholder="What problem does this project solve?"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Technologies (comma separated) *</label>
                  <input
                    type="text"
                    name="technologies"
                    value={form.technologies}
                    onChange={handleChange}
                    required
                    className="glass-input"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Your Contribution</label>
                  <textarea
                    name="contribution"
                    value={form.contribution}
                    onChange={handleChange}
                    rows="2"
                    className="glass-input"
                    placeholder="What did you build or design?"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Challenges</label>
                  <textarea
                    name="challenges"
                    value={form.challenges}
                    onChange={handleChange}
                    rows="2"
                    className="glass-input"
                    placeholder="What was difficult?"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Lessons Learned</label>
                  <textarea
                    name="lessonsLearned"
                    value={form.lessonsLearned}
                    onChange={handleChange}
                    rows="2"
                    className="glass-input"
                    placeholder="What did you learn?"
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={form.featured}
                      onChange={handleChange}
                    />
                    <span>Featured project</span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="spinner" size={18} /> : editingId ? <Pencil size={18} /> : <Plus size={18} />}
                  {isSubmitting ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
                </button>
                {editingId && (
                  <button type="button" className="btn btn-outline" onClick={handleCancel}>
                    <X size={18} /> Cancel
                  </button>
                )}
              </div>
            </form>
          </section>

          <section className="list-section">
            <h3>Existing Projects ({projects.length})</h3>
            {loading ? (
              <div className="loading-container">
                <Loader2 className="loading-spinner large" size={48} />
                <p>Loading projects...</p>
              </div>
            ) : projects.length === 0 ? (
              <div className="empty-list glass-panel">
                <p>No projects yet. Add your first project above.</p>
              </div>
            ) : (
              <div className="project-list">
                {projects.map((project) => (
                  <div key={project._id} className="project-row glass-panel">
                    <div className="project-row-info">
                      <img
                        src={project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&q=80'}
                        alt={project.title}
                        className="project-row-thumb"
                      />
                      <div className="project-row-text">
                        <h4>{project.title}</h4>
                        <p>{project.technologies?.slice(0, 3).join(', ')}</p>
                        {project.featured && <span className="featured-badge">Featured</span>}
                      </div>
                    </div>
                    <div className="project-row-actions">
                      <button
                        className="btn-icon edit"
                        onClick={() => handleEdit(project)}
                        aria-label="Edit project"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        className="btn-icon delete"
                        onClick={() => handleDelete(project._id)}
                        aria-label="Delete project"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManageProjects;
