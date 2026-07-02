import './SkillCard.css';

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="skill-card glass-panel">
      <div className="skill-header">
        {Icon && <Icon className="skill-icon" size={24} />}
        <h3 className="skill-title">{title}</h3>
      </div>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill.iconClass ? (
              <i className={`${skill.iconClass} skill-devicon`}></i>
            ) : (
              <span className="skill-dot"></span>
            )}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
