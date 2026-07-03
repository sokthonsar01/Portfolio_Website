import { ArrowRight, Download } from 'lucide-react';
import GithubIcon from '../components/icons/GithubIcon';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="greeting">Hello, I'm</h2>
            <h1 className="name-title">Sok Thonsar</h1>
            <h3 className="profession-title">Software Engineering Student</h3>
            
            <p className="hero-description">
              A Year 2 student at Camtech University. I am a talented, creative, and hardworking developer who is passionate about building smooth and efficient software solutions.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <ArrowRight size={18} />
              </Link>
              <a href="/CV.pdf" download="Sok_Thonsar_CV.pdf" className="btn btn-outline">
                <Download size={18} />
                Download CV
              </a>
              <a href="https://github.com/sokthonsar01" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <GithubIcon size={18} />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="glass-panel profile-card">
              <div className="profile-image-container">
                <img src="https://i.imgur.com/cw9L87k.jpeg" alt="Sok Thonsar" className="profile-image" />
              </div>
              <div className="profile-info">
                <h4>Sok Thonsar</h4>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
