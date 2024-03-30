import React from 'react';
import '../Global.css';
import { FaFigma,  FaSketch, FaNodeJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
// import { SiAdobePhotoshop } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';

const skills = [
  { name: 'Figma', description: 'Lorem ipsum text dummy', icon: FaFigma },
  
  { name: 'Sketch', description: 'Lorem ipsum text dummy', icon: FaSketch },
  { name: 'Node js', description: 'Lorem ipsum text dummy', icon: FaNodeJs },
  
  
];
const sk = [
    { name: 'React js', description: 'Lorem ipsum text dummy', icon: FaReact },
    { name: 'Python', description: 'Lorem ipsum text dummy', icon: FaPython },
    { name: 'Java', description: 'Lorem ipsum text dummy', icon: FaJava},
]

const SkillCard = ({ name, description, icon: Icon }) => (
  <div className="skill-card">
    <div className="skill-icon">
      <Icon size="2em" />
    </div>
    <div className="skill-details">
      <h3 className="skill-title">{name}</h3>
      <p className="skill-description">{description}</p>
    </div>
    <div className="skill-arrow">
      <AiOutlineArrowRight size="1.5em" />
    </div>
  </div>
);

const Skills = () => (
  <div id='Skills' className="skills-container">
    <h2>My Top Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
    <div className="skills-grids">
      {sk.map((skills, index) => (
        <SkillCard key={index} {...skills} />
      ))}
    </div>
  </div>
);

export default Skills;
