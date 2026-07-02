import SkillCard from '../components/SkillCard';
import { Code, Server, Wrench, GraduationCap, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
  const frontendSkills = [
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "JavaScript (ES6+)", iconClass: "devicon-javascript-plain colored" },
    { name: "HTML5 / CSS3", iconClass: "devicon-html5-plain colored" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "Vite", iconClass: "devicon-vitejs-plain colored" }
  ];
  const backendSkills = [
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "Express.js", iconClass: "devicon-express-original" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    { name: "RESTful APIs", iconClass: "" },
    { name: "Mongoose", iconClass: "devicon-mongoose-original colored" }
  ];
  const toolSkills = [
    { name: "Figma", iconClass: "devicon-figma-plain colored" },
    { name: "Git / GitHub", iconClass: "devicon-github-original" },
    { name: "Postman", iconClass: "devicon-postman-plain colored" },
    { name: "Multitasking", iconClass: "" },
    { name: "Problem Solving", iconClass: "" },
    { name: "VS Code", iconClass: "devicon-vscode-plain colored" }
  ];

  return (
    <div className="about-page section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* Left Column: Bio & Services */}
          <div className="about-left-column">
            {/* Bio Section */}
            <div className="about-bio glass-panel">
              <h3>My Journey</h3>
              <p>
                Hello! I'm Sok Thonsar, a Year 2 Software Engineering student currently studying at Camtech University. 
                I consider myself a creative, smart, and hard-working developer who thrives on solving complex problems.
              </p>
              <p>
                I am a talented developer capable of using a variety of modern tools to complete projects smoothly. 
                One of my core strengths is my ability to multitask effectively, allowing me to manage different aspects 
                of a project simultaneously without compromising on quality.
              </p>
              <p>
                My goal is to continue growing my skill set, building efficient software solutions, and eventually 
                making a significant impact in the tech industry.
              </p>
            </div>

            {/* Services Section */}
            <div className="about-services glass-panel">
              <h3>Services I Offer</h3>
              <ul className="services-list">
                <li>
                  <span className="service-icon"><Briefcase size={20} /></span>
                  <span>Business Analyst</span>
                </li>
                <li>
                  <span className="service-icon"><Code size={20} /></span>
                  <span>Website Development</span>
                </li>
                <li>
                  <span className="service-icon"><Wrench size={20} /></span>
                  <span>UX/UI Design</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Education & Experience Section */}
          <div className="about-education glass-panel">
            <div className="ed-header">
              <GraduationCap size={28} className="ed-icon" />
              <h3>Education & Experience</h3>
            </div>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>"Unipreneur" Hackathon</h4>
                  <h5>Participant / Developer</h5>
                  <p className="timeline-date">Current (Year 2)</p>
                  <p>Prototyped a mobile application designed to assist visually impaired individuals. Developed the core system architecture and functional prototype.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Bachelor Degree in Software Engineering</h4>
                  <h5>Camtech University</h5>
                  <p className="timeline-date">Current (Year 2)</p>
                  <p>Focusing on foundational computer science principles, algorithms, and modern web development technologies.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>High School Diploma (Khmer Program)</h4>
                  <h5>Cheasim Samaki High School</h5>
                  <p className="timeline-date">2024</p>
                  <p>Successfully graduated with a strong foundation in science and mathematics.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>General English Program (GEP)</h4>
                  <h5>Australian Centre for Education (ACE)</h5>
                  <p className="timeline-date">2024</p>
                  <p>Graduated from the GEP program and achieved an IELTS score of 5.5.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Technical Skills</h3>
        <div className="skills-grid">
          <SkillCard title="Frontend Development" skills={frontendSkills} icon={Code} />
          <SkillCard title="Backend Development" skills={backendSkills} icon={Server} />
          <SkillCard title="Tools & Soft Skills" skills={toolSkills} icon={Wrench} />
        </div>
      </div>
    </div>
  );
};

export default About;
